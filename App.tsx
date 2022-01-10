import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./src/types";
import Settings from "./src/pages/Settings";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}