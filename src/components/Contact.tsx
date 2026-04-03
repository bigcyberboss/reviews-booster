"use client";

import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const website = (form.elements.namedItem("website") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const newErrors: Record<string, string> = {};

    if (!website) newErrors.website = "Please enter your website";
    if (!email) newErrors.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Work <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Share your website and email. We&apos;ll reply with a plan to boost your social proof.
            <br className="hidden sm:block" />
            {" "}No Reviews.io profile? We&apos;ll help set it up.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="glass-card p-8 animate-on-scroll">
            {submitted ? (
              <div className="text-center py-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Request sent!
                </h3>
                <p className="text-text-secondary">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <label htmlFor="website" className="text-sm text-text-secondary mb-1.5 block">
                    Website <span className="text-accent">*</span>
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    onChange={() => errors.website && setErrors(e => ({ ...e, website: "" }))}
                    className={`w-full px-4 py-3 rounded-xl bg-[#1a1a2e] border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all ${errors.website ? "border-red-500" : "border-border"}`}
                    placeholder="yourwebsite.com"
                  />
                  {errors.website && <p className="text-red-400 text-xs mt-1.5">{errors.website}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-text-secondary mb-1.5 block">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={() => errors.email && setErrors(e => ({ ...e, email: "" }))}
                    className={`w-full px-4 py-3 rounded-xl bg-[#1a1a2e] border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all ${errors.email ? "border-red-500" : "border-border"}`}
                    placeholder="name@mail.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="reviews-profile" className="text-sm text-text-secondary mb-1.5 block">
                    Reviews.io profile <span className="text-text-muted">(optional)</span>
                  </label>
                  <input
                    id="reviews-profile"
                    name="reviews-profile"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a2e] border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="https://reviews.io/company-reviews/..."
                  />
                </div>

                <div>
                  <label htmlFor="info" className="text-sm text-text-secondary mb-1.5 block">
                    Additional info <span className="text-text-muted">(optional)</span>
                  </label>
                  <textarea
                    id="info"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a2e] border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                    placeholder="Your goals, questions, or requirements"
                  />
                </div>

                <button type="submit" className="glow-btn mt-2">
                  Send Request
                </button>

                <p className="text-text-muted text-xs text-center">
                  No spam. We&apos;ll reach out within 24 hours.
                </p>
              </form>
            )}
          </div>

          {/* Right — Telegram */}
          <div className="flex flex-col gap-6 animate-on-scroll">
            <div className="glass-card p-8 flex flex-col gap-5">
              <h3 className="text-lg font-semibold text-text-primary">Quick Communication</h3>
              <p className="text-text-secondary leading-relaxed">
                Prefer direct chat? Reach us on Telegram.
              </p>

              <a
                href="https://t.me/your_telegram_username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1a2e] border border-border hover:border-accent/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-border bg-bg-surface/80 shrink-0 group-hover:border-accent/40 group-hover:shadow-[0_0_16px_var(--glow-soft)] transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.2 4.4 2.4 10.8c-.6.2-.6 1.1 0 1.3l4.8 1.5 2 6.2c.1.4.6.6 1 .3l2.8-2.2 4.8 3.5c.4.3 1 .1 1.1-.4L22.4 5.5c.2-.7-.5-1.3-1.2-1.1z" />
                    <path d="m9.2 13.6 8-6.4" />
                  </svg>
                </div>
                <span className="font-mono text-lg text-text-primary group-hover:text-accent transition-colors">
                  @your_telegram_username
                </span>
              </a>

              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:underline inline-flex items-center gap-1"
              >
                Download Telegram
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <p className="text-text-muted text-sm">
                Typical response time: within 4 hours.
              </p>
            </div>

            {/* Scarcity */}
            <div className="glass-card p-6 border-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-success" style={{ animation: "glow-pulse 2s ease-in-out infinite" }} />
                <span className="text-sm font-semibold text-success">Open for enrollment</span>
              </div>
              <p className="text-text-secondary">
                Currently <span className="text-text-primary font-semibold">6 slots</span>{" "}
                available for integration. Next batch in 2-3 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
