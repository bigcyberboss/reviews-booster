"use client";

import { SpotlightCard } from "./SpotlightCard";
import { useLang } from "./LangContext";

export function Advantages() {
  const { t } = useLang();

  const items = [
    { icon: "\u{1F50D}", title: t.advantages.adv1Title, desc: t.advantages.adv1Desc },
    { icon: "\u{1F512}", title: t.advantages.adv2Title, desc: t.advantages.adv2Desc },
    { icon: "\u{1F30F}", title: t.advantages.adv3Title, desc: t.advantages.adv3Desc },
    { icon: "\u{1F575}", title: t.advantages.adv4Title, desc: t.advantages.adv4Desc },
  ];

  return (
    <section id="advantages" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t.advantages.heading1}{" "}
            <span className="gradient-text">{t.advantages.headingHighlight}</span>
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <SpotlightCard
              key={i}
              className={`p-8 animate-on-scroll stagger-${i + 1}`}
            >
              <div className="flex gap-5">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
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
