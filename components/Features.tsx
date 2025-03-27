import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Text } from "@/components/Text";
import { theme } from "@/constants/theme";
import { translate } from "@/i18n/translate";

interface FeatureProps {
  itemKey: string;
  className?: string;
}

export function FeatureItem({ itemKey }: FeatureProps) {
  const title = translate(`sections.features.items.${itemKey}.title`);
  const description = translate(
    `sections.features.items.${itemKey}.description`,
  );
  const icon = translate(`sections.features.items.${itemKey}.icon`);

  return (
    <View className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] p-6 rounded-xl bg-white shadow-sm">
      <View
        style={{ backgroundColor: theme.colors.primary + "20" }}
        className="w-12 h-12 rounded-full items-center justify-center mb-4"
      >
        <FontAwesome
          name={icon as keyof typeof FontAwesome.glyphMap}
          size={24}
          color={theme.colors.primary}
        />
      </View>
      <Text variant="subtitle" color="text" className="mb-2">
        {title}
      </Text>
      <Text variant="body" className="text-slate-400">
        {description}
      </Text>
    </View>
  );
}

interface FeatureListProps {
  items: string[];
}

export function FeatureList({ items }: FeatureListProps) {
  return (
    <View className="flex-row flex-wrap justify-center md:justify-between gap-4 md:gap-6 max-w-6xl mx-auto">
      {items.map((item) => (
        <FeatureItem key={item} itemKey={item} />
      ))}
    </View>
  );
}

export function Features() {
  const featureItems = [
    "feature1",
    "feature2",
    "feature3",
    "feature4",
    "feature5",
    "feature6",
  ];

  return (
    <View className="py-8 md:py-32 px-4 bg-slate-50">
      <Text
        variant="heading2"
        as="h2"
        color="text"
        className="mb-8 md:mb-12 text-center"
        tx="sections.features.title"
      />

      <FeatureList items={featureItems} />
    </View>
  );
}
