import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { features } from '@/constants/landing';
import { theme } from '@/constants/theme';
import { useLanguage } from '@/i18n/translate';

interface FeaturesProps {
  isMobile: boolean;
  isTablet: boolean;
}

export default function Features({ isMobile, isTablet }: FeaturesProps) {
  const { t } = useLanguage();

  return (
    <View className="py-8 md:py-12 px-4 bg-gray-50">
      <Text className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center" style={{ color: theme.colors.text }}>
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
            <Text className="text-lg font-semibold mb-2" style={{ color: theme.colors.text }}>
              {t(`sections.features.items.${feature.id}.title`)}
            </Text>
            <Text className="text-sm text-gray-600">
              {t(`sections.features.items.${feature.id}.description`)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
} 