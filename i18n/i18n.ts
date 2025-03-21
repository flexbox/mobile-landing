import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import i18n from "i18next";

import en from "./en";
import fr from "./fr";

export type Language = "en" | "fr";

const getPreferredLanguage = (): Language => {
  try {
    const locales = Localization.getLocales();
    if (!locales || locales.length === 0) return "en";

    const locale = locales[0];
    if (!locale || !locale.languageCode) return "en";

    const languageCode = locale.languageCode.toLowerCase();
    if (languageCode.startsWith("fr")) return "fr";
    return "en";
  } catch (error) {
    console.warn("Error getting device locale:", error);
    return "en";
  }
};

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getPreferredLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
