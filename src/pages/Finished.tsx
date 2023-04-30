import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { ReactElement } from "react";
import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import { useState, useEffect } from "react";
import styled from "styled-components/native";

const StyledView = styled(View)`
  align-items: center;
  display: flex;
  padding: 20%;
`;

const StyledHaikuLine = styled(Text)`
  font-size: 20px;
  margin: 0pt 1.5% 0pt;
`;

const ClipboardText = styled(Text)`
  color: blue;
  text-decoration: underline blue;
`;

const CopiedText = styled(Text)`
  font-size: 10px;
`;

const Finished = ({
  navigation,
  route: {
    params: { haiku },
  },
}: NativeStackScreenProps<RootStackParamList, "Finished">): ReactElement => {
  const [copied, setCopied] = useState(false);
  const [press, setPress] = useState(0);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (copied) {
      if (currentTimeout) clearTimeout(currentTimeout);
      const timeout = setTimeout(() => setCopied(false), 1000);
      setCurrentTimeout(timeout);
      return () => {
        clearTimeout(timeout);
        setCurrentTimeout(undefined);
      };
    }
  }, [press]);

  return (
    <ScrollView
      scrollEnabled={false}
      contentContainerStyle={{
        alignItems: "center",
        height: "100%",
        width: "100%",
        display: "flex",
        padding: "0% 20%",
      }}
    >
      <View style={{ minHeight: "10%", height: "10%", maxHeight: "10%" }} />
      {haiku.map((line: string, index: number) => {
        return (
          <React.Fragment key={line + index}>
            <View
              style={{ minHeight: "1.5%", height: "1.5%", maxHeight: "1.5%" }}
            />
            <StyledHaikuLine>{line}</StyledHaikuLine>
            <View
              style={{ minHeight: "1.5%", height: "1.5%", maxHeight: "1.5%" }}
            />
          </React.Fragment>
        );
      })}
      <View style={{ minHeight: "20%", height: "20%", maxHeight: "20%" }} />
      <Pressable
        style={(props: { pressed: boolean }) => {
          return [
            {
              opacity: props.pressed ? 0.5 : 1,
            },
          ];
        }}
        onPress={() => {
          Clipboard.setString(haiku.join("\n"));
          setCopied(true);
          setPress(press + 1);
        }}
      >
        <ClipboardText>Copy to Clipboard!</ClipboardText>
      </Pressable>
      {copied && <CopiedText>Copied!</CopiedText>}
    </ScrollView>
  );
};

export default Finished;
