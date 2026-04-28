"use client";

import { useRef, useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";

const PLATFORMS = [
  {
    id: "trustpilot",
    name: "Trustpilot",
    color: "#00B67A",
    delivered: "5,100+ reviews delivered",
    Logo: () => (
      <svg viewBox="0 0 200 48" className="h-9 sm:h-10" aria-hidden="true">
        <polygon points="24 4 30.18 16.52 44 18.54 34 28.28 36.36 42.04 24 35.54 11.64 42.04 14 28.28 4 18.54 17.82 16.52" fill="#00B67A" />
        <text x="56" y="32" fontSize="22" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" fill="#fff" letterSpacing="-0.5">
          Trustpilot
        </text>
      </svg>
    ),
  },
  {
    id: "reviewsio",
    name: "Reviews.io",
    color: "#0E5CDD",
    delivered: "4,200+ reviews delivered",
    Logo: () => (
      <svg viewBox="0 0 200 48" className="h-9 sm:h-10" aria-hidden="true">
        <circle cx="22" cy="24" r="18" fill="#0E5CDD" />
        <text x="22" y="30" textAnchor="middle" fontSize="18" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">
          RR
        </text>
        <text x="50" y="32" fontSize="22" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" fill="#fff" letterSpacing="-0.5">
          Reviews.io
        </text>
      </svg>
    ),
  },
  {
    id: "google",
    name: "Google Business",
    color: "#4285F4",
    delivered: "4,800+ reviews delivered",
    Logo: () => (
      <svg viewBox="0 0 220 48" className="h-9 sm:h-10" aria-hidden="true">
        <g transform="translate(4 6)">
          <path fill="#4285F4" d="M35.6 18.4c0-1.3-.1-2.5-.3-3.7H18.2v7h9.8c-.4 2.3-1.7 4.2-3.6 5.5v4.6h5.8c3.4-3.1 5.4-7.7 5.4-13.4z" />
          <path fill="#34A853" d="M18.2 36c4.9 0 8.9-1.6 11.9-4.4l-5.8-4.6c-1.6 1.1-3.7 1.7-6.1 1.7-4.7 0-8.7-3.2-10.1-7.4H1.9v4.7C4.9 31.7 11 36 18.2 36z" />
          <path fill="#FBBC05" d="M8.1 21.4c-.4-1.1-.6-2.2-.6-3.4s.2-2.3.6-3.4V9.9H1.9C.7 12.4 0 15.1 0 18s.7 5.6 1.9 8.1l6.2-4.7z" />
          <path fill="#EA4335" d="M18.2 7.2c2.7 0 5.1.9 7 2.7l5.2-5.2C27.1 1.7 23.1 0 18.2 0 11 0 4.9 4.3 1.9 10.6l6.2 4.7c1.4-4.2 5.4-7.4 10.1-7.4z" />
        </g>
        <text x="48" y="32" fontSize="22" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" fill="#fff" letterSpacing="-0.5">
          Google Business
        </text>
      </svg>
    ),
  },
];

function PlatformCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % PLATFORMS.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 w-full px-6 text-center">
      <span className="text-sm text-text-muted uppercase tracking-[0.2em]">
        Reviewers for
      </span>

      <div className="relative h-12 w-full flex items-center justify-center">
        {PLATFORMS.map((p, i) => (
          <div
            key={p.id}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            <p.Logo />
          </div>
        ))}
      </div>

      <div className="relative h-6 w-full">
        {PLATFORMS.map((p, i) => (
          <span
            key={p.id}
            className="absolute inset-0 flex items-center justify-center text-sm font-semibold transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === active ? 1 : 0, color: p.color }}
          >
            {p.delivered}
          </span>
        ))}
      </div>

      <div className="flex gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="var(--star)">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const stampRef = useRef<HTMLDivElement>(null);

  const handleStampMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = stampRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = -(e.clientY - rect.top - rect.height / 2) / 25;
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
            <span style={{ color: "#00B67A" }} className="font-semibold">Trustpilot</span>,{" "}
            <span style={{ color: "#0E5CDD" }} className="font-semibold">Reviews.io</span> and{" "}
            <span style={{ color: "#4285F4" }} className="font-semibold">Google Business</span>.
            {" "}We provide a steady flow of authentic reviews. Higher ratings drive more sales. White label. Moderation guarantee.
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
            <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); }} className="glow-btn">Get Started</a>
            <Link href="/cases" className="ghost-btn">Our Cases</Link>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="stamp-3d" onMouseMove={handleStampMove} onMouseLeave={handleStampLeave}>
            <div ref={stampRef} className="stamp-3d-inner relative">
              <div className="absolute inset-[-12px] rounded-full" style={{ animation: "glow-pulse 3s ease-in-out infinite" }} />
              <div className="stamp-circle gradient-border-round">
                <PlatformCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
