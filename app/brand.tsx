import React from "react";
import { ScrollView, View } from "react-native";

import { BrandColors } from "@/components/brand/BrandColors";
import { BrandGuidelines } from "@/components/brand/BrandGuidelines";
import { BrandLogos } from "@/components/brand/BrandLogos";
import { BrandTypography } from "@/components/brand/BrandTypography";
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
              <BrandColors />
              <BrandTypography />
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
