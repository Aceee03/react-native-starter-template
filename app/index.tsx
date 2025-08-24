import React from "react";
import { Text, TextInput, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";

export default function App() {
  // Load fonts
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text>Hello Tow-er 🚗</Text>
      <Text className="font-medium">
        This is Bold Space Grotesk
      </Text>
      <TextInput
      className="border-2"
      placeholder="Type here..." />
    </View>
  );
}
