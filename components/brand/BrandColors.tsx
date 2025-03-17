import { View, Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';

const colors = [
  { name: 'Primary', hex: '#007AFF', description: 'Main brand color' },
  { name: 'Secondary', hex: '#5856D6', description: 'Accent color' },
  { name: 'Success', hex: '#34C759', description: 'Success states' },
  { name: 'Warning', hex: '#FF9500', description: 'Warning states' },
  { name: 'Error', hex: '#FF3B30', description: 'Error states' },
  { name: 'Background', hex: '#F2F2F7', description: 'Background color' },
  { name: 'Text', hex: '#000000', description: 'Primary text color' },
  { name: 'Gray', hex: '#8E8E93', description: 'Secondary text color' },
  { name: 'Light', hex: '#E5E5EA', description: 'Border color' },
];

export function BrandColors() {
  const copyToClipboard = async (hex: string) => {
    await Clipboard.setStringAsync(hex);
  };

  return (
    <View className="my-8">
      <Text className="text-2xl font-bold mb-6 text-gray-900">Colors</Text>
      <View className="grid grid-cols-3 gap-4">
        {colors.map((color) => (
          <Pressable
            key={color.name}
            className="items-center"
            onPress={() => copyToClipboard(color.hex)}
          >
            <View className="relative w-full aspect-square mb-2">
              <View
                className="w-full h-full rounded-lg shadow-md"
                style={{ backgroundColor: color.hex }}
              />
              <View className="absolute top-1 right-1 bg-black/50 rounded-full p-1.5 opacity-0 scale-90">
                <Ionicons name="copy-outline" size={16} color="#ffffff" />
              </View>
            </View>
            <View className="items-center w-full">
              <Text className="text-sm font-semibold text-gray-900 mb-0.5">{color.name}</Text>
              <Text className="text-xs text-gray-500 mb-0.5">{color.hex}</Text>
              <Text className="text-[11px] text-gray-500 text-center leading-[14px]">{color.description}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
} 