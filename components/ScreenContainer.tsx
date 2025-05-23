import React, { useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";
import Head from "expo-router/head";

import { APP_NAME, LANDING_PAGE_URL } from "@/app.config";
import { FloatingButton } from "@/components/FloatingButton";
import { useScroll } from "@/context/ScrollContext";

interface FrontMatter {
  title?: string;
  description?: string;
  image?: string;
  showGithubButton?: boolean;
}

interface ScreenContainerProps {
  children: React.ReactNode;
  frontMatter?: FrontMatter;
}

export function ScreenContainer({
  children,
  frontMatter,
}: ScreenContainerProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const { setScrollViewRef } = useScroll();

  useEffect(() => {
    setScrollViewRef(scrollViewRef.current);
  }, [setScrollViewRef]);

  const title = frontMatter?.title || APP_NAME;
  const description = frontMatter?.description || "";
  const image = frontMatter?.image || "/@og-image.png";

  return (
    <View style={{ flex: 1 }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={LANDING_PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="icon" href="/favicon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ScrollView
        ref={scrollViewRef}
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      <FloatingButton
        url="https://github.com/flexbox/mobile-landing"
        icon="github"
        textKey="cta.buildYourOwn"
      />
    </View>
  );
}
