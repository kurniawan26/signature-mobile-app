// In App.js in a new project

import React, { useCallback, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import { LogBox } from "react-native";
import { useFonts } from "expo-font";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createNativeStackNavigator();

import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";

import store from "./src/redux";

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
