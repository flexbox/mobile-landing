export const APP_CONFIG = {
  name: "Your App Name",
  version: "1.0.0",
  description: "A powerful mobile application that transforms the way you interact with your digital world. Experience seamless integration, stunning design, and unparalleled performance.",
  price: "Free - Premium Available",
  category: "Productivity",

  // Company/Organization Info
  company: {
    name: "Your Company",
    website: "https://yourcompany.com",
  },

  // Bundle/Package identifiers
  bundleId: "com.yourcompany.appname",
  packageName: "com.yourcompany.appname",

  // Store information
  store: {
    ios: {
      id: "your-app-store-id",
      get url() {
        return `https://apps.apple.com/app/${APP_CONFIG.name}/id${this.id}`;
      },
    },
    android: {
      get url() {
        return `https://play.google.com/store/apps/details?id=${APP_CONFIG.packageName}`;
      },
    },
  },

  // Expo specific
  expo: {
    projectId: "your-eas-project-id",
    projectSlug: "your-project-slug",
    owner: "your-expo-username",
  },

  // Asset paths
  assets: {
    icon: "./assets/images/icon.png",
    adaptiveIcon: "./assets/images/adaptive-icon.png",
    favicon: "./assets/images/favicon.png",
  },
} as const;

// Type exports for TypeScript support
export type AppConfig = typeof APP_CONFIG; 