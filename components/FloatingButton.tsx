import { Linking, Text as RNText } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import { theme } from "@/constants/theme";
import { translate } from "@/i18n/translate";

interface FloatingButtonProps {
  url: string;
  icon: keyof typeof FontAwesome.glyphMap;
  textKey: string;
}

export function FloatingButton({
  url = "https://github.com/flexbox/mobile-landing",
  icon = "github",
  textKey = "cta.buildYourOwn",
}: FloatingButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(url)}
      style={{
        position: "absolute",
        bottom: 16,
        left: 16,
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: theme.colors.white,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 1000,
      }}
    >
      <FontAwesome
        name={icon}
        size={16}
        color={theme.colors.white}
        style={{ marginRight: 6 }}
      />
      <RNText
        style={{ color: theme.colors.white, fontWeight: "600", fontSize: 14 }}
      >
        {translate(textKey)}
      </RNText>
    </TouchableOpacity>
  );
}
