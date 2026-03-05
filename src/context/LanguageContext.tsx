"use client";

import { createContext, useCallback, useState, useEffect, useMemo, ReactNode } from "react";

import i18n, { Language } from "@/lib/i18n";

const LANGUAGE_STORAGE_KEY = "study-hive-language";

type Direction = "ltr" | "rtl";

type LanguageContextType = {
  language: Language;
  direction: Direction;
  changeLanguage: (lang: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function parseStoredLanguage(value: string | null | undefined): Language | null {
  if (value === "ar") {
    return "ar";
  }

  if (value === "en") {
    return "en";
  }

  return null;
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = parseStoredLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
  if (stored) {
    return stored;
  }

  const prefersArabic = typeof navigator !== "undefined" && navigator.language.startsWith("ar");
  return prefersArabic ? "ar" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    void i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
    void i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, []);

  const direction: Direction = language === "ar" ? "rtl" : "ltr";
  const value = useMemo(() => ({ language, direction, changeLanguage }), [language, direction, changeLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
