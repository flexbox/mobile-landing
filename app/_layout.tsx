import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css"
import { Header } from '@/components/Header';
import { View } from 'react-native';
import { ScrollProvider, useScroll } from '@/context/ScrollContext';
import { GenerateOgImage } from '@/scripts/generateOgImage';
import Head from 'expo-router/head';
import { appInfo } from '@/constants/landing';
import { AppStoreProvider, useAppStore } from '@/context/AppStoreContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function LayoutContent() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const { scrollToSection } = useScroll();
  const { appData } = useAppStore();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (process.env.EXPO_PUBLIC_GENERATE_OG === 'true') {
    return <GenerateOgImage />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header scrollToSection={scrollToSection} appData={appData} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            title: appData?.trackName || appInfo.name
          }}
        />
        <Stack.Screen
          name="changelog"
          options={{
            title: `Changelog - ${appData?.trackName || appInfo.name}`
          }}
        />
        <Stack.Screen
          name="brand"
          options={{
            title: `Brand - ${appData?.trackName || appInfo.name}`
          }}
        />
        <Stack.Screen
          name="privacy"
          options={{
            title: `Privacy - ${appData?.trackName || appInfo.name}`
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
