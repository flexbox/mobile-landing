import { ExpoConfig } from 'expo/config';

// Replace these with your EAS project ID and project slug.
// You can find them at https://expo.dev/accounts/[account]/projects/[project].
const EAS_PROJECT_ID = "8ca124dd-2321-47cd-bc07-7f3c36796c0f";
const PROJECT_SLUG = "expo-app-landing-page";
const OWNER = "weshipit";

// App production config
export const APP_NAME = "expo-app-landing-page";
const BUNDLE_IDENTIFIER = "today.weshipit.landing"; // use reverse domain name example: com.company.appname
const PACKAGE_NAME = "today.weshipit.landing"; // use reverse domain name example: com.company.appname
const ICON = "./assets/images/icon.png";
const ADAPTIVE_ICON = "./assets/images/adaptive-icon.png";
const FAVICON = "./assets/images/favicon.png";

// Replace these with your app store URLs
// You can find them at https://appstoreconnect.apple.com/apps/[app-id]/distribution/info
const APP_STORE_APP_ID = "932493382";
export const APP_STORE_URL = `https://apps.apple.com/app/${APP_NAME}/id${APP_STORE_APP_ID}`;
export const GOOGLE_PLAYSTORE_URL = `https://play.google.com/store/apps/details?id=${PACKAGE_NAME}`;

const config: ExpoConfig = {
  name: APP_NAME,
  slug: PROJECT_SLUG,
  version: "1.0.0",
  orientation: "portrait",
  icon: ICON,
  scheme: PROJECT_SLUG,
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: BUNDLE_IDENTIFIER,
    appStoreUrl: APP_STORE_URL,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: ADAPTIVE_ICON,
      backgroundColor: "#ffffff"
    },
    package: PACKAGE_NAME,
    playStoreUrl: GOOGLE_PLAYSTORE_URL,
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: FAVICON,
    meta: {
      "apple-itunes-app": `app-id=${APP_STORE_APP_ID}`,
    }
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
    ],
    "expo-localization"
  ],
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: EAS_PROJECT_ID,
      ascAppId: APP_STORE_APP_ID, // this is normally defined in eas.json
    },
  },
  owner: OWNER,
};

export default config;