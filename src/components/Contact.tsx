"use client";

import { useState } from "react";
import { useLang } from "./LangContext";

const CHANNELS_DATA = [
  { icon: "&#9992;", key: "telegram" as const, value: "@username", href: "https://t.me/username" },
  { icon: "&#9993;", key: "email" as const, value: "reputation@yourdomain.com", href: "mailto:reputation@yourdomain.com" },
  { icon: "&#128172;", key: "discord" as const, value: "username#0000", href: "#" },
];

export function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
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
                <span className="text-2xl" dangerouslySetInnerHTML={{ __html: ch.icon }} />
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
