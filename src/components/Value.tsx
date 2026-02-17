import { SpotlightCard } from "./SpotlightCard";

const CARDS = [
  {
    icon: "\u{1F441}",
    title: "Первое впечатление",
    stat: "79%",
    desc: "изучают отзывы ДО контакта с компанией. Меньше 10 отзывов или рейтинг ниже 4.5 = проигрыш конкуренту.",
  },
  {
    icon: "\u{1F6E1}",
    title: "Качество важнее количества",
    stat: "100%",
    desc: "чистота и безопасность. Reviews.io видит уникальность устройств, IP, поведенческие метрики. Мы знаем как.",
  },
  {
    icon: "\u{1F30E}",
    title: "Гео = конкурентное преимущество",
    stat: "GEO",
    desc: "Отзывы с геолокацией интегрируются в Google Рекламу. Отзыв из нужной локации = доверие.",
  },
];

export function Value() {
  return (
    <section id="value" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Ваш рейтинг это{" "}
            <span className="gradient-text">второй отдел продаж</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Исследования Spiegel Research Center: товары и услуги с отзывами
            покупают в <span className="text-accent font-semibold">3.7 раза</span> чаще.
            Но есть нюанс.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <SpotlightCard
              key={card.title}
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
