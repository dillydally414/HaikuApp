import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { ReactElement, useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../types";
import styled from "styled-components/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PasswordInput = styled(TextInput)`
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin: 20% 0;
  width: 40%;
`;

const SettingLabel = styled(Text)`
  align-self: center;
  margin-top: 10%;
`;

const SettingRow = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

const SettingInput = styled(PasswordInput)`
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin: 5% 0;
  width: 40%;
`;

const SettingSubmit = styled(TouchableOpacity)`
  align-self: center;
  background-color: #0088FF;
  border-radius: 10px;
  margin-left: 10%;
  padding: 1.5% 3%;
`;

const SettingSubmitText = styled(Text)`
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
  const [badWord, setBadWord] = useState('');
  const [okayWord, setOkayWord] = useState('');

  const handleSignInAttempt = () => {
    if (password === secretPassword) {
      setSignedIn(true);
    } else {
      setPassword('');
      Alert.alert('Incorrect password', 'Try again');
    }
  };

  const changePassword = () => {
    AsyncStorage.setItem('password', newPassword);
    Alert.alert('Password changed successfully', `New password: '${newPassword}'`);
    setNewPassword('');
  };

  const addBadWord = () => {
    if (badWord === '') return;
    AsyncStorage.getItem('blacklist').then((value) => {
      let blacklistedArray: Array<string> = value ? JSON.parse(value) : [];
      if (blacklistedArray.includes(badWord.toLowerCase())) {
        Alert.alert('Word already blacklisted', `Word: '${badWord}'`);
        setBadWord('');
        return;
      }
      blacklistedArray.push(badWord.toLowerCase());
      AsyncStorage.setItem('blacklist', JSON.stringify(blacklistedArray));
      Alert.alert('Blacklisted word successfully', `Word: '${badWord}'`);
      setBadWord('');
    });
  };

  const removeBadWord = () => {
    if (okayWord === '') return;
    AsyncStorage.getItem('blacklist').then((value) => {
      let blacklistedArray: Array<string> = value ? JSON.parse(value) : [];
      if (!blacklistedArray.includes(okayWord.toLowerCase())) {
        Alert.alert('Word not blacklisted', `Word: '${okayWord}'`);
        setOkayWord('');
        return;
      }
      blacklistedArray = blacklistedArray.filter((value: string) => value !== okayWord.toLowerCase());
      AsyncStorage.setItem('blacklist', JSON.stringify(blacklistedArray));
      Alert.alert('Removed word from blacklist successfully', `Word: '${okayWord}'`);
      setOkayWord('');
    });
  };

  useEffect(() => {
    const getOldPass = async () => {
      const pass = await AsyncStorage.getItem('password');
      pass ? setSecretPassword(pass) : handleSignInAttempt();
    }
    getOldPass();
  }, []);

  return !signedIn ? (
    <PasswordInput
      placeholder="Enter password here..."
      onChangeText={(text) => setPassword(text)}
      value={password}
      onSubmitEditing={() => handleSignInAttempt()}
      returnKeyType="go"
    />
  ) : (
    <ScrollView>
      <SettingLabel>
        Set password:
      </SettingLabel>
      <SettingRow>
        <SettingInput
          placeholder="Enter new password here..."
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
          returnKeyType="done"
        />
        <SettingSubmit
          onPress={() => changePassword()}
        >
          <SettingSubmitText>
            Submit
          </SettingSubmitText>
        </SettingSubmit>
      </SettingRow>
      <SettingLabel>
        Add blacklisted word:
      </SettingLabel>
      <SettingRow>
        <SettingInput
          placeholder="Enter bad word here..."
          onChangeText={(text) => setBadWord(text)}
          value={badWord}
          returnKeyType="done"
        />
        <SettingSubmit
          onPress={() => addBadWord()}
        >
          <SettingSubmitText>
            Submit
          </SettingSubmitText>
        </SettingSubmit>
      </SettingRow>
      <SettingLabel>
        Remove blacklisted word:
      </SettingLabel>
      <SettingRow>
        <SettingInput
          placeholder="Enter okay word here..."
          onChangeText={(text) => setOkayWord(text)}
          value={okayWord}
          returnKeyType="done"
        />
        <SettingSubmit
          onPress={() => removeBadWord()}
        >
          <SettingSubmitText>
            Submit
          </SettingSubmitText>
        </SettingSubmit>
      </SettingRow>
    </ScrollView>
  );
};

export default Settings;