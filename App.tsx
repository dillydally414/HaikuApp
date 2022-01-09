import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import Haiku from './src/components/Haiku';

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

export default function App() {
  return (
    <Container>
      <Title>
        Haiku Buddy
      </Title>
      <StatusBar style="auto" />
      <Haiku />
    </Container>
  );
}