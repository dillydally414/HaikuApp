import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Finished } from "./src/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./src/types";

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
          name="Finished"
          component={Finished}
          options={{
            headerTitle: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}