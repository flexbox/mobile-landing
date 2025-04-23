import React, { createContext, useContext, useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";

import { APP_NAME, APP_STORE_APP_ID } from "@/app.config";
import { translate } from "@/i18n/translate";

export interface AppStoreData {
  trackName: string;
  description: string;
  averageUserRating?: number;
  price: number;
  formattedPrice: string;
  currency: string;
  screenshotUrls: string[];
  ipadScreenshotUrls: string[];
  artworkUrl512: string;
}

interface AppStoreContextType {
  appStoreData: AppStoreData | null;
  isLoading: boolean;
  dataSource: "static" | "api" | "fallback" | null;
}

const AppStoreContext = createContext<AppStoreContextType>({
  appStoreData: null,
  isLoading: true,
  dataSource: null,
});

const initialStoreData: AppStoreData = {
  trackName: APP_NAME,
  description: translate("app.description"),
  price: 0,
  formattedPrice: "Free",
  currency: "USD",
  screenshotUrls: [],
  ipadScreenshotUrls: [],
  artworkUrl512: "",
};

async function loadStaticAppStoreData(): Promise<AppStoreData | null> {
  try {
    // Try to load from assets
    const staticData = require("@/assets/data/appStore.json");
    console.log("Static App Store data loaded from assets");
    return staticData;
  } catch (assetError) {
    try {
      // Try to load from file system
      if (FileSystem.documentDirectory) {
        const fileUri = FileSystem.documentDirectory + "appStore.json";
        const fileExists = await FileSystem.getInfoAsync(fileUri);

        if (fileExists.exists) {
          const jsonContent = await FileSystem.readAsStringAsync(fileUri);
          console.log("Static App Store data loaded from file system");
          return JSON.parse(jsonContent);
        }
      }

      console.log("Static app store data not found in file system");
      return null;
    } catch (fsError) {
      console.error(
        "❌ Error loading static app store data from file system:",
        fsError,
      );
      return null;
    }
  }
}

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [appStoreData, setAppStoreData] = useState<AppStoreData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState<
    "static" | "api" | "fallback" | null
  >(null);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);

      // Step 1: Try to load static data
      try {
        const staticData = await loadStaticAppStoreData();
        if (staticData) {
          console.log("Using static App Store data");
          setAppStoreData(staticData);
          setDataSource("static");
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.error("Failed to load static data:", error);
      }

      // Step 2: If no static data, try App Store API
      try {
        console.log("Fetching App Store data for ID:", APP_STORE_APP_ID);
        const response = await fetch(
          `https://itunes.apple.com/lookup?id=${APP_STORE_APP_ID}`,
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const result = data.results[0];
          console.log("App Store Data:", result);

          setAppStoreData({
            trackName: result.trackName,
            price: result.price,
            averageUserRating: result.averageUserRating,
            formattedPrice: result.formattedPrice,
            currency: result.currency,
            screenshotUrls: result.screenshotUrls || [],
            ipadScreenshotUrls: result.ipadScreenshotUrls || [],
            artworkUrl512: result.artworkUrl512 || "",
            description: result.description || "",
          });
          setDataSource("api");
        } else {
          console.log(
            "No results found in App Store response, using fallback data",
          );
          setAppStoreData(initialStoreData);
          setDataSource("fallback");
        }
      } catch (error) {
        console.error("❌ Error fetching App Store data:", error);
        setAppStoreData(initialStoreData);
        setDataSource("fallback");
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <AppStoreContext.Provider value={{ appStoreData, isLoading, dataSource }}>
      {isLoading ? null : children}
    </AppStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(AppStoreContext);
}
