import { registerRootComponent } from 'expo';
import { GenerateOgImage } from './generateOgImage';

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync().then(() => SplashScreen.hideAsync());
registerRootComponent(GenerateOgImage);
