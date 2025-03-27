import { Image, Linking, useWindowDimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { APP_STORE_URL, GOOGLE_PLAYSTORE_URL } from "@/app.config";

interface StoreButtonsProps {
  className?: string;
}

export function StoreButtons({ className = "" }: StoreButtonsProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View
      className={`flex-row flex-wrap justify-center gap-4 md:gap-6 ${className}`}
    >
      {APP_STORE_URL && (
        <TouchableOpacity
          onPress={() => Linking.openURL(APP_STORE_URL)}
          style={{ width: 160 }}
        >
          <Image
            source={require("@/assets/images/landing/app-store.png")}
            style={{ width: "100%", height: isMobile ? 48 : 54 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      {GOOGLE_PLAYSTORE_URL && (
        <TouchableOpacity
          onPress={() => Linking.openURL(GOOGLE_PLAYSTORE_URL)}
          style={{ width: 160 }}
        >
          <Image
            source={require("@/assets/images/landing/google-play.png")}
            style={{ width: "100%", height: isMobile ? 48 : 54 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
