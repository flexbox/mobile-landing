import { ScrollView, View } from "react-native";

import { BrandGuidelines } from "@/components/BrandGuidelines";
import { BrandLogos } from "@/components/BrandLogos";
import { BrandTypography } from "@/components/BrandTypography";
import { ScreenContainer } from "@/components/ScreenContainer";
import { translate } from "@/i18n/translate";

export default function BrandScreen() {
  return (
    <ScreenContainer
      frontMatter={{
        title: translate("brand.hero.title"),
        description: translate("brand.hero.description"),
      }}
    >
      <View className="px-4 py-8">
        <ScrollView
          className="flex-1 bg-white"
          showsVerticalScrollIndicator={false}
        >
          <View className="items-center w-full">
            <View className="p-6 max-w-[1200px] w-full md:w-1/2">
              <BrandLogos />
              <BrandGuidelines />
              <BrandTypography />
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
