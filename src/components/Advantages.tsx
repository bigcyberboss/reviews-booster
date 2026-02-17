import { SpotlightCard } from "./SpotlightCard";

const ITEMS = [
  {
    icon: "\u{1F50D}",
    title: "Модерация изнутри",
    desc: "Знаем слепые зоны Reviews.io. Отзыв проходит модерацию, но звучит живо и естественно.",
  },
  {
    icon: "\u{1F512}",
    title: "Чистота данных",
    desc: "Никаких ферм, никаких общих прокси. Каждый отзыв это уникальная сессия, уникальное устройство.",
  },
  {
    icon: "\u{1F30F}",
    title: "Гео под ваш рынок",
    desc: "Работаем по странам и регионам. Отзыв из нужной локации = доверие аудитории.",
  },
  {
    icon: "\u{1F575}",
    title: "Полная конфиденциальность",
    desc: "Не публикуем кейсы. Сотрудничество strictly anonymous. Ваш бизнес под защитой.",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Мы не льём.{" "}
            <span className="gradient-text">Мы строим.</span>
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => (
            <SpotlightCard
              key={item.title}
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
