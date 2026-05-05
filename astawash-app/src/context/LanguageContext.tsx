"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "am";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, am: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Persist language preference and update document attributes
  useEffect(() => {
    const saved = localStorage.getItem("astawash_lang") as Language;
    if (saved) setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-lang", language);
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("astawash_lang", lang);
  };

  const t = (en: string, am: string) => {
    return language === "en" ? en : am;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
