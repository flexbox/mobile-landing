import React from 'react';
import { Text as RNText, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { translate } from '@/i18n/translate';
import { theme } from '@/constants/theme';
interface FloatingButtonProps {
  url: string;
  icon: keyof typeof FontAwesome.glyphMap;
  textKey: string;
}

export const FloatingButton = ({
  url = 'https://github.com/flexbox/expo-app-landing-page',
  icon = 'github',
  textKey = 'cta.buildYourOwn'
}: FloatingButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(url)}
      style={{
        position: 'absolute',
        bottom: 16,
        left: 16,
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
      <FontAwesome name={icon} size={16} color="white" style={{ marginRight: 6 }} />
      <RNText style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>
        {translate(textKey)}
      </RNText>
    </TouchableOpacity>
  );
}; 