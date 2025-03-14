import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import * as Localization from 'expo-localization';

export type Language = 'en' | 'fr';

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

// Get the user's preferred language
const getPreferredLanguage = (): Language => {
  // Get the device language (e.g., "fr-FR" or "en-US")
  const locale = Localization.getLocales()[0].languageCode;
  // Check if the language is supported, default to 'en' if not
  return (locale === 'en') ? 'en' : 'fr';
};

const resources = {
  en: {
    translation: {
      // Navigation
      features: "Features",
      screenshots: "Screenshots",
      privacy: "Privacy",
      changelog: "Changelog",
      pressKit: "Press Kit",

      // Section titles
      featuresTitle: "Features",
      screenshotsTitle: "Screenshots",

      // Call to action
      buildYourOwn: "Build your own landing page",

      // App Info
      appTagline: "The ultimate way to quickly create a delightful landing page for your expo app.",
      appDescription: "This is a powerful and flexible landing page template for your app. It's easy to customize and it looks great on any device, big or small.",
      appPrice: "one time purchase",
      appCategory: "Productivity",

      // Screenshots
      screenshotBeautiful: "Beautiful Interface",
      screenshotFeatures: "Powerful Features",
      screenshotIntegration: "Smart Integration",
      screenshotAnalytics: "Advanced Analytics",

      // Social Links
      socialTwitter: "Follow us on Twitter",
      socialInstagram: "Discover our exclusive stories",
      socialFacebook: "Join our community",
      socialGithub: "Check our open source work",

      // Dynamic content
      featureTitle: "{{title}}",
      featureDescription: "{{description}}",
      screenshotTitle: "{{title}}"
    }
  },
  fr: {
    translation: {
      // Navigation
      features: "Fonctionnalités",
      screenshots: "Captures d'écran",
      privacy: "Confidentialité",
      changelog: "Journal des modifications",
      pressKit: "Kit de presse",

      // Section titles
      featuresTitle: "Fonctionnalités",
      screenshotsTitle: "Captures d'écran",

      // Call to action
      buildYourOwn: "Créez votre propre page",

      // App Info
      appTagline: "La meilleure façon de créer rapidement une superbe page de présentation pour votre application expo.",
      appDescription: "Un modèle de page de présentation puissant et flexible pour votre application. Facile à personnaliser et superbe sur tous les appareils, grands ou petits.",
      appPrice: "achat unique",
      appCategory: "Productivité",

      // Screenshots
      screenshotBeautiful: "Interface Élégante",
      screenshotFeatures: "Fonctionnalités Puissantes",
      screenshotIntegration: "Intégration Intelligente",
      screenshotAnalytics: "Analyses Avancées",

      // Social Links
      socialTwitter: "Suivez-nous sur Twitter",
      socialInstagram: "Découvrez nos stories exclusives",
      socialFacebook: "Rejoignez notre communauté",
      socialGithub: "Découvrez notre travail open source",

      // Dynamic content
      featureTitle: "{{title}}",
      featureDescription: "{{description}}",
      screenshotTitle: "{{title}}"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getPreferredLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 