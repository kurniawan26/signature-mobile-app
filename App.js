// In App.js in a new project

import React, { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screen/HomeScreen";
import DetailScreen from "./src/Screen/DetailScreen";
import { PaperProvider } from "react-native-paper";

import { LogBox } from "react-native";
import InvoiceScreen from "./src/Screen/InvoiceScreen";
import { useFonts } from "expo-font";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createNativeStackNavigator();

import * as SplashScreen from "expo-splash-screen";

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
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Detail"
            options={{
              headerShown: false,
            }}
            component={DetailScreen}
          />
          <Stack.Screen
            name="Invoice"
            options={{
              headerShown: false,
            }}
            component={InvoiceScreen}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
