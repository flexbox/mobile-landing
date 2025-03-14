import { useTranslation } from "react-i18next";
import type { Language } from "./i18n";

export function useLanguage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  return {
    t,
    i18n,
    currentLanguage,
    changeLanguage
  };
} 