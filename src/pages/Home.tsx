import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Button, ScrollView, Text, View } from 'react-native';
import Haiku from '../components/Haiku';
import React, { ReactElement, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const ScrollContainer = styled(ScrollView)`
  background-color: #fff;
  display: flex;
  height: 100%;
  width: 100%;
`;

const Container = styled(View)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

const Title = styled(Text)`
  font-size: 30px;
  padding: 25% 0 20%;
`;

const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>
): ReactElement => {
  const [lines, setLines] = useState(['', '', '']);
  const [complete, setComplete] = useState([false, false, false]);

  return (
    <ScrollContainer scrollEnabled={false}>
      <Container>
        <Title>
          Haiku Buddy
        </Title>
        <StatusBar style="auto" />
        <Haiku
          lines={lines.map((line: string, index: number) => {
            return {
              text: line,
              setText: (newText: string) => setLines([...lines.slice(0, index), newText, ...lines.slice(index + 1)]),
              setComplete: (newComplete: boolean) => setComplete([...complete.slice(0, index), newComplete, ...complete.slice(index + 1)])
            }
          })}
        />
        {complete.reduce((prev: boolean, current: boolean) => prev && current) &&
          <Button
            title="Finished!"
            onPress={() => navigation.navigate('Finished', { haiku: lines })}
          />
        }
      </Container>
    </ScrollContainer>
  );
};

export default Home;