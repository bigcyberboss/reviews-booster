"use client";

import { useLang } from "./LangContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-star">&#9733;</span>
          <span className="text-sm text-text-secondary">
            Reviews Booster &copy; {new Date().getFullYear()}
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
