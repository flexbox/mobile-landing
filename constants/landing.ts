import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";

import { APP_NAME, APP_STORE_URL, GOOGLE_PLAYSTORE_URL } from "@/app.config";
import { ChangeType } from "@/app/changelog";

interface Feature {
  id: string;
  icon: keyof typeof FontAwesome.glyphMap;
}

interface SocialLink {
  platform: "twitter" | "facebook" | "instagram" | "github" | "email";
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
    },
  },
};

// Features
export const features: Feature[] = [
  {
    id: "smartIntegration",
    icon: "plug",
  },
  {
    id: "cloudSync",
    icon: "cloud",
  },
  {
    id: "security",
    icon: "shield",
  },
  {
    id: "darkMode",
    icon: "moon-o",
  },
  {
    id: "notifications",
    icon: "bell",
  },
  {
    id: "analytics",
    icon: "bar-chart",
  },
];

// Screenshots
export const screenshots = {
  assets: {
    icon: require("@/assets/images/icon.png"),
    logo: require("@/assets/images/icon.png"),
    screenshots: [
      {
        image: require("@/assets/images/screenshot.png"),
        id: "beautiful",
      },
      {
        image: require("@/assets/images/screenshot.png"),
        id: "features",
      },
      {
        image: require("@/assets/images/screenshot.png"),
        id: "integration",
      },
      {
        image: require("@/assets/images/screenshot.png"),
        id: "analytics",
      },
    ],
  },
};

// Social Links
export const socials: SocialLink[] = [
  {
    platform: "twitter",
    url: "https://twitter.com/intent/follow?screen_name=flexbox_",
    icon: "twitter",
    label: "Follow us on Twitter",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/yourapp",
    icon: "instagram",
    label: "Discover our exclusive stories",
  },
  {
    platform: "facebook",
    url: "https://facebook.com/yourapp",
    icon: "facebook",
    label: "Join our community",
  },
  {
    platform: "github",
    url: "https://github.com/flexbox",
    icon: "github",
    label: "Check our open source work",
  },
];

// Press Kit
export const pressKit = {
  enabled: true,
};

export const changelog = {
  enabled: true,
  versions: [
    {
      version: "2.0.0",
      date: "2025-03-15",
      changes: [
        {
          type: "feature" as ChangeType,
          id: "darkMode",
        },
        {
          type: "improvement" as ChangeType,
          id: "imageLoading",
        },
      ],
    },
    {
      version: "1.9.0",
      date: "2024-02-28",
      changes: [
        {
          type: "feature" as ChangeType,
          id: "dashboard",
        },
        {
          type: "fix" as ChangeType,
          id: "notificationSync",
        },
      ],
    },
    {
      version: "1.8.5",
      date: "2024-02-10",
      changes: [
        {
          type: "improvement" as ChangeType,
          id: "startupTime",
        },
        {
          type: "fix" as ChangeType,
          id: "authToken",
        },
      ],
    },
  ],
};
