import { useTranslation } from "react-i18next";
import type { TOptions } from "i18next";

import type { Language } from "./i18n";
import i18n from "./i18n";

export function translate(key: string, options?: TOptions): string {
  return i18n.t(key, options);
}

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
    changeLanguage,
  };
}
