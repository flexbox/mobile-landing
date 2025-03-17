import { View, Text, ScrollView } from 'react-native';

type TypographyStyle = {
  name: string;
  size: number;
  weight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'normal' | 'bold';
  example: string;
};

const typographyStyles: TypographyStyle[] = [
  { name: 'Heading 1', size: 32, weight: 'bold', example: 'The quick brown fox' },
  { name: 'Heading 2', size: 24, weight: 'bold', example: 'The quick brown fox' },
  { name: 'Heading 3', size: 20, weight: '600', example: 'The quick brown fox' },
  { name: 'Body Large', size: 18, weight: 'normal', example: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Body', size: 16, weight: 'normal', example: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Body Small', size: 14, weight: 'normal', example: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Caption', size: 12, weight: 'normal', example: 'The quick brown fox' },
];

export function BrandTypography() {
  return (
    <View className="my-6">
      <Text className="text-2xl font-bold mb-4 text-gray-900">Typography</Text>
      <ScrollView>
        {typographyStyles.map((style) => (
          <View key={style.name} className="mb-6">
            <Text className="text-sm text-gray-500 mb-1">{style.name}</Text>
            <Text
              className="text-gray-900 mb-1"
              style={{ fontSize: style.size, fontWeight: style.weight }}
            >
              {style.example}
            </Text>
            <Text className="text-xs text-gray-500">
              {style.size}px • {style.weight}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
} 