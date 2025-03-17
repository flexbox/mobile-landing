import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const guidelines = [
  {
    title: 'Do',
    icon: 'checkmark-circle',
    color: '#34C759',
    items: [
      'Use our brand colors consistently across all materials',
      'Maintain proper spacing and alignment',
      'Follow our typography hierarchy',
      'Use the correct logo version for each context',
      'Keep designs clean and minimal',
      'Ensure proper contrast ratios',
      'Use appropriate padding and margins',
    ],
  },
  {
    title: "Don't",
    icon: 'close-circle',
    color: '#FF3B30',
    items: [
      'Modify or distort our logos',
      'Use unauthorized color combinations',
      'Change the font styles',
      'Place logos on busy backgrounds',
      'Stretch or compress images',
      'Use outdated brand elements',
      'Mix different design styles',
    ],
  },
];

export function BrandGuidelines() {
  return (
    <View className="my-8">
      <Text className="text-2xl font-bold mb-6 text-gray-900">Guidelines</Text>
      <View className="flex-row flex-wrap gap-6">
        {guidelines.map((section) => (
          <View
            key={section.title}
            className="bg-white rounded-2xl p-6 shadow-sm w-full md:w-[calc(50%-12px)]"
          >
            <View className="flex-row items-center mb-5 gap-2">
              <Ionicons name={section.icon as any} size={24} color={section.color} />
              <Text className="text-xl font-bold" style={{ color: section.color }}>{section.title}</Text>
            </View>
            <View className="gap-3">
              {section.items.map((item, index) => (
                <View key={index} className="flex-row items-start gap-3">
                  <Ionicons
                    name={section.title === 'Do' ? 'checkmark-circle' : 'close-circle'}
                    size={20}
                    color={section.color}
                    className="mt-0.5"
                  />
                  <Text className="text-base text-gray-700 flex-1 leading-6">{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
} 