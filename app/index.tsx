import { Image, Text, Linking, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { appInfo, features, screenshots, socials, pressKit } from '@/constants/landing';
import { theme } from '@/constants/theme';
import { router } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  const scrollViewRef = React.useRef<ScrollView>(null);

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
        <View className="w-full bg-white border-b border-gray-100 px-8 py-4 flex-row justify-between items-center">
          <View className="flex-row items-center space-x-3">
            <View className="shadow-md rounded-lg">
              <Image
                source={require('@/assets/images/icon.png')}
                style={{ width: 32, height: 32, borderRadius: 8 }}
              />
            </View>
            <Text className="text-lg font-bold" style={{ color: theme.colors.text }}>
              {appInfo.name}
            </Text>
          </View>
          <View className="flex-row space-x-8">
            <TouchableOpacity onPress={() => scrollToSection('features')}>
              <Text style={{ color: theme.colors.secondary }} className="text-sm font-medium">Features</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToSection('screenshots')}>
              <Text style={{ color: theme.colors.secondary }} className="text-sm font-medium">Screenshots</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/privacy')}>
              <Text style={{ color: theme.colors.secondary }} className="text-sm font-medium">Privacy</Text>
            </TouchableOpacity>
            {pressKit.enabled && (
              <TouchableOpacity onPress={handlePressKit}>
                <Text style={{ color: theme.colors.secondary }} className="text-sm font-medium">Press Kit</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View className="min-h-[500px] bg-white px-8 py-12">
          <View className="flex-row items-center justify-between max-w-6xl mx-auto">
            <View className="flex-1 items-center">
              <View className="relative w-[320px] h-[640px]">
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
                  style={{ width: 320, height: 640, position: 'absolute' }}
                  resizeMode="contain"
                />
              </View>
            </View>

            <View className="flex-1 pl-12 space-y-8">
              <View className="flex-row items-center space-x-6">
                <View className="bg-gray-50 rounded-2xl shadow-md">
                  <Image
                    source={require('@/assets/images/icon.png')}
                    style={{ width: 90, height: 90, borderRadius: 16 }}
                  />
                </View>
                <View>
                  <Text className="text-3xl font-bold mb-2" style={{ color: theme.colors.text }}>
                    {appInfo.name}
                  </Text>
                  <Text className="text-xl text-gray-500">
                    {appInfo.price}
                  </Text>
                </View>
              </View>

              <Text className="text-lg leading-relaxed" style={{ color: theme.colors.text }}>
                {appInfo.description}
              </Text>

              <View className="flex-row space-x-4">
                {appInfo.store.ios.url && (
                  <TouchableOpacity
                    style={{ backgroundColor: 'transparent' }}
                    className="w-[200px]"
                    onPress={() => Linking.openURL(appInfo.store.ios.url)}>
                    <Image
                      source={require('@/assets/images/landing/app-store.png')}
                      alt='App Store logo'
                      style={{ width: 200, height: 60 }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                )}
                {appInfo.store.android.url && (
                  <TouchableOpacity
                    style={{ backgroundColor: 'transparent' }}
                    className="w-[200px]"
                    onPress={() => Linking.openURL(appInfo.store.android.url)}>
                    <Image
                      source={require('@/assets/images/landing/google-play.png')}
                      alt='Google Play logo'
                      style={{ width: 200, height: 60 }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>

        <View className="py-12 px-4 bg-gray-50">
          <Text className="text-2xl font-bold mb-12 text-center" style={{ color: theme.colors.text }}>
            Features
          </Text>
          <View className="flex-row flex-wrap justify-between gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <View key={index} className="w-[calc(33.33%-16px)] p-6 rounded-xl bg-white shadow-sm">
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
                  {feature.title}
                </Text>
                <Text className="text-sm text-gray-600">
                  {feature.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View className="py-16 px-4 bg-white">
          <Text className="text-2xl font-bold mb-12 text-center" style={{ color: theme.colors.text }}>
            Screenshots
          </Text>
          <View className="flex-row justify-center gap-8">
            {screenshots.assets.screenshots.map((screenshot, index) => (
              <View key={index} className="relative w-[280px] h-[560px]">
                <Image
                  source={require('@/assets/images/landing/iPhone.png')}
                  alt='iPhone frame'
                  style={{ width: 280, height: 560, position: 'absolute' }}
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
                    alt={screenshot.title}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                  />
                </View>
                <Text className="text-center text-sm text-gray-600 mt-4 font-medium absolute -bottom-8 left-0 right-0">
                  {screenshot.title}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View className="py-12 px-4 bg-gray-50">
          <View className="flex-row justify-center space-x-6">
            {appInfo.store.ios.url && (
              <TouchableOpacity
                style={{ backgroundColor: 'transparent' }}
                className="w-[180px]"
                onPress={() => Linking.openURL(appInfo.store.ios.url)}>
                <Image
                  source={require('@/assets/images/landing/app-store.png')}
                  alt='App Store logo'
                  style={{ width: 180, height: 54 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {appInfo.store.android.url && (
              <TouchableOpacity
                style={{ backgroundColor: 'transparent' }}
                className="w-[180px]"
                onPress={() => Linking.openURL(appInfo.store.android.url)}>
                <Image
                  source={require('@/assets/images/landing/google-play.png')}
                  style={{ width: 180, height: 54 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {socials.length > 0 && (
          <View className="py-12 px-4 bg-white">
            <View className="flex-row justify-center space-x-8">
              {socials.map((social, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => Linking.openURL(social.url)}
                  className="items-center">
                  <FontAwesome
                    name={social.icon}
                    size={28}
                    color="#000000"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/flexbox/expo-app-landing-page')}
        style={{
          position: 'fixed',
          bottom: 24,
          left: 24,
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
          Build your own landing page
        </Text>
      </TouchableOpacity>
    </View>
  );
} 