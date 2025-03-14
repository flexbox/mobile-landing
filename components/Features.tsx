import React from 'react';
import { View, Text as RNText, useWindowDimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { features } from '@/constants/landing';
import { theme } from '@/constants/theme';
import { useLanguage } from '@/i18n/translate';
import { Text } from './Text';

export const Features = () => {
  const { width } = useWindowDimensions();
  const { t } = useLanguage();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return (
    <View className="py-8 md:py-12 px-4 bg-gray-50">
      <Text variant="heading2" color="text" className="mb-8 md:mb-12 text-center">
        {t('sections.features.title')}
      </Text>
      <View className="flex-row flex-wrap justify-center md:justify-between gap-4 md:gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <View
            key={index}
            className={`${isMobile
              ? 'w-full'
              : isTablet
                ? 'w-[calc(50%-12px)]'
                : 'w-[calc(33.33%-16px)]'
              } p-6 rounded-xl bg-white shadow-sm`}
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
            <Text variant="subtitle" color="text" className="mb-2">
              {t(`sections.features.items.${feature.id}.title`)}
            </Text>
            <Text variant="caption" className="text-gray-600">
              {t(`sections.features.items.${feature.id}.description`)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}; 