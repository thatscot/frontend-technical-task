import "react-native-gesture-handler";
import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useLoadedAssets } from "./src/utils/use-loaded-resources";

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView>
        <Text>Hello world!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
