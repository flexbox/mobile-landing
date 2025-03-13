import { APP_NAME, APP_STORE_URL, GOOGLE_PLAYSTORE_URL } from '@/app.config';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

interface Feature {
  title: string;
  description: string;
  icon: keyof typeof FontAwesome.glyphMap;
}

interface SocialLink {
  platform: 'twitter' | 'facebook' | 'instagram' | 'github' | 'email';
  url: string;
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
}

// App Info
export const appInfo = {
  name: APP_NAME,
  tagline: "The ultimate way to quicly create a delightfull landing page for your expo app.",
  description: "This is a powerful and flexible landing page template for your app. It's easy to customize and it looks great on any device, big or small.",
  price: "one time purchase",
  category: "Productivity",
  version: Constants.expoConfig?.version,
  store: {
    ios: {
      url: APP_STORE_URL,
    },
    android: {
      url: GOOGLE_PLAYSTORE_URL,
    }
  }
};

// Features
export const features: Feature[] = [
  {
    title: "Smart Integration",
    description: "Seamlessly connect with your favorite tools and services",
    icon: "plug"
  },
  {
    title: "Cloud Sync",
    description: "Access your data from anywhere, anytime",
    icon: "cloud"
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade encryption and privacy features",
    icon: "shield"
  },
  {
    title: "Dark Mode",
    description: "Easy on the eyes, day and night",
    icon: "moon-o"
  },
  {
    title: "Smart Notifications",
    description: "Stay informed with intelligent alerts",
    icon: "bell"
  },
  {
    title: "Analytics",
    description: "Powerful insights into your usage patterns",
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
          description: "Added dark mode support across the entire app"
        },
        {
          type: "improvement",
          description: "Enhanced performance for image loading"
        }
      ]
    },
    {
      version: "1.9.0",
      date: "2024-02-28",
      changes: [
        {
          type: "feature",
          description: "New dashboard layout with customizable widgets"
        },
        {
          type: "fix",
          description: "Fixed notification sync issues on iOS devices"
        }
      ]
    },
    {
      version: "1.8.5",
      date: "2024-02-10",
      changes: [
        {
          type: "improvement",
          description: "Optimized app startup time by 40%"
        },
        {
          type: "fix",
          description: "Resolved authentication token refresh bug"
        }
      ]
    }
  ]
};