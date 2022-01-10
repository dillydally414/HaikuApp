import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { ReactElement, useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../types";
import styled from "styled-components/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Password = styled(TextInput)`
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin: 20% 0;
  width: 40%;
`;

const SettingsLabel = styled(Text)`
  align-self: center;
  margin-top: 10%;
`;

const PasswordRow = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

const NewPassword = styled(Password)`
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin: 5% 0;
  width: 40%;
`;

const SubmitNewPassword = styled(TouchableOpacity)`
  align-self: center;
  background-color: #0088FF;
  border-radius: 10px;
  margin-left: 10%;
  padding: 1.5% 3%;
`;

const SubmitText = styled(Text)`
  align-self: center;
  color: white;
`;

const Settings = ({
  navigation,
}: {
  navigation: NativeStackScreenProps<RootStackParamList, 'Settings'>,
}): ReactElement => {
  const [signedIn, setSignedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [secretPassword, setSecretPassword] = useState('');

  const handleSignInAttempt = () => {
    if (password === secretPassword) {
      setSignedIn(true);
    } else {
      setPassword('');
      Alert.alert('Incorrect password', 'Try again');
    }
  }

  const changePassword = (password: string) => {
    AsyncStorage.setItem('password', password);
    Alert.alert('Password changed successfully', `New password: '${password}'`);
    setNewPassword('');
  }

  useEffect(() => {
    const getOldPass = async () => {
      const pass = await AsyncStorage.getItem('password');
      pass ? setSecretPassword(pass) : handleSignInAttempt();
    }
    getOldPass();
  }, []);

  return !signedIn ? (
    <Password
      placeholder="Enter password here..."
      onChangeText={(text) => setPassword(text)}
      value={password}
      onSubmitEditing={() => handleSignInAttempt()}
      returnKeyType="go"
    />
  ) : (
    <ScrollView>
      <SettingsLabel>
        Set password:
      </SettingsLabel>
      <PasswordRow>
        <NewPassword
          placeholder="Enter new password here..."
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
          returnKeyType="done"
        />
        <SubmitNewPassword
          onPress={() => changePassword(newPassword)}
        >
          <SubmitText>
            Submit
          </SubmitText>
        </SubmitNewPassword>
      </PasswordRow>
    </ScrollView>
  );
};

export default Settings;