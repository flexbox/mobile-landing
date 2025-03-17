import { ScrollView, View } from 'react-native';
import Head from 'expo-router/head';
import React from 'react';
import { translate } from '@/i18n/translate';
import { appInfo } from '@/constants/landing';
import { APP_STORE_APP_ID } from '@/app.config';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Screenshots } from '@/components/Screenshots';
import { StoreButtons } from '@/components/StoreButtons';
import { SocialLinks } from '@/components/SocialLinks';
import { FloatingButton } from '@/components/FloatingButton';
import '../i18n/i18n';
import { useScroll } from './context/ScrollContext';

export default function HomeScreen() {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const { setScrollViewRef } = useScroll();

  React.useEffect(() => {
    setScrollViewRef(scrollViewRef.current);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Head>
        <title>{appInfo.name}</title>
        <meta name="description" content={translate('app.description')} />
        <meta name="apple-itunes-app" content={`app-id=${APP_STORE_APP_ID}`} />
      </Head>
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