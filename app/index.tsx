import { Image, Text, Linking, ScrollView, View, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { appInfo, features, screenshots, socials, pressKit, changelog } from '@/constants/landing';
import { theme } from '@/constants/theme';
import { router } from 'expo-router';
import React from 'react';
import { useLanguage } from '@/i18n/translate';
import { Text as CustomText } from '@/components/Text';
import '../i18n/i18n';

export default function HomeScreen() {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const { width } = useWindowDimensions();
  const { t } = useLanguage();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const handlePressKit = () => {
    if (pressKit.enabled) {
      Linking.openURL(pressKit.url);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const yOffset = sectionId === 'features' ? 600 : 1800;
    scrollViewRef.current?.scrollTo({ y: yOffset, animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollViewRef} className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
        <View className="w-full bg-white border-b border-gray-100 px-4 md:px-8 py-4 flex-col md:flex-row justify-between items-center">
          <View className="flex-row items-center space-x-3 mb-4 md:mb-0">
            <View className="shadow-md rounded-lg">
              <Image
                source={require('@/assets/images/icon.png')}
                style={{ width: 32, height: 32, borderRadius: 8 }}
              />
            </View>
            <CustomText className="text-lg font-bold" color="text">
              {appInfo.name}
            </CustomText>
          </View>
          <View className="flex-row space-x-4 md:space-x-8">
            <TouchableOpacity onPress={() => scrollToSection('features')}>
              <CustomText tx="features" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToSection('screenshots')}>
              <CustomText tx="screenshots" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/privacy')}>
              <CustomText tx="privacy" />
            </TouchableOpacity>
            {changelog.enabled && (
              <TouchableOpacity onPress={() => router.push('/changelog')}>
                <CustomText tx="changelog" />
              </TouchableOpacity>
            )}
            {pressKit.enabled && (
              <TouchableOpacity onPress={handlePressKit}>
                <CustomText tx="pressKit" />
              </TouchableOpacity>
            )}
          </View>
        </View>

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

        <View className="py-12 md:py-16 px-4 bg-white">
          <Text className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center" style={{ color: theme.colors.text }}>
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
                <Text className="text-center text-sm text-gray-600 mt-4 font-medium absolute -bottom-8 left-0 right-0">
                  {t(`sections.screenshots.items.${screenshot.id}`)}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="py-8 md:py-12 px-4 bg-gray-50">
          <View className="flex-row flex-wrap justify-center gap-4 md:gap-6">
            {appInfo.store.ios.url && (
              <TouchableOpacity
                onPress={() => Linking.openURL(appInfo.store.ios.url)}
                style={{ width: 160 }}>
                <Image
                  source={require('@/assets/images/landing/app-store.png')}
                  style={{ width: '100%', height: isMobile ? 48 : 54 }}
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
                  style={{ width: '100%', height: isMobile ? 48 : 54 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {
          socials.length > 0 && (
            <View className="py-8 md:py-12 px-4 bg-white">
              <View className="flex-row flex-wrap justify-center gap-6 md:gap-8">
                {socials.map((social, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => Linking.openURL(social.url)}
                    className="items-center">
                    <FontAwesome
                      name={social.icon}
                      size={isMobile ? 24 : 28}
                      color="#000000"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )
        }
        <View className="h-16 md:h-0" />
      </ScrollView>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/flexbox/expo-app-landing-page')}
        style={{
          position: 'fixed',
          bottom: isMobile ? 16 : 24,
          left: isMobile ? 16 : 24,
          backgroundColor: theme.colors.primary,
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 25,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          zIndex: 1000,
        }}>
        <FontAwesome name="github" size={16} color="white" style={{ marginRight: 6 }} />
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>
          {t('cta.buildYourOwn')}
        </Text>
      </TouchableOpacity>
    </View>
  );
} 