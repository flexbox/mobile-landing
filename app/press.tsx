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
      <View className="flex-1 px-2 sm:px-4 py-4 sm:py-8">
        <ScrollView
          className="flex-1 bg-white"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="items-center w-full">
            <View className="p-3 sm:p-4 md:p-6 w-full max-w-[1200px] md:w-3/4 lg:w-2/3 xl:w-1/2 overflow-hidden">
              <View className="w-full overflow-hidden">
                <BrandLogos />
              </View>
              <View className="w-full overflow-hidden">
                <BrandGuidelines />
              </View>
              <View className="w-full overflow-hidden">
                <BrandTypography />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
