import { Image, Text, View, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { appInfo } from '@/constants/landing';
import { theme } from '@/constants/theme';
import { useLanguage } from '@/i18n/translate';

interface HeroProps {
  isMobile: boolean;
}

export default function Hero({ isMobile }: HeroProps) {
  const { t } = useLanguage();

  return (
    <View className="min-h-[500px] bg-white px-4 md:px-8 py-8 md:py-12">
      <View className="flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <View className={`${isMobile ? 'w-full' : 'flex-1'} items-center mb-8 md:mb-0`}>
          <View className={`relative ${isMobile ? 'w-[280px] h-[560px]' : 'w-[320px] h-[640px]'}`}>
            <View
              className="absolute"
              style={{
                top: '1.8%',
                left: '5.5%',
                right: '5.5%',
                bottom: '1.8%',
                borderRadius: 38,
                overflow: 'hidden',
                backgroundColor: '#000',
              }}>
              <Image
                source={require('@/assets/images/screenshot.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
            <Image
              source={require('@/assets/images/landing/iPhone.png')}
              style={{ width: '100%', height: '100%', position: 'absolute' }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View className={`${isMobile ? 'w-full' : 'flex-1'} ${!isMobile ? 'pl-8 lg:pl-12' : ''} space-y-6 md:space-y-8`}>
          <View className="flex-row items-center space-x-4 md:space-x-6">
            <View className="bg-gray-50 rounded-2xl shadow-md">
              <Image
                source={require('@/assets/images/icon.png')}
                style={{
                  width: isMobile ? 64 : 90,
                  height: isMobile ? 64 : 90,
                  borderRadius: 16
                }}
              />
            </View>
            <View>
              <Text className="text-2xl md:text-3xl font-bold mb-2" style={{ color: theme.colors.text }}>
                {appInfo.name}
              </Text>
              <Text className="text-lg md:text-xl text-gray-500">
                {t('app.price')}
              </Text>
            </View>
          </View>

          <Text className="text-base md:text-lg leading-relaxed" style={{ color: theme.colors.text }}>
            {t('app.description')}
          </Text>

          <View className="flex-row flex-wrap gap-4">
            {appInfo.store.ios.url && (
              <TouchableOpacity
                onPress={() => Linking.openURL(appInfo.store.ios.url)}
                style={{ width: 160 }}>
                <Image
                  source={require('@/assets/images/landing/app-store.png')}
                  style={{ width: '100%', height: isMobile ? 48 : 60 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {appInfo.store.android.url && (
              <TouchableOpacity
                onPress={() => Linking.openURL(appInfo.store.android.url)}
                style={{ width: 160 }}>
                <Image
                  source={require('@/assets/images/landing/google-play.png')}
                  style={{ width: '100%', height: isMobile ? 48 : 60 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
} 