"use client";

import { useState } from "react";
import Link from "next/link";
import { SpotlightCard } from "./SpotlightCard";

const CHECK = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PLUS = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MINI_CHECK = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function Tooltip({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex ml-1">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(!open)}
        className="w-4 h-4 rounded-full border border-text-muted/40 flex items-center justify-center hover:border-accent hover:text-accent transition-colors cursor-help shrink-0"
        aria-label="More info"
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </button>
      {open && (
        <span className="absolute z-[100] bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 px-4 py-3 rounded-xl bg-bg-surface border border-border shadow-2xl shadow-black/50">
          <ul className="flex flex-col gap-1.5">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[11px] text-text-secondary">
                {MINI_CHECK}
                {item}
              </li>
            ))}
          </ul>
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-bg-surface border-r border-b border-border rotate-45 -mt-1" />
        </span>
      )}
    </span>
  );
}

const PLANS = [
  {
    name: "Start",
    price: 12,
    desc: "from 10 reviews",
    popular: false,
    features: [
      { icon: "check", text: "Reviews Geo: 1 country", tooltip: ["Tooltip text coming soon"] },
      { icon: "check", text: "Launch within 48 hours" },
      { icon: "check", text: "100% White Label" },
      { icon: "check", text: "Unique IPs and devices" },
      { icon: "check", text: "Text approval" },
    ],
  },
  {
    name: "Balance",
    price: 10,
    desc: "from 100 reviews / month",
    popular: true,
    features: [
      { icon: "plus", text: "All Start features included", tooltip: ["Launch within 48 hours", "100% White Label", "Unique IPs and devices", "Text approval"] },
      { icon: "check", text: "Reviews Geo: up to 3 countries", tooltip: ["Tooltip text coming soon"] },
      { icon: "check", text: "Monthly strategy report" },
      { icon: "check", text: "Priority approval" },
      { icon: "check", text: "Moderation guarantee" },
    ],
  },
  {
    name: "Maximum",
    price: 9,
    desc: "from 200 reviews / month",
    popular: false,
    features: [
      { icon: "plus", text: "All Start + Balance features included", tooltip: ["Launch within 48 hours", "100% White Label", "Unique IPs and devices", "Text approval", "Monthly strategy report", "Priority approval", "Moderation guarantee"] },
      { icon: "check", text: "Reviews Geo: any country", tooltip: ["Tooltip text coming soon"] },
      { icon: "check", text: "Dedicated account manager" },
      { icon: "check", text: "Priority 24/7 support" },
      { icon: "check", text: "Quarterly strategy review" },
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => {
            const inner = (
              <div className="flex flex-col gap-6">
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-semibold whitespace-nowrap">
                    Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-1">{plan.name}</h3>
                  <p className="text-text-muted text-sm">{plan.desc}</p>
                </div>

                <div className="flex items-end gap-1">
                  <span className="text-5xl font-heading text-text-primary">${plan.price}</span>
                  <span className="text-text-muted mb-2">/ per review</span>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-text-secondary">
                      {f.icon === "plus" ? PLUS : CHECK}
                      <span className="flex items-center">
                        {f.text}
                        {f.tooltip && <Tooltip items={f.tooltip} />}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/#contacts" className={plan.popular ? "glow-btn text-center" : "ghost-btn text-center"}>
                  Choose {plan.name}
                </Link>
              </div>
            );

            if (plan.popular) {
              return (
                <div
                  key={i}
                  className={`gradient-border bg-bg-surface p-8 rounded-2xl relative animate-on-scroll stagger-${i + 1}`}
                >
                  {inner}
                </div>
              );
            }

            return (
              <SpotlightCard key={i} className={`p-8 animate-on-scroll stagger-${i + 1}`}>
                {inner}
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
