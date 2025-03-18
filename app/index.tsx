import { View } from 'react-native';
import React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Screenshots } from '@/components/Screenshots';
import { StoreButtons } from '@/components/StoreButtons';
import { SocialLinks } from '@/components/SocialLinks';
import '@/i18n/i18n';
import { translate } from '@/i18n/translate';
import { ScreenContainer } from '@/app/components/ScreenContainer';
export default function HomeScreen() {
  return (
    <ScreenContainer
      frontMatter={{
        description: translate('app.description'),
        showGithubButton: true,
      }}
    >
      <Hero />
      <Features />
      <Screenshots />
      <View className="py-8 md:py-12 px-4 bg-gray-50">
        <StoreButtons />
      </View>
      <SocialLinks />
      <View className="h-16 md:h-0" />
    </ScreenContainer>
  );
} 