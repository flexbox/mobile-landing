import { View, ScrollView } from 'react-native';
import { BrandColors } from '@/components/brand/BrandColors';
import { BrandTypography } from '@/components/brand/BrandTypography';
import { BrandLogos } from '@/components/brand/BrandLogos';
import { BrandGuidelines } from '@/components/brand/BrandGuidelines';
import { translate } from '@/i18n/translate';
import { appInfo } from '@/constants/landing';

export const metadata = {
  title: `${translate('brand.hero.title')} - ${appInfo.name}`,
  description: translate('brand.hero.description'),
  openGraph: {
    title: `${translate('brand.hero.title')} - ${appInfo.name}`,
    description: translate('brand.hero.description'),
    url: `${appInfo.websiteUrl}/brand`,
    type: 'website',
    images: [`${appInfo.websiteUrl}/@og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${translate('brand.hero.title')} - ${appInfo.name}`,
    description: translate('brand.hero.description'),
    images: [`${appInfo.websiteUrl}/@og-image.png`],
  },
};

export default function BrandPage() {
  return (
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
  );
} 