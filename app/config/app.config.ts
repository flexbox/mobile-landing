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
      primary: '#007AFF',      // iOS blue
      secondary: '#000000',    // Black
      accent: '#FF3B30',       // iOS red
      text: '#000000',
      background: '#FFFFFF'
    } as ThemeColors,
    fonts: {
      primary: 'SpaceMono',
    }
  },

  // App Info
  app: {
    name: "AppName",
    tagline: "A beautiful iOS app for your needs",
    description: "Write a short description of your app. Make it compelling and interesting. Talk about the main features and benefits.",
    price: "Free",
    category: "Productivity",
    version: "1.0.0",
  },

  // Store Info
  store: {
    ios: {
      id: "1234793120",
      url: "https://apps.apple.com/app/id{ios_app_id}",
    },
    android: {
      id: "com.example.app",
      url: "https://play.google.com/store/apps/details?id={play_store_id}",
    }
  },

  // Assets
  assets: {
    icon: require("@/assets/images/icon.png"),
    logo: require("@/assets/images/icon.png"),
    screenshots: [
      {
        image: require("@/assets/images/screenshot.png"),
        title: "Beautiful Interface"
      },
      {
        image: require("@/assets/images/screenshot.png"),
        title: "Dark Mode"
      },
      {
        image: require("@/assets/images/screenshot.png"),
        title: "Quick Actions"
      }
    ]
  } as AppAssets,

  // Features
  features: [
    {
      title: "Design Élégant",
      description: "Interface soignée et moderne avec des animations fluides",
      icon: "paint-brush"
    },
    {
      title: "Performance",
      description: "Réactivité exceptionnelle sur tous les appareils",
      icon: "mobile"
    },
    {
      title: "Synchronisation",
      description: "Sauvegarde automatique dans le cloud",
      icon: "refresh"
    },
    {
      title: "Mode Sombre",
      description: "Interface adaptative pour le jour et la nuit",
      icon: "moon-o"
    },
    {
      title: "Notifications",
      description: "Restez informé en temps réel",
      icon: "bell"
    },
    {
      title: "Sécurité",
      description: "Protection de vos données avec cryptage",
      icon: "shield"
    }
  ] as Feature[],

  // Social Links (only shown if URL is provided)
  socialLinks: [
    {
      platform: 'twitter',
      url: 'https://twitter.com/yourapp',
      icon: 'twitter',
      label: 'Suivez-nous sur Twitter'
    },
    {
      platform: 'github',
      url: 'https://github.com/yourapp',
      icon: 'github',
      label: 'Code source sur GitHub'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/yourapp',
      icon: 'instagram',
      label: 'Suivez-nous sur Instagram'
    }
  ] as SocialLink[],

  // Press Kit
  pressKit: {
    enabled: true,
    url: "https://your-link-to-presskit.zip"
  }
} as const; 