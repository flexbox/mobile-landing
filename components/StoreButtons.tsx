import React from 'react';
import { View, Image, Linking, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { appInfo } from '@/constants/landing';

interface StoreButtonsProps {
  className?: string;
}

export const StoreButtons = ({ className = '' }: StoreButtonsProps) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View className={`flex-row flex-wrap justify-center gap-4 md:gap-6 ${className}`}>
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
  );
}; 