import { SpotlightCard } from "./SpotlightCard";

const PLANS = [
  {
    name: "Старт",
    price: 12,
    unit: "за отзыв",
    desc: "от 10 отзывов",
    features: [
      "1 страна",
      "Уникальные IP и устройства",
      "Согласование текстов",
      "Без контрактов и обязательств",
    ],
    popular: false,
  },
  {
    name: "Баланс",
    price: 10,
    unit: "за отзыв",
    desc: "от 100 отзывов/мес",
    features: [
      "До 3 стран",
      "Приоритетное согласование",
      "Еженедельные отчёты",
      "Рекомендации по развитию",
    ],
    popular: true,
  },
  {
    name: "Максимум",
    price: 9,
    unit: "за отзыв",
    desc: "от 200 отзывов/мес",
    features: [
      "Любые страны",
      "Личный менеджер",
      "Приоритетная поддержка 24/7",
      "Расширенная отчётность",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Прозрачно. Предсказуемо.{" "}
            <span className="gradient-text whitespace-nowrap">Без риска.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => {
            if (plan.popular) {
              return (
                <div
                  key={plan.name}
                  className={`gradient-border bg-bg-surface p-8 rounded-2xl flex flex-col gap-6 relative animate-on-scroll stagger-${i + 1}`}
                >
                  {/* Popular badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-semibold whitespace-nowrap">
                    Популярный
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">{plan.name}</h3>
                    <p className="text-text-muted text-sm">{plan.desc}</p>
                  </div>

                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-heading text-text-primary">${plan.price}</span>
                    <span className="text-text-muted mb-2">/{plan.unit}</span>
                  </div>

                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-text-secondary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="glow-btn text-center">
                    Выбрать {plan.name}
                  </a>
                </div>
              );
            }

            return (
              <SpotlightCard
                key={plan.name}
                className={`p-8 animate-on-scroll stagger-${i + 1}`}
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">{plan.name}</h3>
                    <p className="text-text-muted text-sm">{plan.desc}</p>
                  </div>

                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-heading text-text-primary">${plan.price}</span>
                    <span className="text-text-muted mb-2">/{plan.unit}</span>
                  </div>

                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-text-secondary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="ghost-btn text-center">
                    Выбрать {plan.name}
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
