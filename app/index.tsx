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
        <meta property="og:type" content="website" />
        <meta property="og:title" content={appInfo.name} />
        <meta property="og:description" content={translate('app.description')} />
        <meta property="og:url" content={appInfo.websiteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={appInfo.name} />
        <meta name="twitter:description" content={translate('app.description')} />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/75ff5273-f972-4524-9a6a-081c11a86418.png?token=f2cCBa1JErZ3ev3_HQwRB5tbn4d2N9nlMVSIUgqOFyo&height=451&width=800&expires=33278226200" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/75ff5273-f972-4524-9a6a-081c11a86418.png?token=f2cCBa1JErZ3ev3_HQwRB5tbn4d2N9nlMVSIUgqOFyo&height=451&width=800&expires=33278226200" />
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