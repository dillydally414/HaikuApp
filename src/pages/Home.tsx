import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Haiku from '../components/Haiku';
import React, { ReactElement } from 'react';
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

const GearImage = styled(Image)`
  height: 30px;
  margin: 6% 3% 0 0;
  opacity: 0.4;
  width: 30px;
`;

const GearPressable = styled(Pressable)`
  align-self: flex-end;
`;

const Title = styled(Text)`
  font-size: 30px;
  padding: 25% 0 20%;
`;

const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>
): ReactElement => {
  return (
    <ScrollContainer scrollEnabled={false}>
      <Container>
        <GearPressable onPress={() => navigation.navigate('Settings')}>
          <GearImage source={require(`../../assets/gear.png`)} />
        </GearPressable>
        <Title>
          Haiku Buddy
        </Title>
        <StatusBar style="auto" />
        <Haiku />
      </Container>
    </ScrollContainer>
  );
};

export default Home;