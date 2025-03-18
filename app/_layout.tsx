import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import Head from 'expo-router/head';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css"
import { Header } from '@/components/Header';
import { View } from 'react-native';
import { ScrollProvider, useScroll } from '@/context/ScrollContext';
import { appInfo } from '@/constants/landing';
import { translate } from '@/i18n/translate';
import { APP_STORE_APP_ID } from '@/app.config';
import { GenerateOgImage } from '@/scripts/generateOgImage';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function LayoutContent() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const { scrollToSection } = useScroll();

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
        <title>{appInfo.name}</title>
        <meta name="description" content={translate('app.description')} />
        <meta name="apple-itunes-app" content={`app-id=${APP_STORE_APP_ID}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={appInfo.name} />
        <meta property="og:description" content={translate('app.description')} />
        <meta property="og:url" content={appInfo.websiteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={appInfo.name} />
        <meta name="twitter:description" content={translate('app.description')} />
        <meta property="og:image" content={`${appInfo.websiteUrl}/@og-image.png`} />
        <meta name="twitter:image" content={`${appInfo.websiteUrl}/@og-image.png`} />
      </Head>
      <Header scrollToSection={scrollToSection} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="changelog" />
        <Stack.Screen name="brand" />
        <Stack.Screen name="privacy" />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ScrollProvider>
      <LayoutContent />
    </ScrollProvider>
  );
}
