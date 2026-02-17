"use client";

import { SpotlightCard } from "./SpotlightCard";
import { useLang } from "./LangContext";

export function Value() {
  const { t } = useLang();

  const cards = [
    { icon: "\u{1F441}", stat: "79%", title: t.value.card1Title, desc: t.value.card1Desc },
    { icon: "\u{1F6E1}", stat: "100%", title: t.value.card2Title, desc: t.value.card2Desc },
    { icon: "\u{1F30E}", stat: "GEO", title: t.value.card3Title, desc: t.value.card3Desc },
  ];

  return (
    <section id="value" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t.value.heading1}{" "}
            <span className="gradient-text">{t.value.headingHighlight}</span>
          </h2>
          <p className="text-text-secondary text-lg">
            {t.value.desc}{" "}
            <span className="text-accent font-semibold">{t.value.descHighlight}</span>{" "}
            {t.value.descEnd}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <SpotlightCard
              key={i}
              className={`p-8 animate-on-scroll stagger-${i + 1}`}
            >
              <div className="flex flex-col gap-4">
                <span className="text-3xl">{card.icon}</span>
                <span className="text-4xl font-heading gradient-text">{card.stat}</span>
                <h3 className="text-xl font-semibold text-text-primary">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">{card.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
