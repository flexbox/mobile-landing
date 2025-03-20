import React, { createContext, useContext, useState, useEffect } from 'react';
import { APP_STORE_APP_ID } from '@/app.config';

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
  appData: AppStoreData | null;
}

const AppStoreContext = createContext<AppStoreContextType>({ appData: null });

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [appData, setAppData] = useState<AppStoreData | null>(null);

  useEffect(() => {
    console.log("Fetching App Store data for ID:", APP_STORE_APP_ID);
    fetch(`https://itunes.apple.com/lookup?id=${APP_STORE_APP_ID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Full App Store Response:", data);
        if (data.results && data.results.length > 0) {
          const result = data.results[0];
          console.log("App Store Data:", {
            name: result.trackName,
            rating: result.averageUserRating,
            description: result.description,
            price: result.formattedPrice,
            icon: result.artworkUrl512,
          });
          setAppData({
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
          // Fallback data when app is not yet published
          setAppData({
            trackName: "Expo App Landing Page",
            price: 0,
            averageUserRating: 5,
            formattedPrice: "Free",
            currency: "USD",
            screenshotUrls: [],
            ipadScreenshotUrls: [],
            artworkUrl512: '',
            description: "A beautiful landing page for your Expo app. Showcase your app with style and elegance. This template includes App Store data integration, localization support, and a modern design that adapts to all screen sizes.",
          });
        }
      })
      .catch((error: Error) => {
        console.error('Error fetching App Store data:', error);
        // Same fallback data in case of error
        setAppData({
          trackName: "Expo App Landing Page",
          price: 0,
          averageUserRating: 5,
          formattedPrice: "Free",
          currency: "USD",
          screenshotUrls: [],
          ipadScreenshotUrls: [],
          artworkUrl512: '',
          description: "A beautiful landing page for your Expo app. Showcase your app with style and elegance. This template includes App Store data integration, localization support, and a modern design that adapts to all screen sizes.",
        });
      });
  }, []);

  return (
    <AppStoreContext.Provider value={{ appData }}>
      {children}
    </AppStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(AppStoreContext);
} 