import { View, useWindowDimensions, ScrollView } from 'react-native';
import { appInfo } from '@/constants/landing';
import Head from 'expo-router/head';
import React from 'react';
import { useLanguage } from '@/i18n/translate';
import '../i18n/i18n';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Screenshots from '@/components/Screenshots';
import StoreButtons from '@/components/StoreButtons';
import SocialLinks from '@/components/SocialLinks';
import GitHubCTA from '@/components/GitHubCTA';
import Features from '@/components/Features';

export default function HomeScreen() {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const { width } = useWindowDimensions();
  const { t } = useLanguage();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const scrollToSection = (sectionId: string) => {
    const yOffset = sectionId === 'features' ? 600 : 1800;
    scrollViewRef.current?.scrollTo({ y: yOffset, animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      <Head>
        <title>{appInfo.name}</title>
        <meta name="description" content={t('app.description')} />
        <meta name="apple-itunes-app" content="app-id=932493382" />
      </Head>
      <ScrollView ref={scrollViewRef} className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
        <Header isMobile={isMobile} scrollToSection={scrollToSection} />
        <Hero isMobile={isMobile} />
        <Features isMobile={isMobile} isTablet={isTablet} />
        <Screenshots isMobile={isMobile} />
        <StoreButtons isMobile={isMobile} />
        <SocialLinks isMobile={isMobile} />
        <View className="h-16 md:h-0" />
      </ScrollView>
      <GitHubCTA isMobile={isMobile} />
    </View>
  );
} 