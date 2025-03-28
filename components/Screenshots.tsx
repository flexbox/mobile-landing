import { Image, ScrollView, View } from "react-native";

import { Text } from "./Text";

import { iPadScreenshots, screenshots } from "@/constants/landing";
import { AppStoreData } from "@/context/AppStoreContext";

interface ScreenshotsProps {
  appStoreData?: AppStoreData | null;
}

export function Screenshots({ appStoreData }: ScreenshotsProps) {
  const screenshotsToShow = appStoreData?.screenshotUrls?.length
    ? appStoreData.screenshotUrls
    : [screenshots.assets.screenshots];

  const ipadScreenshotsToShow = appStoreData?.ipadScreenshotUrls?.length
    ? appStoreData.ipadScreenshotUrls
    : [iPadScreenshots];

  return (
    <View className="py-12 md:py-16 px-4 bg-white">
      <Text
        variant="heading2"
        as="h2"
        color="text"
        className="mb-8 md:mb-12 text-center"
        tx="sections.screenshots.title"
      />

      {/* iPhone Screenshots */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row w-full gap-6 md:gap-8 mb-12"
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
                backgroundColor: "#000000",
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
                className="text-center text-slate-600 mt-4 font-medium absolute -bottom-8 left-0 right-0"
                tx={`sections.screenshots.items.${screenshot.id}`}
              />
            )}
          </View>
        ))}
      </ScrollView>

      {/* iPad Screenshots */}
      {ipadScreenshotsToShow.length > 0 && (
        <>
          <Text variant="heading3" color="text" className="mb-8 text-center">
            iPad Screenshots
          </Text>
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
            {ipadScreenshotsToShow.map((screenshot, index) => (
              <View
                key={index}
                className="relative w-[320px] h-[420px] md:w-[400px] md:h-[520px]"
              >
                <Image
                  source={require("@/assets/images/landing/iPad.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                  resizeMode="contain"
                />
                <View
                  className="absolute"
                  style={{
                    top: "2%",
                    left: "5%",
                    right: "5%",
                    bottom: "2%",
                    borderRadius: 18,
                    overflow: "hidden",
                    backgroundColor: "#000",
                  }}
                >
                  <Image
                    source={{ uri: screenshot }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
}
