"use client";

import { useState } from "react";

const CHANNELS = [
  {
    icon: "&#9992;",
    label: "Telegram",
    value: "@username",
    href: "https://t.me/username",
  },
  {
    icon: "&#9993;",
    label: "Email",
    value: "reputation@yourdomain.com",
    href: "mailto:reputation@yourdomain.com",
  },
  {
    icon: "&#128172;",
    label: "Discord",
    value: "username#0000",
    href: "#",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Разберём ваш профиль{" "}
            <span className="gradient-text">бесплатно</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Пришлите ссылку на Reviews.io, и мы посмотрим, что работает, где точки роста,
            сколько отзывов нужно для топа. Если не пользуетесь, поможем настроить с нуля.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Form */}
          <div className="glass-card p-8 animate-on-scroll">
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-5xl mb-4 block">&#10003;</span>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-text-secondary">
                  Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="text-sm text-text-secondary mb-1.5 block">
                    Имя / Компания
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-hover/50 border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="Ваше имя или название компании"
                  />
                </div>

                <div>
                  <label htmlFor="link" className="text-sm text-text-secondary mb-1.5 block">
                    Ссылка на Reviews.io
                  </label>
                  <input
                    id="link"
                    type="url"
                    className="w-full px-4 py-3 rounded-xl bg-bg-hover/50 border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="https://www.reviews.io/company-reviews/..."
                  />
                </div>

                <div>
                  <label htmlFor="messenger" className="text-sm text-text-secondary mb-1.5 block">
                    Удобный мессенджер
                  </label>
                  <input
                    id="messenger"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-hover/50 border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    placeholder="@telegram или другой"
                  />
                </div>

                <button type="submit" className="glow-btn mt-2">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>

          {/* Right side — channels + scarcity */}
          <div className="flex flex-col gap-6 animate-on-scroll justify-between">
            {/* Contact channels */}
            {CHANNELS.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <span className="text-2xl" dangerouslySetInnerHTML={{ __html: ch.icon }} />
                <div>
                  <div className="text-sm text-text-muted">{ch.label}</div>
                  <div className="text-text-primary font-medium group-hover:text-accent transition-colors">
                    {ch.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Scarcity trigger */}
            <div className="glass-card p-6 border-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-success" style={{ animation: "glow-pulse 2s ease-in-out infinite" }} />
                <span className="text-sm font-semibold text-success">Открыт набор</span>
              </div>
              <p className="text-text-secondary">
                Сейчас открыто <span className="text-text-primary font-semibold">6 слотов</span> на интеграцию.
                Следующий набор через 2-3 месяца.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
