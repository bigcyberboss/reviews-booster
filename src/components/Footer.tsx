"use client";

import { useLang } from "./LangContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 rounded-md opacity-25"
              style={{
                background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
                filter: "blur(3px)",
              }}
            />
            <div className="relative w-5 h-5 rounded-md flex items-center justify-center border border-white/10"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.12))" }}>
              <span className="text-[8px] font-heading text-white font-semibold">RB</span>
            </div>
          </div>
          <span className="text-sm text-text-secondary">
            Review Boosters &copy; {new Date().getFullYear()}
          </span>
        </div>
        <a
          href="#"
          className="text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          &uarr; {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
