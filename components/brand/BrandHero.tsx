import { View, Text, Image } from 'react-native';

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
        <Text className="text-4xl font-bold text-center text-gray-900 tracking-tight">
          Brand Guidelines
        </Text>
        <Text className="mt-4 text-lg text-center text-gray-600 max-w-[600px] leading-7">
          Our brand represents who we are and what we stand for. Use these guidelines to maintain consistency across all our communications.
        </Text>
      </View>
    </View>
  );
} 