import React, { useEffect } from "react";
import { Platform, View } from "react-native";
import { captureRef } from "react-native-view-shot";

import { Hero } from "@/components/Hero";
import { theme } from "@/constants/theme";
import { useAppStore } from "@/context/AppStoreContext";

export function GenerateOgImage() {
  const viewShotRef = React.useRef<View>(null);
  const { appStoreData } = useAppStore();

  useEffect(() => {
    const timer = setTimeout(captureHero, 2000);
    return () => clearTimeout(timer);
  }, []);

  async function downloadFile(base64Data: string, filename: string) {
    try {
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/png" });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      console.log(
        "✅ Image downloaded successfully! Put it on the `./assets` folder.",
      );
    } catch (error) {
      console.error("❌ Error downloading the image:", error);
      throw error;
    }
  }

  async function captureHero() {
    try {
      if (viewShotRef.current) {
        const uri = await captureRef(viewShotRef, {
          format: "png",
          quality: 1,
          width: 1200,
          height: 630,
          result: "base64",
        });

        if (Platform.OS === "web") {
          await downloadFile(uri, "@og-image.png");
          window.document.title = "OG Image Generated Successfully!";
        }
      }
    } catch (error) {
      console.error("Erreur lors de la capture:", error);
      if (Platform.OS === "web") {
        window.document.title = "❌ Error Generating OG Image";
      }
    }
  }

  return (
    <View
      style={{ width: 1200, height: 630, backgroundColor: theme.colors.white }}
    >
      <View ref={viewShotRef} style={{ flex: 1 }}>
        <Hero appStoreData={appStoreData} />
      </View>
    </View>
  );
}
