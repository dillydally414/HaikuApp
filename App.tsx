import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

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
    </Container>
  );
}