import { ExpoConfig } from "expo/config";

// Replace these with your EAS project ID and project slug.
// You can find them at https://expo.dev/accounts/[account]/projects/[project].
const EAS_PROJECT_ID = "bbcdb568-c1d1-4186-b0c3-454715c2314b";
const PROJECT_SLUG = "mobile-landing-page";
const OWNER = "weshipit";

// App production config
export const APP_NAME = "Mobile Landing";

// use reverse domain name example: com.company.appname
const BUNDLE_IDENTIFIER = "com.mobile-landing";
const PACKAGE_NAME = "com.mobile-landing";

const ICON = "./assets/images/icon.png";
const ADAPTIVE_ICON = "./assets/images/adaptive-icon.png";
const FAVICON = "./assets/images/favicon.png";

// Replace these with your app store URLs
// You can find them at https://appstoreconnect.apple.com/apps/[app-id]/distribution/info
export const APP_STORE_APP_ID = "570060128";
export const APP_STORE_URL = `https://apps.apple.com/app/${APP_NAME}/id${APP_STORE_APP_ID}`;
export const GOOGLE_PLAYSTORE_URL = `https://play.google.com/store/apps/details?id=${PACKAGE_NAME}`;

export const LANDING_PAGE_URL = "https://mobile-landing.expo.dev"; // URL of your landing page

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
      backgroundColor: "#ffffff",
    },
    package: PACKAGE_NAME,
    playStoreUrl: GOOGLE_PLAYSTORE_URL,
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: FAVICON,
    meta: [
      {
        name: "apple-itunes-app",
        content: `app-id=${APP_STORE_APP_ID}}`,
      },
    ],
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    "expo-localization",
  ],
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: EAS_PROJECT_ID,
      ascAppId: APP_STORE_APP_ID, // this is normally defined in eas.json
    },
  },
  owner: OWNER,
};

export default config;
