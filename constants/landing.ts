import { APP_NAME, APP_STORE_URL, GOOGLE_PLAYSTORE_URL } from '@/app.config';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

interface Feature {
  translations: {
    en: {
      title: string;
      description: string;
    };
    fr: {
      title: string;
      description: string;
    };
  };
  icon: keyof typeof FontAwesome.glyphMap;
}

interface SocialLink {
  platform: 'twitter' | 'facebook' | 'instagram' | 'github' | 'email';
  url: string;
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
}

interface AppInfo {
  name: string;
  version: string | undefined;
  store: {
    ios: { url: string };
    android: { url: string };
  };
  translations: {
    en: {
      tagline: string;
      description: string;
      price: string;
      category: string;
    };
    fr: {
      tagline: string;
      description: string;
      price: string;
      category: string;
    };
  };
}

// App Info
export const appInfo: AppInfo = {
  name: APP_NAME,
  version: Constants.expoConfig?.version,
  store: {
    ios: {
      url: APP_STORE_URL,
    },
    android: {
      url: GOOGLE_PLAYSTORE_URL,
    }
  },
  translations: {
    en: {
      tagline: "The ultimate way to quickly create a delightful landing page for your expo app.",
      description: "This is a powerful and flexible landing page template for your app. It's easy to customize and it looks great on any device, big or small.",
      price: "one time purchase",
      category: "Productivity"
    },
    fr: {
      tagline: "La meilleure façon de créer rapidement une superbe page de présentation pour votre application expo.",
      description: "Un modèle de page de présentation puissant et flexible pour votre application. Facile à personnaliser et superbe sur tous les appareils, grands ou petits.",
      price: "achat unique",
      category: "Productivité"
    }
  }
};

// Features
export const features: Feature[] = [
  {
    translations: {
      en: {
        title: "Smart Integration",
        description: "Seamlessly connect with your favorite tools and services"
      },
      fr: {
        title: "Intégration Intelligente",
        description: "Connectez-vous facilement à vos outils et services préférés"
      }
    },
    icon: "plug"
  },
  {
    translations: {
      en: {
        title: "Cloud Sync",
        description: "Access your data from anywhere, anytime"
      },
      fr: {
        title: "Synchronisation Cloud",
        description: "Accédez à vos données n'importe où, n'importe quand"
      }
    },
    icon: "cloud"
  },
  {
    translations: {
      en: {
        title: "Advanced Security",
        description: "Enterprise-grade encryption and privacy features"
      },
      fr: {
        title: "Sécurité Avancée",
        description: "Fonctionnalités de cryptage et de confidentialité de niveau entreprise"
      }
    },
    icon: "shield"
  },
  {
    translations: {
      en: {
        title: "Dark Mode",
        description: "Easy on the eyes, day and night"
      },
      fr: {
        title: "Mode Sombre",
        description: "Agréable pour les yeux, de jour comme de nuit"
      }
    },
    icon: "moon-o"
  },
  {
    translations: {
      en: {
        title: "Smart Notifications",
        description: "Stay informed with intelligent alerts"
      },
      fr: {
        title: "Notifications Intelligentes",
        description: "Restez informé avec des alertes intelligentes"
      }
    },
    icon: "bell"
  },
  {
    translations: {
      en: {
        title: "Analytics",
        description: "Powerful insights into your usage patterns"
      },
      fr: {
        title: "Analytique",
        description: "Analyses puissantes de vos habitudes d'utilisation"
      }
    },
    icon: "bar-chart"
  }
];

// Screenshots
export const screenshots = {
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
        title: "Powerful Features"
      },
      {
        image: require("@/assets/images/screenshot.png"),
        title: "Smart Integration"
      },
      {
        image: require("@/assets/images/screenshot.png"),
        title: "Advanced Analytics"
      }
    ]
  }
};

// Social Links
export const socials: SocialLink[] = [
  {
    platform: 'twitter',
    url: 'https://twitter.com/yourapp',
    icon: 'twitter',
    label: 'Follow us on Twitter'
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/yourapp',
    icon: 'instagram',
    label: 'Discover our exclusive stories'
  },
  {
    platform: 'facebook',
    url: 'https://facebook.com/yourapp',
    icon: 'facebook',
    label: 'Join our community'
  },
  {
    platform: 'github',
    url: 'https://github.com/yourorganization',
    icon: 'github',
    label: 'Check our open source work'
  },
];

// Press Kit
export const pressKit = {
  enabled: true,
  url: "https://yourapp.com/press"
};

export const changelog = {
  enabled: true,
  versions: [
    {
      version: "2.0.0",
      date: "2024-03-15",
      changes: [
        {
          type: "feature",
          translations: {
            en: { description: "Added dark mode support across the entire app" },
            fr: { description: "Ajout du support du mode sombre dans toute l'application" }
          }
        },
        {
          type: "improvement",
          translations: {
            en: { description: "Enhanced performance for image loading" },
            fr: { description: "Amélioration des performances de chargement des images" }
          }
        }
      ]
    },
    {
      version: "1.9.0",
      date: "2024-02-28",
      changes: [
        {
          type: "feature",
          translations: {
            en: { description: "New dashboard layout with customizable widgets" },
            fr: { description: "Nouvelle disposition du tableau de bord avec widgets personnalisables" }
          }
        },
        {
          type: "fix",
          translations: {
            en: { description: "Fixed notification sync issues on iOS devices" },
            fr: { description: "Correction des problèmes de synchronisation des notifications sur les appareils iOS" }
          }
        }
      ]
    },
    {
      version: "1.8.5",
      date: "2024-02-10",
      changes: [
        {
          type: "improvement",
          translations: {
            en: { description: "Optimized app startup time by 40%" },
            fr: { description: "Optimisation du temps de démarrage de l'application de 40%" }
          }
        },
        {
          type: "fix",
          translations: {
            en: { description: "Resolved authentication token refresh bug" },
            fr: { description: "Résolution du bug de rafraîchissement du jeton d'authentification" }
          }
        }
      ]
    }
  ]
};