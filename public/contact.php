<?php
declare(strict_types=1);

// Contact form handler — sends submissions to Telegram.
// Secrets live at __DIR__ . '/.telegram_secret.php' (same dir, dot-prefixed).
// The file is never in git; it's created manually on the server via File Manager.
// Deploy script must --exclude .telegram_secret.php to avoid wiping it.

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function fail(int $code, string $msg = 'Bad request'): never {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Method not allowed');
}

$allowedOrigin = 'https://review-boosters.org';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$referer = $_SERVER['HTTP_REFERER'] ?? '';
if ($origin !== '' && $origin !== $allowedOrigin) {
    fail(403, 'Forbidden origin');
}
if ($origin === '' && !str_starts_with($referer, $allowedOrigin)) {
    fail(403, 'Forbidden referer');
}

$secretsPath = __DIR__ . '/.telegram_secret.php';
if (!is_readable($secretsPath)) {
    error_log('contact.php: secrets file missing at ' . $secretsPath);
    fail(500, 'Server misconfigured');
}
$secrets = require $secretsPath;
$token = $secrets['bot_token'] ?? '';
$chatId = $secrets['chat_id'] ?? '';
if ($token === '' || $chatId === '') {
    fail(500, 'Server misconfigured');
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    fail(400, 'Invalid payload');
}

// Honeypot — hidden field bots tend to fill. Pretend success.
if (!empty($data['hp'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$website = trim((string)($data['website'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$profile = trim((string)($data['profile'] ?? ''));
$info = trim((string)($data['info'] ?? ''));

if ($website === '' || $email === '') {
    fail(400, 'Website and email are required');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(400, 'Invalid email');
}
if (mb_strlen($website) > 200 || mb_strlen($email) > 200 || mb_strlen($profile) > 300 || mb_strlen($info) > 5000) {
    fail(400, 'Field too long');
}

// Basic IP rate limit: 5 requests per 10 minutes per IP.
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateFile = sys_get_temp_dir() . '/rb_contact_' . hash('sha256', $ip);
$now = time();
$window = 600;
$maxHits = 5;
$hits = [];
if (is_readable($rateFile)) {
    $prev = json_decode((string)@file_get_contents($rateFile), true);
    if (is_array($prev)) {
        $hits = array_values(array_filter($prev, static fn($t): bool => is_int($t) && $t > $now - $window));
    }
}
if (count($hits) >= $maxHits) {
    fail(429, 'Too many requests');
}
$hits[] = $now;
@file_put_contents($rateFile, json_encode($hits), LOCK_EX);

$escape = static fn(string $s): string => htmlspecialchars($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');

$lines = [
    '<b>🔥 New Lead — review-boosters.org</b>',
    '',
    '<b>Website:</b> ' . $escape($website),
    '<b>Email:</b> ' . $escape($email),
];
if ($profile !== '') {
    $lines[] = '<b>Reviews.io profile:</b> ' . $escape($profile);
}
if ($info !== '') {
    $lines[] = '';
    $lines[] = '<b>Message:</b>';
    $lines[] = $escape($info);
}
$lines[] = '';
$lines[] = '<i>IP: ' . $escape($ip) . '</i>';
$text = implode("\n", $lines);

$payload = http_build_query([
    'chat_id' => $chatId,
    'text' => $text,
    'parse_mode' => 'HTML',
    'disable_web_page_preview' => 'true',
]);

$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => $payload,
        'timeout' => 10,
        'ignore_errors' => true,
    ],
]);

$url = 'https://api.telegram.org/bot' . $token . '/sendMessage';
$response = @file_get_contents($url, false, $context);

$statusLine = $http_response_header[0] ?? '';
$httpCode = 0;
if (preg_match('#HTTP/\S+\s+(\d+)#', $statusLine, $m)) {
    $httpCode = (int)$m[1];
}

if ($response === false || $httpCode !== 200) {
    error_log('contact.php: telegram send failed, http=' . $httpCode);
    fail(502, 'Failed to deliver');
}

echo json_encode(['ok' => true]);
