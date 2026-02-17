"use client";

import { useState, useEffect } from "react";
import { useLang } from "./LangContext";

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const NAV_LINKS = [
    { href: "#value", label: t.nav.value },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#advantages", label: t.nav.advantages },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      const sections = ["value", "pricing", "advantages", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-heading gradient-text">RB</span>
          <span className="text-sm font-semibold text-text-primary opacity-80 group-hover:opacity-100 transition-opacity">
            Reviews Booster
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors relative ${
                activeSection === link.href.slice(1)
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-accent" />
              )}
            </a>
          ))}

          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-all"
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>

          <a href="#contact" className="glow-btn text-sm !py-2 !px-5">
            {t.nav.cta}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-text-primary transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`w-5 h-0.5 bg-text-primary transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-text-primary transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] transition-none"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-bg/95 backdrop-blur-xl border-b border-border flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors text-left"
          >
            {lang === "ru" ? "Switch to English" : "Переключить на русский"}
          </button>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="glow-btn text-center text-sm !py-2"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
