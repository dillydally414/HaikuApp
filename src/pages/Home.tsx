import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Button, ScrollView, Text, View } from "react-native";
import Haiku from "../components/Haiku";
import React, { ReactElement, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
  display: flex;
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 30px;
  padding: 0;
`;

const FinishedButtonContainer = styled.View`
  display: flex;
  height: 15%;
  min-width: 15%;
  justify-content: flex-end;
`;

const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">): ReactElement => {
  const [lines, setLines] = useState(["", "", ""]);
  const [complete, setComplete] = useState([false, false, false]);

  return (
    <ScrollContainer
      scrollEnabled={false}
      contentContainerStyle={{
        alignItems: "center",
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <View style={{ minHeight: "12%", height: "12%", maxHeight: "12%" }} />
      <Title>Haiku Buddy</Title>
      <View style={{ minHeight: "10%", height: "10%", maxHeight: "10%" }} />
      <StatusBar style="auto" />
      <Haiku
        lines={lines.map((line: string, index: number) => {
          return {
            text: line,
            setText: (newText: string) =>
              setLines([
                ...lines.slice(0, index),
                newText,
                ...lines.slice(index + 1),
              ]),
            setComplete: (newComplete: boolean) =>
              setComplete([
                ...complete.slice(0, index),
                newComplete,
                ...complete.slice(index + 1),
              ]),
          };
        })}
      />
      <View style={{ minHeight: "10%", height: "10%", maxHeight: "10%" }} />

      <FinishedButtonContainer>
        {complete.every((a) => a) && (
          <Button
            title="Finished!"
            onPress={() => navigation.navigate("Finished", { haiku: lines })}
          />
        )}
        <View style={{ minHeight: "15%", height: "15%", maxHeight: "15%" }} />
        <Button
          title="Clear"
          color="red"
          onPress={() => setLines(["", "", ""])}
        />
      </FinishedButtonContainer>
    </ScrollContainer>
  );
};

export default Home;
