import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Image, Pressable, Text, View } from 'react-native';
import Haiku from '../components/Haiku';
import { ReactElement, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import Gear from '../../assets/gear.png';

const Container = styled(View)`
  align-items: center;
  background-color: #fff;
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
  const [blur, setBlur] = useState(false);
  return (
    <Pressable onPress={() => setBlur(true)}>
      <Container>
        <GearPressable onPress={() => navigation.navigate('Settings')}>
          <GearImage source={Gear} />
        </GearPressable>
        <Title>
          Haiku Buddy
        </Title>
        <StatusBar style="auto" />
        <Haiku blurHandler={[blur, setBlur]} />
      </Container>
    </Pressable>
  );
};

export default Home;