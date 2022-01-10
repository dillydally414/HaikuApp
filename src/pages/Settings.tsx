import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { ReactElement, useState } from "react";
import { Alert, Text, TextInput } from "react-native";
import { RootStackParamList } from "../types";
import styled from "styled-components/native";

const Password = styled(TextInput)`
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin: 20% 0;
  width: 40%;
`;

const Settings = ({
  navigation,
}: {
  navigation: NativeStackScreenProps<RootStackParamList, 'Settings'>,
}): ReactElement => {
  const [signedIn, setSignedIn] = useState(false);
  const [password, setPassword] = useState('');
  const secretPassword = 'pass';

  const handleSignInAttempt = () => {
    if (password === secretPassword) {
      setSignedIn(true);
    } else {
      setPassword('');
      Alert.alert('Incorrect password', 'Try again');
    }
  }

  return !signedIn ? (
    <Password
      placeholder="Enter password here..."
      onChangeText={(text) => setPassword(text)}
      value={password}
      onSubmitEditing={() => handleSignInAttempt()}
      returnKeyType="go"
    />
  ) : (
    <Text>
      You got access to the settings page! Congrats!
    </Text>
  );
};

export default Settings;