import { Image, View, Animated, Easing, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import React from 'react';
import { Text as CustomText } from '@/components/Text';
import { appInfo, pressKit, changelog } from '@/constants/landing';

interface HeaderProps {
  isMobile: boolean;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ isMobile, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuAnimation = React.useRef(new Animated.Value(0)).current;

  const handlePressKit = () => {
    if (pressKit.enabled) {
      Linking.openURL(pressKit.url);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    Animated.timing(menuAnimation, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  return (
    <View className="w-full bg-white border-b border-gray-100 px-4 md:px-8 py-4 flex-col md:flex-row justify-between items-center relative">
      <View className="flex-row items-center justify-between w-full md:w-auto">
        <View className="flex-row items-center space-x-3">
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
        {isMobile && (
          <TouchableOpacity onPress={toggleMenu} className="p-2">
            <Animated.View
              style={{
                transform: [
                  {
                    rotate: menuAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '45deg']
                    })
                  }
                ]
              }}>
              <View className="w-6 h-0.5 bg-gray-800 mb-1.5" style={{
                transform: [{
                  translateY: isMenuOpen ? 8 : 0
                }]
              }} />
              <View className="w-6 h-0.5 bg-gray-800 mb-1.5" style={{
                opacity: isMenuOpen ? 0 : 1
              }} />
              <View className="w-6 h-0.5 bg-gray-800" style={{
                transform: [{
                  translateY: isMenuOpen ? -8 : 0
                }, {
                  rotate: isMenuOpen ? '-90deg' : '0deg'
                }]
              }} />
            </Animated.View>
          </TouchableOpacity>
        )}
      </View>

      {isMobile ? (
        <Animated.View
          className="w-full bg-white absolute top-full left-0 border-b border-gray-100 z-50"
          style={{
            maxHeight: menuAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 300],
            }),
            opacity: menuAnimation,
            overflow: 'hidden',
            width: '100%',
            left: 0,
            right: 0,
          }}>
          <View className="flex-col p-4 space-y-4 w-full">
            <TouchableOpacity
              onPress={() => { scrollToSection('features'); toggleMenu(); }}
              className="w-full flex-row justify-start">
              <CustomText tx="features" style={{ textAlign: 'left' }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { scrollToSection('screenshots'); toggleMenu(); }}
              className="w-full flex-row justify-start">
              <CustomText tx="screenshots" style={{ textAlign: 'left' }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { router.push('/privacy'); toggleMenu(); }}
              className="w-full flex-row justify-start">
              <CustomText tx="privacy" style={{ textAlign: 'left' }} />
            </TouchableOpacity>
            {changelog.enabled && (
              <TouchableOpacity
                onPress={() => { router.push('/changelog'); toggleMenu(); }}
                className="w-full flex-row justify-start">
                <CustomText tx="changelog" style={{ textAlign: 'left' }} />
              </TouchableOpacity>
            )}
            {pressKit.enabled && (
              <TouchableOpacity
                onPress={() => { handlePressKit(); toggleMenu(); }}
                className="w-full flex-row justify-start">
                <CustomText tx="pressKit" style={{ textAlign: 'left' }} />
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
      ) : (
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
      )}
    </View>
  );
} 