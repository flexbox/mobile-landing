import { ScrollView, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Head from 'expo-router/head';
import { useScroll } from '@/context/ScrollContext';
import { FloatingButton } from '@/components/FloatingButton';
import { appInfo } from '@/constants/landing';

interface FrontMatter {
  title?: string;
  description?: string;
  image?: string;
  showGithubButton?: boolean;
}

interface ScreenContainerProps {
  children: React.ReactNode;
  frontMatter?: FrontMatter;
}

export function ScreenContainer({ children, frontMatter }: ScreenContainerProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const { setScrollViewRef } = useScroll();

  useEffect(() => {
    setScrollViewRef(scrollViewRef.current);
  }, [setScrollViewRef]);

  const title = frontMatter?.title || appInfo.name;
  const description = frontMatter?.description || '';
  const image = frontMatter?.image || '/@og-image.png';

  return (
    <View style={{ flex: 1 }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={appInfo.websiteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <ScrollView ref={scrollViewRef} className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
      <FloatingButton
        url="https://github.com/flexbox/expo-app-landing-page"
        icon="github"
        textKey="cta.buildYourOwn"
      />
    </View>
  );
} 