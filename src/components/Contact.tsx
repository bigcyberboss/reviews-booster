"use client";

import { useState } from "react";
import { useLang } from "./LangContext";

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.2 4.4 2.4 10.8c-.6.2-.6 1.1 0 1.3l4.8 1.5 2 6.2c.1.4.6.6 1 .3l2.8-2.2 4.8 3.5c.4.3 1 .1 1.1-.4L22.4 5.5c.2-.7-.5-1.3-1.2-1.1z" />
    <path d="m9.2 13.6 8-6.4" />
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.9 5.2A16.5 16.5 0 0 0 14.8 4a12 12 0 0 0-.5 1.1 15.3 15.3 0 0 0-4.6 0A12 12 0 0 0 9.2 4a16.5 16.5 0 0 0-4.1 1.2C2.3 9.5 1.6 13.7 2 17.8a16.7 16.7 0 0 0 5.1 2.6 12 12 0 0 0 1.1-1.7 10.7 10.7 0 0 1-1.7-.8l.4-.3a11.8 11.8 0 0 0 10.2 0l.4.3c-.5.3-1.1.6-1.7.8a12 12 0 0 0 1.1 1.7 16.7 16.7 0 0 0 5.1-2.6c.5-4.7-.8-8.9-3.5-12.6z" />
    <circle cx="8.5" cy="13.5" r="1.5" fill="var(--accent-glow)" stroke="none" />
    <circle cx="15.5" cy="13.5" r="1.5" fill="var(--accent-glow)" stroke="none" />
  </svg>
);

const CHANNELS_DATA = [
  { icon: <TelegramIcon />, key: "telegram" as const, value: "@username", href: "https://t.me/username" },
  { icon: <EmailIcon />, key: "email" as const, value: "reputation@yourdomain.com", href: "mailto:reputation@yourdomain.com" },
  { icon: <DiscordIcon />, key: "discord" as const, value: "username#0000", href: "#" },
];

export function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t.contact.heading1}{" "}
            <span className="gradient-text">{t.contact.headingHighlight}</span>
          </h2>
          <p className="text-text-secondary text-lg">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Form */}
          <div className="glass-card p-8 animate-on-scroll">
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-5xl mb-4 block">&#10003;</span>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {t.contact.successTitle}
                </h3>
                <p className="text-text-secondary">
                  {t.contact.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="text-sm text-text-secondary mb-1.5 block">
                    {t.contact.labelName}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-hover/50 border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder={t.contact.placeholderName}
                  />
                </div>

                <div>
                  <label htmlFor="link" className="text-sm text-text-secondary mb-1.5 block">
                    {t.contact.labelLink}
                  </label>
                  <input
                    id="link"
                    type="url"
                    className="w-full px-4 py-3 rounded-xl bg-bg-hover/50 border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder={t.contact.placeholderLink}
                  />
                </div>

                <div>
                  <label htmlFor="messenger" className="text-sm text-text-secondary mb-1.5 block">
                    {t.contact.labelMessenger}
                  </label>
                  <input
                    id="messenger"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-hover/50 border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder={t.contact.placeholderMessenger}
                  />
                </div>

                <button type="submit" className="glow-btn mt-2">
                  {t.contact.submit}
                </button>
              </form>
            )}
          </div>

          {/* Right side — channels + scarcity */}
          <div className="flex flex-col gap-6 animate-on-scroll justify-between">
            {/* Contact channels */}
            {CHANNELS_DATA.map((ch) => (
              <a
                key={ch.key}
                href={ch.href}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <span className="flex-shrink-0">{ch.icon}</span>
                <div>
                  <div className="text-sm text-text-muted">{t.contact[ch.key]}</div>
                  <div className="text-text-primary font-medium group-hover:text-accent transition-colors">
                    {ch.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Scarcity trigger */}
            <div className="glass-card p-6 border-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-success" style={{ animation: "glow-pulse 2s ease-in-out infinite" }} />
                <span className="text-sm font-semibold text-success">{t.contact.slotsOpen}</span>
              </div>
              <p className="text-text-secondary">
                {t.contact.slotsText1}{" "}
                <span className="text-text-primary font-semibold">{t.contact.slotsCount}</span>{" "}
                {t.contact.slotsText2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
