"use client";

import { SpotlightCard } from "./SpotlightCard";

const ITEMS = [
  {
    title: "Moderation Intelligence",
    desc: "We know Trustpilot, Reviews.io, and Google Business inside out. Every review passes all filters — device uniqueness, IP, behavioral metrics — while sounding 100% natural. No farms. No footprints.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Data Purity",
    desc: "No shared proxies, no bots. Every review comes from a unique session, unique device, and unique behavioral pattern — written by real reviewers. Clean data that platforms trust.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Google Seller Ratings",
    desc: "Reviews from the right geo unlock star ratings in your Google Ads. Higher CTR, lower CPC. You stand out where competitors don't.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--star)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "White Label Confidentiality",
    desc: "We never publish case studies. Our cooperation stays invisible to competitors. 100% anonymity guaranteed.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" fill="var(--accent-glow)" />
      </svg>
    ),
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            We Don&apos;t Fake It.{" "}
            <span className="gradient-text">We Build It.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => (
            <SpotlightCard
              key={i}
              className={`p-8 animate-on-scroll stagger-${i + 1}`}
            >
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-border bg-bg-surface/80 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
