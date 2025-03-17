import React, { useEffect } from 'react';
import { View, Image, Linking, useWindowDimensions, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { appInfo } from '@/constants/landing';
import { Text } from './Text';

export const Hero = () => {
  const { width } = useWindowDimensions();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const isMobile = width < 768;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View className="min-h-[500px] bg-white px-4 md:px-8 py-8 md:py-12">
      <View className="flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <View className="w-full md:flex-1 items-center mb-8 md:mb-0">
          <View className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
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
              <Animated.Image
                source={require('@/assets/images/screenshot.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  opacity: fadeAnim
                }}
                resizeMode="cover"
              />
            </View>
            <Image
              source={require('@/assets/images/landing/iPhone.png')}
              defaultSource={require('@/assets/images/landing/iPhone.png')}
              style={{ width: '100%', height: '100%', position: 'absolute' }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="w-full md:flex-1 md:pl-8 lg:pl-12 space-y-6 md:space-y-8">
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
              <Text variant="heading1" color="text" className="mb-2">
                {appInfo.name}
              </Text>
              <Text variant="subtitle" className="text-gray-500" tx="app.price" />
            </View>
          </View>

          <Text variant="body" color="text" className="text-base md:text-lg leading-relaxed" tx="app.description" />
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
}; 