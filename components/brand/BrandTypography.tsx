import { ScrollView, View } from "react-native";

import { Text } from "@/components/Text";
import { theme } from "@/constants/theme";

export function BrandTypography() {
  return (
    <View className="my-12">
      <Text
        tx="brand.typography.title"
        variant="heading2"
        className="mb-8"
      />
      <ScrollView>
        {Object.entries(theme.typography).map(([key, style]) => (
          <View
            key={key}
            className="mb-6"
          >
            <Text
              className="text-gray-900 my-2"
              style={{ fontSize: style.fontSize, fontWeight: style.fontWeight }}
              tx={`brand.components.typography.items.${key}.name`}
            />
            <Text
              tx={`brand.components.typography.items.${key}.description`}
              variant="caption"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
