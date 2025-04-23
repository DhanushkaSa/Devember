import { Stack } from "expo-router";
import { Inter_400Regular, Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    Inter: Inter_900Black,
    InterSemi: Inter_400Regular,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold
  });

  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    if (fontLoaded || error) {
      SplashScreen.hideAsync()
    }
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <Stack>
       
        <Stack.Screen name="index" options={{ title: "DEVember" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}