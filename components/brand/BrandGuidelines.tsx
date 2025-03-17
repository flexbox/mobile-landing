import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '@/components/Text';
import { theme } from '@/constants/theme';

const guidelines = [
  {
    key: 'do',
    icon: 'checkmark-circle',
    color: theme.colors.success,
    items: [
      'brand.components.guidelines.do.items.0',
      'brand.components.guidelines.do.items.1',
      'brand.components.guidelines.do.items.2',
      'brand.components.guidelines.do.items.3',
      'brand.components.guidelines.do.items.4',
      'brand.components.guidelines.do.items.5',
      'brand.components.guidelines.do.items.6'
    ]
  },
  {
    key: 'dont',
    icon: 'close-circle',
    color: theme.colors.error,
    items: [
      'brand.components.guidelines.dont.items.0',
      'brand.components.guidelines.dont.items.1',
      'brand.components.guidelines.dont.items.2',
      'brand.components.guidelines.dont.items.3',
      'brand.components.guidelines.dont.items.4',
      'brand.components.guidelines.dont.items.5',
      'brand.components.guidelines.dont.items.6'
    ]
  },
];

export function BrandGuidelines() {
  return (
    <View className="my-8">
      <Text tx="brand.guidelines.title" variant="heading2" className="mb-6" />
      <View className="flex-row flex-wrap gap-6">
        {guidelines.map((section) => (
          <View
            key={section.key}
            className="bg-white rounded-2xl p-6 shadow-sm w-full md:w-[calc(50%-12px)]"
          >
            <View className="flex-row items-center mb-5 gap-2">
              <Ionicons name={section.icon as any} size={24} color={section.color} />
              <Text tx={`brand.components.guidelines.${section.key}.title`} variant="heading3" style={{ color: section.color }} />
            </View>
            <View className="gap-3">
              {section.items.map((item, index) => (
                <View key={index} className="flex-row items-start gap-3">
                  <Ionicons
                    name={section.key === 'do' ? 'checkmark-circle' : 'close-circle'}
                    size={20}
                    color={section.color}
                    className="mt-0.5"
                  />
                  <Text tx={item} variant="body" className="flex-1 leading-6" />
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
} 