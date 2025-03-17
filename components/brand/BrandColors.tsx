import { View, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '@/components/Text';
import { theme } from '@/constants/theme';

export function BrandColors() {
  const copyToClipboard = async (hex: string) => {
    await Clipboard.setStringAsync(hex);
  };

  return (
    <View className="my-8">
      <Text tx="brand.colors.title" variant="heading2" className="mb-6" />
      <View className="grid grid-cols-3 gap-4">
        {Object.entries(theme.colors).map(([key, hex]) => (
          <Pressable
            key={key}
            className="items-center"
            onPress={() => copyToClipboard(hex)}
          >
            <View className="relative w-full aspect-square mb-2">
              <View
                className="w-full h-full rounded-lg shadow-md"
                style={{ backgroundColor: hex }}
              />
              <View className="absolute top-1 right-1 bg-black/50 rounded-full p-1.5 opacity-0 scale-90">
                <Ionicons name="copy-outline" size={16} color="#ffffff" />
              </View>
            </View>
            <View className="items-center w-full">
              <Text tx={`brand.components.colors.items.${key}.name`} variant="body" className="font-semibold mb-0.5" />
              <Text className="text-xs text-gray-500 mb-0.5">{hex}</Text>
              <Text tx={`brand.components.colors.items.${key}.description`} variant="caption" className="text-center leading-[14px]" />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
} 