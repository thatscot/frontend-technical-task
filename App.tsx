import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLoadedAssets } from "./src/utils/use-loaded-resources";
import { FindADog } from "./src/components/FindADog";
import { DogProvider } from "./src/utils/DogContext";
import { DogScroller } from "./src/components/DogScroller";
import { Nav } from "./src/components/Nav";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const [showFindADog, setShowFindADog] = useState(true);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <DogProvider>
      <SafeAreaProvider>
        <StatusBar />
        <SafeAreaView>
          <Nav setShowFindADog={setShowFindADog} />
          {showFindADog && <FindADog />}
          {!showFindADog && <DogScroller />}
        </SafeAreaView>
      </SafeAreaProvider>
    </DogProvider>
  );
}
