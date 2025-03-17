import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { features } from '@/constants/landing';
import { theme } from '@/constants/theme';
import { Text } from './Text';

export const Features = () => {
  return (
    <View className="py-8 md:py-12 px-4 bg-gray-50">
      <Text variant="heading2" color="text" className="mb-8 md:mb-12 text-center" tx="sections.features.title" />
      <View className="flex-row flex-wrap justify-center md:justify-between gap-4 md:gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <View
            key={index}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] p-6 rounded-xl bg-white shadow-sm"
          >
            <View
              style={{ backgroundColor: theme.colors.primary + '20' }}
              className="w-12 h-12 rounded-full items-center justify-center mb-4">
              <FontAwesome
                name={feature.icon}
                size={24}
                color={theme.colors.primary}
              />
            </View>
            <Text variant="subtitle" color="text" className="mb-2" tx={`sections.features.items.${feature.id}.title`} />
            <Text variant="caption" className="text-gray-600" tx={`sections.features.items.${feature.id}.description`} />
          </View>
        ))}
      </View>
    </View>
  );
}; 