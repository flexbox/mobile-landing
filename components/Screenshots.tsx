import React from "react";
import { Image, ScrollView, View } from "react-native";

import { Text } from "./Text";

import { screenshots } from "@/constants/landing";
import { AppStoreData } from "@/context/AppStoreContext";

interface ScreenshotsProps {
  appStoreData: AppStoreData | null;
}

export const Screenshots = ({ appStoreData }: ScreenshotsProps) => {
  const screenshotsToShow = appStoreData?.screenshotUrls?.length
    ? appStoreData.screenshotUrls
    : [screenshots.assets.screenshots[0]];

  return (
    <View className="py-12 md:py-16 px-4 bg-white">
      <Text
        variant="heading2"
        color="text"
        className="mb-8 md:mb-12 text-center"
        tx="sections.screenshots.title"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row w-full gap-6 md:gap-8"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          justifyContent: "center",
        }}
      >
        {screenshotsToShow.map((screenshot, index) => (
          <View
            key={index}
            className="relative w-[240px] h-[480px] md:w-[280px] md:h-[560px]"
          >
            <Image
              source={require("@/assets/images/landing/iPhone.png")}
              style={{ width: "100%", height: "100%", position: "absolute" }}
              resizeMode="contain"
            />
            <View
              className="absolute"
              style={{
                top: "1.8%",
                left: "5.5%",
                right: "5.5%",
                bottom: "1.8%",
                borderRadius: 38,
                overflow: "hidden",
                backgroundColor: "#000",
              }}
            >
              <Image
                source={
                  typeof screenshot === "string"
                    ? { uri: screenshot }
                    : screenshot.image
                }
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
            {typeof screenshot !== "string" && (
              <Text
                variant="caption"
                className="text-center text-gray-600 mt-4 font-medium absolute -bottom-8 left-0 right-0"
                tx={`sections.screenshots.items.${screenshot.id}`}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
