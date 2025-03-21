import "@/i18n/i18n";

import React from "react";
import { View } from "react-native";

import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Screenshots } from "@/components/Screenshots";
import { SocialLinks } from "@/components/SocialLinks";
import { StoreButtons } from "@/components/StoreButtons";
import { useAppStore } from "@/context/AppStoreContext";
import { translate } from "@/i18n/translate";

export default function HomeScreen() {
  const { appStoreData } = useAppStore();

  return (
    <ScreenContainer
      frontMatter={{
        description: translate("app.description"),
        showGithubButton: true,
      }}
    >
      <Hero appStoreData={appStoreData} />
      <Features />
      <Screenshots appStoreData={appStoreData} />
      <View className="py-8 md:py-12 px-4 bg-gray-50">
        <StoreButtons />
      </View>
      <SocialLinks />
      <View className="h-16 md:h-0" />
    </ScreenContainer>
  );
}
