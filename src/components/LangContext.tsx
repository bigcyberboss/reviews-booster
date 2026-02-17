"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "@/i18n";

interface LangContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType>({
  lang: "ru",
  t: translations.ru,
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
