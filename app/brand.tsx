import { View, ScrollView } from 'react-native';
import { BrandHero } from '@/components/brand/BrandHero';
import { BrandColors } from '@/components/brand/BrandColors';
import { BrandTypography } from '@/components/brand/BrandTypography';
import { BrandLogos } from '@/components/brand/BrandLogos';
import { BrandGuidelines } from '@/components/brand/BrandGuidelines';

export default function BrandPage() {
  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      <BrandHero />
      <View className="items-center w-full">
        <View className="p-6 max-w-[1200px] w-full md:w-1/2">
          <BrandColors />
          <BrandTypography />
          <BrandLogos />
          <BrandGuidelines />
        </View>
      </View>
    </ScrollView>
  );
} 