import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";
import DetailScreen from "../Screen/DetailScreen";
import InvoiceScreen from "../Screen/InvoiceScreen";
import LoginScreen from "../Screen/LoginScreen";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const auth = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {auth ? (
          <Stack.Group>
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
          </Stack.Group>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
