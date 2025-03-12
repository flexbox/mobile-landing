import { ImageSourcePropType } from 'react-native';

// Définition du type pour les noms d'icônes FontAwesome
type FontAwesomeIconName =
  | 'github'
  | 'mobile'
  | 'play-circle'
  | 'sync'
  | 'paint-brush'
  | 'arrow-alt-circle-down'
  | 'twitter'
  | 'facebook'
  | 'instagram'
  | 'envelope'
  | 'apple'
  | 'android'
  | 'moon'
  | 'bell'
  | 'shield-alt';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

interface AppAssets {
  icon: ImageSourcePropType;
  logo: ImageSourcePropType;
  screenshots: {
    image: ImageSourcePropType;
    title: string;
  }[];
  videoPreview?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: FontAwesomeIconName;
}

interface SocialLink {
  platform: 'twitter' | 'facebook' | 'instagram' | 'github' | 'email';
  url: string;
  icon: FontAwesomeIconName;
  label: string;
}

export const appConfig = {
  // Theme
  theme: {
    colors: {
      primary: '#1DB954',      // Vibrant green
      secondary: '#191414',    // Dark grey
      accent: '#B3B3B3',       // Light grey
      text: '#000000',         // Black text
      background: '#FFFFFF'     // White background
    } as ThemeColors,
    fonts: {
      primary: 'SpaceMono',
    }
  },

  // App Info
  app: {
    name: "Melodify",
    tagline: "Votre musique. Votre moment. Votre monde.",
    description: "Découvrez des millions de titres, créez vos playlists personnalisées et profitez d'une expérience musicale unique. Avec Melodify, votre musique vous suit partout, en ligne comme hors ligne.",
    price: "Gratuit - Abonnement Premium disponible",
    category: "Musique & Audio",
    version: "2.1.0",
  },

  // Store Info
  store: {
    ios: {
      id: "1523467890",
      url: "https://apps.apple.com/app/melodify/id1523467890",
    },
    android: {
      id: "com.melodify.app",
      url: "https://play.google.com/store/apps/details?id=com.melodify.app",
    }
  },

  // Assets
  assets: {
    icon: require("@/assets/images/icon.png"),
    logo: require("@/assets/images/icon.png"),
    screenshots: [
      {
        image: require("@/assets/images/screenshot.png"),
        title: "Bibliothèque Personnalisée"
      },
      {
        image: require("@/assets/images/screenshot.png"),
        title: "Découvertes Hebdomadaires"
      },
      {
        image: require("@/assets/images/screenshot.png"),
        title: "Mode Hors-ligne"
      },
      {
        image: require("@/assets/images/screenshot.png"),
        title: "Lyrics en temps réel"
      }
    ]
  } as AppAssets,

  // Features
  features: [
    {
      title: "Bibliothèque Illimitée",
      description: "Des millions de titres disponibles en streaming haute qualité",
      icon: "paint-brush"
    },
    {
      title: "Mode Hors-ligne",
      description: "Téléchargez vos favoris pour les écouter partout",
      icon: "mobile"
    },
    {
      title: "Smart Sync",
      description: "Synchronisation transparente entre tous vos appareils",
      icon: "refresh"
    },
    {
      title: "Mode Nuit",
      description: "Interface adaptée pour vos sessions nocturnes",
      icon: "moon-o"
    },
    {
      title: "Notifications",
      description: "Soyez alerté des nouveautés de vos artistes préférés",
      icon: "bell"
    },
    {
      title: "Écoute Privée",
      description: "Mode privé et historique d'écoute sécurisé",
      icon: "shield"
    }
  ] as Feature[],

  // Social Links
  socialLinks: [
    {
      platform: 'twitter',
      url: 'https://twitter.com/melodify',
      icon: 'twitter',
      label: 'Suivez notre actualité musicale'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/melodify.app',
      icon: 'instagram',
      label: 'Découvrez nos stories exclusives'
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com/melodifyapp',
      icon: 'facebook',
      label: 'Rejoignez notre communauté'
    }
  ] as SocialLink[],

  // Press Kit
  pressKit: {
    enabled: true,
    url: "https://melodify.com/press"
  }
} as const; 