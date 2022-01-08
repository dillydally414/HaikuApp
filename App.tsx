import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import Haiku from './Haiku';

const Container = styled(View)`
  align-items: center;
  background-color: #fff;
  flex: 1;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <Text>Testing 1 2 3!</Text>
      <StatusBar style="auto" />
      <Haiku />
    </Container>
  );
}