// In App.js in a new project

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screen/HomeScreen";
import DetailScreen from "./src/Screen/DetailScreen";
import { PaperProvider } from "react-native-paper";

import { LogBox } from "react-native";
import InvoiceScreen from "./src/Screen/InvoiceScreen";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createNativeStackNavigator();

function App() {
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
