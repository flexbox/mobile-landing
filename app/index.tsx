import { ScrollView, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Screenshots } from '@/components/Screenshots';
import { StoreButtons } from '@/components/StoreButtons';
import { SocialLinks } from '@/components/SocialLinks';
import { FloatingButton } from '@/components/FloatingButton';
import '@/i18n/i18n';
import { useScroll } from '@/context/ScrollContext';
import { appInfo } from '@/constants/landing';
import { translate } from '@/i18n/translate';
import { APP_STORE_APP_ID } from '@/app.config';

export const metadata = {
  title: appInfo.name,
  description: translate('app.description'),
  openGraph: {
    title: appInfo.name,
    description: translate('app.description'),
    url: appInfo.websiteUrl,
    type: 'website',
    images: [`${appInfo.websiteUrl}/@og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: appInfo.name,
    description: translate('app.description'),
    images: [`${appInfo.websiteUrl}/@og-image.png`],
  },
  other: {
    'apple-itunes-app': `app-id=${APP_STORE_APP_ID}`,
  },
};

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const { setScrollViewRef } = useScroll();

  useEffect(() => {
    setScrollViewRef(scrollViewRef.current);
  }, [setScrollViewRef]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollViewRef} className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
        <Hero />
        <Features />
        <Screenshots />
        <View className="py-8 md:py-12 px-4 bg-gray-50">
          <StoreButtons />
        </View>
        <SocialLinks />
        <View className="h-16 md:h-0" />
      </ScrollView>
      <FloatingButton
        url="https://github.com/flexbox/expo-app-landing-page"
        icon="github"
        textKey="cta.buildYourOwn"
      />
    </View>
  );
} 