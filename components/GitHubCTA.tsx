import { Text, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useLanguage } from '@/i18n/translate';
import { theme } from '@/constants/theme';

interface GitHubCTAProps {
  isMobile: boolean;
}

export default function GitHubCTA({ isMobile }: GitHubCTAProps) {
  const { t } = useLanguage();

  return (
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
  );
} 