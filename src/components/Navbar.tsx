"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "./LangContext";
import { handleHashNav } from "@/utils/navigation";

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const NAV_LINKS = [
    { href: "/#how-it-works", label: t.nav.howItWorks },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/#advantages", label: t.nav.advantages },
    { href: "/#contacts", label: t.nav.contacts },
    { href: "/cases", label: t.nav.cases, isPage: true },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      const sections = ["how-it-works", "pricing", "advantages", "contacts"];
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
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 rounded-lg opacity-30 group-hover:opacity-50 transition-opacity"
              style={{
                background: "radial-gradient(circle at 30% 30%, var(--accent-glow), var(--accent) 50%, transparent 70%)",
                filter: "blur(4px)",
              }}
            />
            <div className="relative w-7 h-7 rounded-lg flex items-center justify-center border border-white/10"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))" }}>
              <span className="text-[11px] font-heading text-white font-semibold">RB</span>
            </div>
          </div>
          <span className="text-sm font-semibold text-text-primary opacity-80 group-hover:opacity-100 transition-opacity">
            Review Boosters
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("/#", "").replace("/", "");
            const isActive = !link.isPage && activeSection === sectionId;
            const isHash = link.href.startsWith("/#");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={isHash ? (e) => handleHashNav(e, link.href) : undefined}
                className={`text-sm transition-colors relative ${
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}

          <Link href="/#pricing" onClick={(e) => handleHashNav(e, "/#pricing")} className="glow-btn text-sm !py-2 !px-5">
            {t.nav.cta}
          </Link>
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
          {NAV_LINKS.map((link) => {
            const isHash = link.href.startsWith("/#");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => { setMobileOpen(false); if (isHash) handleHashNav(e, link.href); }}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#pricing"
            onClick={(e) => { setMobileOpen(false); handleHashNav(e, "/#pricing"); }}
            className="glow-btn text-center text-sm !py-2"
          >
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
