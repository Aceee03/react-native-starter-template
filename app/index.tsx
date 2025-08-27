import {
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/space-grotesk";
import { Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Text, TextInput, View } from "react-native";

export default function App() {
  // Load fonts
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_700Bold,
  });

  useEffect(() => {
    // Keep the splash screen visible while we load resources
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn("Failed to prevent auto hide of splash screen:", e);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    // Hide the splash screen once fonts are loaded
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch((e) =>
        console.warn("Failed to hide splash screen:", e)
      );
    }
  }, [fontsLoaded]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text>Hello Tow-er 🚗</Text>
      <Text className="font-medium">This is Bold Space Grotesk</Text>
      <TextInput className="border-2" placeholder="Type here" />
    </View>
  );
}
