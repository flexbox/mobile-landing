import { View, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { socials } from '@/constants/landing';

interface SocialLinksProps {
  isMobile: boolean;
}

export default function SocialLinks({ isMobile }: SocialLinksProps) {
  if (socials.length === 0) return null;

  return (
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
  );
} 