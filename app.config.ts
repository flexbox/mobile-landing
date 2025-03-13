import { ExpoConfig } from 'expo/config';

// Replace these with your EAS project ID and project slug.
// You can find them at https://expo.dev/accounts/[account]/projects/[project].
const EAS_PROJECT_ID = "8ca124dd-2321-47cd-bc07-7f3c36796c0f";
const PROJECT_SLUG = "expo-app-landing-page";
const OWNER = "weshipit";

// App production config
const APP_NAME = "expo-app-landing-page";
const BUNDLE_IDENTIFIER = "com.company.appname";
const PACKAGE_NAME = "com.company.appname";
const ICON = "./assets/images/icons/iOS-Prod.png";
const ADAPTIVE_ICON = "./assets/images/icons/Android-Prod.png";
const SCHEME = "app-scheme";

const config: ExpoConfig = {
  name: APP_NAME,
  slug: PROJECT_SLUG,
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: BUNDLE_IDENTIFIER,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    package: PACKAGE_NAME,
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
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
      projectId: EAS_PROJECT_ID,
    }
  },
  owner: OWNER,
};

export default config;