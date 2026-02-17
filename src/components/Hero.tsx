"use client";

import { useRef, useEffect, useState, type MouseEvent } from "react";

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setValue(parseFloat((target * ease).toFixed(1)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value}</span>;
}

export function Hero() {
  const stampRef = useRef<HTMLDivElement>(null);

  const handleStampMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = stampRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 15;
    const y = -(e.clientY - rect.top - rect.height / 2) / 15;
    el.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleStampLeave = () => {
    if (stampRef.current) {
      stampRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Aurora background */}
      <div className="aurora">
        <div className="aurora-blob" />
        <div className="aurora-blob" />
        <div className="aurora-blob" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-border bg-bg-surface/50 backdrop-blur-sm">
            <span className="text-star text-sm">&#9733; 5.0</span>
            <span className="text-text-secondary text-sm">Verified Reviews</span>
          </div>

          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Ваши отзывы работают{" "}
            <span className="shimmer-text">на вас</span>{" "}
            или против вас?
          </h1>

          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            88% людей доверяют онлайн-отзывам так же, как личным рекомендациям.
            Мы помогаем бизнесу управлять репутацией через Reviews.io: легально,
            чисто и с гарантией результата.
          </p>

          {/* Benefits list */}
          <ul className="flex flex-col gap-3 text-text-secondary">
            {[
              "Проходят модерацию без риска",
              "Влияют на решение о покупке",
              "Работают на вас 24/7",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a href="#contact" className="glow-btn">
              Хочу в топ
            </a>
            <a href="#value" className="ghost-btn">
              Узнать больше
            </a>
          </div>
        </div>

        {/* Right — 3D stamp */}
        <div className="flex items-center justify-center lg:justify-end">
          <div
            className="stamp-3d"
            onMouseMove={handleStampMove}
            onMouseLeave={handleStampLeave}
          >
            <div ref={stampRef} className="stamp-3d-inner relative">
              {/* Glow ring behind stamp */}
              <div
                className="absolute inset-[-12px] rounded-full"
                style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
              />

              {/* Stamp circle */}
              <div className="stamp-circle">
                <span className="text-6xl sm:text-7xl font-heading gradient-text">
                  <AnimatedCounter target={5.0} duration={2500} />
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--star)">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-success font-semibold uppercase tracking-wider">
                  Verified
                </span>
              </div>

              {/* Floating mini tags */}
              <div
                className="floating-tag absolute -top-2 -right-10"
                style={{ animation: "float-gentle 4s ease-in-out infinite" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--star)">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="font-semibold">Reviews.io</span>
                <span className="text-success text-xs">4.9</span>
              </div>
              <div
                className="floating-tag absolute -bottom-2 -left-10"
                style={{ animation: "float-gentle 5s ease-in-out infinite 1s" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
                <span className="font-semibold">Google Ads</span>
                <span className="text-accent text-xs">GEO</span>
              </div>
              <div
                className="floating-tag absolute top-1/2 -left-16 -translate-y-1/2"
                style={{ animation: "float-gentle 6s ease-in-out infinite 0.5s" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--success)">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="font-semibold">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
