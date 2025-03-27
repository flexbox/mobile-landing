import "react-native-reanimated";
import "../global.css";

import { useEffect } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { Header } from "@/components/Header";
import { AppStoreProvider, useAppStore } from "@/context/AppStoreContext";
import { ScrollProvider, useScroll } from "@/context/ScrollContext";
import { GenerateOgImage } from "@/scripts/generateOgImage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function LayoutContent() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const { scrollToSection } = useScroll();
  const { appStoreData } = useAppStore();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (process.env.EXPO_PUBLIC_GENERATE_OG === "true") {
    return <GenerateOgImage />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header scrollToSection={scrollToSection} appStoreData={appStoreData} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            title: appStoreData?.trackName,
          }}
        />
        <Stack.Screen
          name="changelog"
          options={{
            title: `Changelog - ${appStoreData?.trackName}`,
          }}
        />
        <Stack.Screen
          name="press"
          options={{
            title: `Press Kit - ${appStoreData?.trackName}`,
          }}
        />
        <Stack.Screen
          name="privacy"
          options={{
            title: `Privacy - ${appStoreData?.trackName}`,
          }}
        />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <AppStoreProvider>
      <ScrollProvider>
        <LayoutContent />
      </ScrollProvider>
    </AppStoreProvider>
  );
}
