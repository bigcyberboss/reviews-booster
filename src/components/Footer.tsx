"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-[1fr_1fr_auto_auto] gap-x-10 gap-y-10 mb-12">
          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Contacts</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="https://t.me/your_telegram_username" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="mailto:reputation@yourdomain.com" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/privacy-policy" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation left */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/#how-it-works" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#advantages" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Advantages
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation right */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 invisible" aria-hidden="true">.</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/#contacts" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Cases
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Back to Top &uarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Keywords */}
        <div className="border-t border-border pt-8 mb-6">
          <p className="text-xs text-text-muted text-center tracking-wide">
            SERM Team. White Label. Moderation Guarantee. Full Confidentiality.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 rounded-md opacity-25"
                style={{
                  background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                  filter: "blur(3px)",
                }}
              />
              <div className="relative w-5 h-5 rounded-md flex items-center justify-center border border-white/10"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.12))" }}>
                <span className="text-[8px] font-heading text-white font-semibold">RB</span>
              </div>
            </div>
            <span className="text-xs text-text-muted">
              &copy; 2026 Review Boosters. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
