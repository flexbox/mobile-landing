import { View, ScrollView } from 'react-native';
import { Text } from '@/components/Text';
import { theme } from '@/constants/theme';

export function BrandTypography() {
  return (
    <View className="my-6">
      <Text tx="brand.typography.title" variant="heading2" className="mb-4" />
      <ScrollView>
        {Object.entries(theme.typography).map(([key, style]) => (
          <View key={key} className="mb-6">
            <Text tx={`brand.components.typography.items.${key}.name`} variant="body" className="mb-1" />
            <Text
              className="text-gray-900 mb-1"
              style={{ fontSize: style.size, fontWeight: style.weight }}
            >
              {style.example}
            </Text>
            <Text tx={`brand.components.typography.items.${key}.description`} variant="caption" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
} 