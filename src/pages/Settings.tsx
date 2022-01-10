import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { ReactElement } from "react";
import { Text } from "react-native";
import { RootStackParamList } from "../types";

const Settings = ({
  navigation,
}: {
  navigation: NativeStackScreenProps<RootStackParamList, 'Settings'>,
}): ReactElement => {
  return (
    <Text>
      Empty Settings Page
    </Text>
  );
};

export default Settings;