import React from 'react';
import { View, ScrollView } from 'react-native';
import { translate } from '@/i18n/translate';
import { BrandColors } from '@/components/brand/BrandColors';
import { BrandTypography } from '@/components/brand/BrandTypography';
import { BrandLogos } from '@/components/brand/BrandLogos';
import { BrandGuidelines } from '@/components/brand/BrandGuidelines';
import { ScreenContainer } from '@/app/components/ScreenContainer';

export default function BrandScreen() {
  return (
    <ScreenContainer
      frontMatter={{
        title: translate('brand.title'),
        description: translate('brand.description'),
      }}
    >
      <View className="px-4 py-8">
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
      </View>
    </ScreenContainer>
  );
} 