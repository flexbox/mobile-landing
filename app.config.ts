import { ExpoConfig } from 'expo/config';

// App configuration that can be shared across the application
export const APP_CONFIG = {
  name: "Your App Name",
  version: "1.0.0",
  description: "A powerful mobile application that transforms the way you interact with your digital world. Experience seamless integration, stunning design, and unparalleled performance.",
  tagline: "Your Vision. Your App. Your Success.",
  price: "Free - Premium Available",
  category: "Productivity",
  bundleId: "com.yourcompany.appname",
  packageName: "com.yourcompany.appname",
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
  expo: {
    projectId: "your-eas-project-id",
    projectSlug: "your-project-slug",
    owner: "your-expo-username",
  }
} as const;

// Asset paths
const ICON = "./assets/images/icon.png";
const ADAPTIVE_ICON = "./assets/images/adaptive-icon.png";
const FAVICON = "./assets/images/favicon.png";

const config: ExpoConfig = {
  name: APP_CONFIG.name,
  slug: APP_CONFIG.expo.projectSlug,
  version: APP_CONFIG.version,
  orientation: "portrait",
  icon: ICON,
  scheme: APP_CONFIG.expo.projectSlug,
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: APP_CONFIG.bundleId,
    appStoreUrl: APP_CONFIG.store.ios.url,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: ADAPTIVE_ICON,
      backgroundColor: "#ffffff"
    },
    package: APP_CONFIG.packageName,
    playStoreUrl: APP_CONFIG.store.android.url,
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: FAVICON
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      }
    ]
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: APP_CONFIG.expo.projectId,
      ascAppId: APP_CONFIG.store.ios.id,
    },
  },
  owner: APP_CONFIG.expo.owner,
};

export default config;