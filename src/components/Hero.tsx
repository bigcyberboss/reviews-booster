"use client";

import { useRef, useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { useLang } from "./LangContext";

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
  const { t } = useLang();
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
      <div className="grid-bg" />
      <div className="aurora">
        <div className="aurora-blob" />
        <div className="aurora-blob" />
        <div className="aurora-blob" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-success/30 bg-success/5 backdrop-blur-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-success text-sm font-semibold">Verified Reviews</span>
          </div>

          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-7xl leading-[1.1]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Turn <span className="shimmer-text">Reviews</span> Into Revenue
          </h1>

          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Systematic reputation management on{" "}
            <span className="text-accent font-semibold">Reviews.io</span>.
            {" "}High ratings drive sales. White label. Moderation guarantee.
          </p>

          <ul className="flex flex-col gap-3 text-text-secondary">
            {[
              "3.7x Higher Conversion",
              "9 out of 10 read reviews before purchase",
              "Customers choose 4.8+ rating over competitors",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/#pricing" className="glow-btn">Get Started</Link>
            <Link href="/cases" className="ghost-btn">Our Cases</Link>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="stamp-3d" onMouseMove={handleStampMove} onMouseLeave={handleStampLeave}>
            <div ref={stampRef} className="stamp-3d-inner relative">
              <div className="absolute inset-[-12px] rounded-full" style={{ animation: "glow-pulse 3s ease-in-out infinite" }} />
              <div className="stamp-circle gradient-border-round">
                <span className="text-5xl sm:text-6xl font-heading gradient-text">
                  <AnimatedCounter target={4.8} duration={2500} />
                  <span className="text-3xl sm:text-4xl">+</span>
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--star)">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-success font-semibold uppercase tracking-wider">{t.hero.verified}</span>
              </div>
              <div className="floating-tag absolute -top-2 -right-10" style={{ animation: "float-gentle 4s ease-in-out infinite" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <span className="font-semibold">3.7x More Sales</span>
              </div>
              <div className="floating-tag absolute -top-2 -left-10" style={{ animation: "float-gentle 5s ease-in-out infinite 0.5s" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                <span className="font-semibold">White Label</span>
              </div>
              <div className="floating-tag absolute -bottom-2 -right-8" style={{ animation: "float-gentle 6s ease-in-out infinite 1s" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <span className="font-semibold">Moderation Pass</span>
              </div>
              <div className="floating-tag absolute -bottom-2 -left-12" style={{ animation: "float-gentle 5.5s ease-in-out infinite 1.5s" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--star)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <span className="font-semibold">Google Star Ratings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
