import React from 'react';
import { View, Image, ScrollView, useWindowDimensions } from 'react-native';
import { screenshots } from '@/constants/landing';
import { useLanguage } from '@/i18n/translate';
import { Text } from './Text';

export const Screenshots = () => {
  const { width } = useWindowDimensions();
  const { t } = useLanguage();

  const isMobile = width < 768;

  return (
    <View className="py-12 md:py-16 px-4 bg-white">
      <Text variant="heading2" color="text" className="mb-8 md:mb-12 text-center">
        {t('sections.screenshots.title')}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row w-full"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          gap: isMobile ? 24 : 32,
          justifyContent: 'center'
        }}>
        {screenshots.assets.screenshots.map((screenshot, index) => (
          <View key={index} className={`relative ${isMobile ? 'w-[240px] h-[480px]' : 'w-[280px] h-[560px]'}`}>
            <Image
              source={require('@/assets/images/landing/iPhone.png')}
              style={{ width: '100%', height: '100%', position: 'absolute' }}
              resizeMode="contain"
            />
            <View
              className="absolute"
              style={{
                top: '1.8%',
                left: '5.5%',
                right: '5.5%',
                bottom: '1.8%',
                borderRadius: 38,
                overflow: 'hidden',
                backgroundColor: '#000'
              }}>
              <Image
                source={screenshot.image}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
            <Text variant="caption" className="text-center text-gray-600 mt-4 font-medium absolute -bottom-8 left-0 right-0">
              {t(`sections.screenshots.items.${screenshot.id}`)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}; 