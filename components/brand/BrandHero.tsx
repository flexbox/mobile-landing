import { View, Image } from 'react-native';
import { Text } from '@/components/Text';

export function BrandHero() {
  return (
    <View className="w-full py-16 bg-white border-b border-gray-200">
      <View className="items-center px-4">
        <Image
          source={require('@/assets/images/icon.png')}
          className="mb-6"
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <Text tx="brand.hero.title" variant="heading1" className="text-center tracking-tight" />
        <Text tx="brand.hero.description" variant="bodyLarge" className="mt-4 text-center text-gray-600 max-w-[600px] leading-7" />
      </View>
    </View>
  );
} 