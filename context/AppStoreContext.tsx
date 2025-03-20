import React, { createContext, useContext, useState, useEffect } from 'react';
import { APP_STORE_APP_ID } from '@/app.config';
import { translate } from '@/i18n/translate';
import Constants from 'expo-constants';
import * as FileSystem from 'expo-file-system';

export interface AppStoreData {
  trackName: string;
  price: number;
  averageUserRating: number;
  formattedPrice: string;
  currency: string;
  screenshotUrls: string[];
  ipadScreenshotUrls: string[];
  artworkUrl512: string;
  description: string;
}

interface AppStoreContextType {
  appStoreData: AppStoreData | null;
}

const AppStoreContext = createContext<AppStoreContextType>({ appStoreData: null });

const fallbackData: AppStoreData = {
  trackName: "Expo App Landing Page",
  price: 0,
  averageUserRating: 5,
  formattedPrice: "Free",
  currency: "USD",
  screenshotUrls: [],
  ipadScreenshotUrls: [],
  artworkUrl512: '',
  description: translate('app.description'),
};

const loadStaticAppStoreData = async (): Promise<AppStoreData | null> => {
  try {
    if (Constants.appOwnership === 'expo' || Constants.appOwnership === undefined) {
      try {
        const staticData = require('@/assets/data/appStore.json');
        return staticData;
      } catch (error) {
        console.warn('Static app store data not found, using fallback data');
        return fallbackData;
      }
    }

    const fileUri = FileSystem.documentDirectory + 'appStore.json';
    const fileExists = await FileSystem.getInfoAsync(fileUri);

    if (fileExists.exists) {
      const jsonContent = await FileSystem.readAsStringAsync(fileUri);
      return JSON.parse(jsonContent);
    }

    return null;
  } catch (error) {
    console.error('Error loading static app store data:', error);
    return null;
  }
};

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [appStoreData, setAppStoreData] = useState<AppStoreData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const staticData = await loadStaticAppStoreData();
      if (staticData) {
        console.log("Using static App Store data");
        setAppStoreData(staticData);
        return;
      }
      console.log("Fetching App Store data for ID:", APP_STORE_APP_ID);
      try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${APP_STORE_APP_ID}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const result = data.results[0];
          console.log("App Store Data:", {
            name: result.trackName,
            rating: result.averageUserRating,
            description: result.description,
            price: result.formattedPrice,
            icon: result.artworkUrl512,
          });

          setAppStoreData({
            trackName: result.trackName,
            price: result.price,
            averageUserRating: result.averageUserRating,
            formattedPrice: result.formattedPrice,
            currency: result.currency,
            screenshotUrls: result.screenshotUrls || [],
            ipadScreenshotUrls: result.ipadScreenshotUrls || [],
            artworkUrl512: result.artworkUrl512 || '',
            description: result.description || '',
          });
        } else {
          console.log("No results found in App Store response, using fallback data");
          setAppStoreData(fallbackData);
        }
      } catch (error) {
        console.error('Error fetching App Store data:', error);
        setAppStoreData(fallbackData);
      }
    };

    loadData();
  }, []);

  return (
    <AppStoreContext.Provider value={{ appStoreData }}>
      {children}
    </AppStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(AppStoreContext);
} 