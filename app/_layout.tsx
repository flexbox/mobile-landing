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
