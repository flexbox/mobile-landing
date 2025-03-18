import { View, ScrollView } from 'react-native';
import React from 'react';
import { BrandColors } from '@/components/brand/BrandColors';
import { BrandTypography } from '@/components/brand/BrandTypography';
import { BrandLogos } from '@/components/brand/BrandLogos';
import { BrandGuidelines } from '@/components/brand/BrandGuidelines';
import { translate } from '@/i18n/translate';
import { appInfo } from '@/constants/landing';
import Head from 'expo-router/head';

export default function BrandPage() {
  const title = `${translate('brand.hero.title')} - ${appInfo.name}`;
  const description = translate('brand.hero.description');

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${appInfo.websiteUrl}/brand`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${appInfo.websiteUrl}/@og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${appInfo.websiteUrl}/@og-image.png`} />
      </Head>
      <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
        <View className="items-center w-full">
          <View className="p-6 max-w-[1200px] w-full md:w-1/2">
            <BrandLogos />
            <BrandGuidelines />
            <BrandColors />
            <BrandTypography />
          </View>
        </View>
      </ScrollView>
    </>
  );
} 