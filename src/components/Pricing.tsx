"use client";

import { useState } from "react";
import { SpotlightCard } from "./SpotlightCard";
import { handleHashNav } from "@/utils/navigation";

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
        <span className="absolute z-[100] bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 px-5 py-4 rounded-xl bg-bg-surface border border-border shadow-2xl shadow-black/50">
          <ul className="flex flex-col gap-2">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
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

type Plan = {
  name: "Start" | "Balance" | "Maximum";
  price: number;
  desc: string;
  popular: boolean;
  features: { icon: "check" | "plus"; text: string; tooltip?: string[] }[];
};

const SHARED_PLANS = (start: number, balance: number, maximum: number): Plan[] => [
  {
    name: "Start",
    price: start,
    desc: "from 10 reviews",
    popular: false,
    features: [
      { icon: "check", text: "Reviews Geo: 1 country", tooltip: ["Right geo = ⭐ stars in your ads", "Contact us for geo recommendations"] },
      { icon: "check", text: "Launch within 48 hours" },
      { icon: "check", text: "100% White Label" },
      { icon: "check", text: "Unique IPs and devices" },
      { icon: "check", text: "Text approval" },
    ],
  },
  {
    name: "Balance",
    price: balance,
    desc: "from 100 reviews / month",
    popular: true,
    features: [
      { icon: "plus", text: "All Start features included", tooltip: ["Launch within 48 hours", "100% White Label", "Unique IPs and devices", "Text approval"] },
      { icon: "check", text: "Reviews Geo: up to 3 countries", tooltip: ["Right geo = ⭐ stars in your ads", "Contact us for geo recommendations"] },
      { icon: "check", text: "Monthly strategy report" },
      { icon: "check", text: "Priority approval" },
      { icon: "check", text: "Moderation guarantee" },
    ],
  },
  {
    name: "Maximum",
    price: maximum,
    desc: "from 200 reviews / month",
    popular: false,
    features: [
      { icon: "plus", text: "All Start + Balance features included", tooltip: ["Launch within 48 hours", "100% White Label", "Unique IPs and devices", "Text approval", "Monthly strategy report", "Priority approval", "Moderation guarantee"] },
      { icon: "check", text: "Reviews Geo: any country", tooltip: ["Right geo = ⭐ stars in your ads", "Contact us for geo recommendations"] },
      { icon: "check", text: "Dedicated account manager" },
      { icon: "check", text: "Priority 24/7 support" },
      { icon: "check", text: "Quarterly strategy review" },
    ],
  },
];

const TrustpilotMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#00B67A" />
  </svg>
);

const ReviewsIoMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#0E5CDD" />
    <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">RR</text>
  </svg>
);

const GoogleMark = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const PRODUCTS = [
  {
    id: "trustpilot",
    name: "Trustpilot",
    color: "#00B67A",
    Logo: TrustpilotMark,
    plans: SHARED_PLANS(12, 10, 9),
  },
  {
    id: "reviewsio",
    name: "Reviews.io",
    color: "#0E5CDD",
    Logo: ReviewsIoMark,
    plans: SHARED_PLANS(10, 9, 7),
  },
  {
    id: "google",
    name: "Google Business",
    color: "#4285F4",
    Logo: GoogleMark,
    plans: SHARED_PLANS(12, 10, 9),
  },
];

function PlanCard({ plan, accent }: { plan: Plan; accent: string }) {
  const inner = (
    <div className="flex flex-col gap-6">
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-semibold whitespace-nowrap">
          Popular
        </div>
      )}

      <div>
        <h4 className="text-xl font-semibold text-text-primary mb-1">{plan.name}</h4>
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

      <a href="/#contacts" onClick={(e) => handleHashNav(e, "/#contacts")} className={plan.popular ? "glow-btn text-center" : "ghost-btn text-center"}>
        Choose {plan.name}
      </a>
    </div>
  );

  if (plan.popular) {
    return (
      <div
        className="gradient-border bg-bg-surface p-8 rounded-2xl relative animate-on-scroll"
        style={{ ["--plan-accent" as string]: accent }}
      >
        {inner}
      </div>
    );
  }

  return (
    <SpotlightCard className="p-8 animate-on-scroll">
      {inner}
    </SpotlightCard>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <product.Logo />
                <h3
                  className="font-heading text-2xl sm:text-3xl"
                  style={{ color: product.color }}
                >
                  {product.name}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6 items-start">
                {product.plans.map((plan, i) => (
                  <PlanCard key={i} plan={plan} accent={product.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
