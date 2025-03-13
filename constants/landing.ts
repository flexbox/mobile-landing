import { FontAwesome } from '@expo/vector-icons';
import { APP_CONFIG } from '../app.config';

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
  name: APP_CONFIG.name,
  tagline: APP_CONFIG.tagline,
  description: APP_CONFIG.description,
  price: APP_CONFIG.price,
  category: APP_CONFIG.category,
  version: APP_CONFIG.version,
  store: {
    ios: {
      id: APP_CONFIG.store.ios.id,
      url: APP_CONFIG.store.ios.url,
    },
    android: {
      id: APP_CONFIG.packageName,
      url: APP_CONFIG.store.android.url,
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