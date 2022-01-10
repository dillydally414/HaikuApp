import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Pressable, Text, View } from 'react-native';
import Haiku from '../components/Haiku';
import { ReactElement, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const Container = styled(View)`
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

const Title = styled(Text)`
  font-size: 30px;
  padding: 35% 0 25%;
`;

const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>
): ReactElement => {
  const [blur, setBlur] = useState(false);
  return (
    <Pressable onPress={() => setBlur(true)}>
      <Container>
        <Title>
          Haiku Buddy
        </Title>
        <StatusBar style="auto" />
        <Haiku blurHandler={[blur, setBlur]} />
        <Title onPress={() => navigation.navigate('Settings')}>
          Settings
        </Title>
      </Container>
    </Pressable>
  );
};

export default Home;