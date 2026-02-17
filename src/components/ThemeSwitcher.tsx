"use client";

import { useState, useEffect } from "react";

const THEMES = [
  { id: "linear", label: "Linear Dark", swatch: "theme-swatch-linear" },
  { id: "emerald", label: "Emerald Premium", swatch: "theme-swatch-emerald" },
  { id: "ocean", label: "Ocean Blue", swatch: "theme-swatch-ocean" },
  { id: "sunset", label: "Sunset Warm", swatch: "theme-swatch-sunset" },
  { id: "clean", label: "Clean Light", swatch: "theme-swatch-clean" },
  { id: "rose", label: "Rose Elegant", swatch: "theme-swatch-rose" },
] as const;

export function ThemeSwitcher() {
  const [active, setActive] = useState("linear");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = document.documentElement.getAttribute("data-theme") || "linear";
    setActive(saved);
  }, []);

  const switchTheme = (id: string) => {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
  };

  if (!mounted) return null;

  return (
    <div className="theme-panel">
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => switchTheme(t.id)}
          className={`${t.swatch} ${active === t.id ? "active" : ""}`}
          title={t.label}
          aria-label={`Тема: ${t.label}`}
        />
      ))}
    </div>
  );
}
