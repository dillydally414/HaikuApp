import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import Haiku from './Haiku';

const Container = styled(View)`
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 100%;
  justify-content: flex-start;
`;

const Title = styled(Text)`
  font-size: 20px;
  padding: 125px 0 75px;
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