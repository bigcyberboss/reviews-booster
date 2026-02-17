"use client";

import { SpotlightCard } from "./SpotlightCard";
import { useLang } from "./LangContext";

export function Pricing() {
  const { t } = useLang();

  const plans = [
    {
      name: t.pricing.plan1Name,
      price: 12,
      desc: t.pricing.plan1Desc,
      features: [t.pricing.plan1f1, t.pricing.plan1f2, t.pricing.plan1f3, t.pricing.plan1f4],
      popular: false,
    },
    {
      name: t.pricing.plan2Name,
      price: 10,
      desc: t.pricing.plan2Desc,
      features: [t.pricing.plan2f1, t.pricing.plan2f2, t.pricing.plan2f3, t.pricing.plan2f4],
      popular: true,
    },
    {
      name: t.pricing.plan3Name,
      price: 9,
      desc: t.pricing.plan3Desc,
      features: [t.pricing.plan3f1, t.pricing.plan3f2, t.pricing.plan3f3, t.pricing.plan3f4],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t.pricing.heading1}{" "}
            <span className="gradient-text whitespace-nowrap">{t.pricing.headingHighlight}</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            if (plan.popular) {
              return (
                <div
                  key={i}
                  className={`gradient-border bg-bg-surface p-8 rounded-2xl flex flex-col gap-6 relative animate-on-scroll stagger-${i + 1}`}
                >
                  {/* Popular badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-semibold whitespace-nowrap">
                    {t.pricing.popular}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">{plan.name}</h3>
                    <p className="text-text-muted text-sm">{plan.desc}</p>
                  </div>

                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-heading text-text-primary">${plan.price}</span>
                    <span className="text-text-muted mb-2">/{t.pricing.perReview}</span>
                  </div>

                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-3 text-text-secondary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="glow-btn text-center">
                    {t.pricing.choose} {plan.name}
                  </a>
                </div>
              );
            }

            return (
              <SpotlightCard
                key={i}
                className={`p-8 animate-on-scroll stagger-${i + 1}`}
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">{plan.name}</h3>
                    <p className="text-text-muted text-sm">{plan.desc}</p>
                  </div>

                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-heading text-text-primary">${plan.price}</span>
                    <span className="text-text-muted mb-2">/{t.pricing.perReview}</span>
                  </div>

                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-3 text-text-secondary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="ghost-btn text-center">
                    {t.pricing.choose} {plan.name}
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
