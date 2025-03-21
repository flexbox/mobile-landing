import { registerRootComponent } from "expo";
import * as SplashScreen from "expo-splash-screen";

import { GenerateOgImage } from "./generateOgImage";
SplashScreen.preventAutoHideAsync().then(() => SplashScreen.hideAsync());
registerRootComponent(GenerateOgImage);
