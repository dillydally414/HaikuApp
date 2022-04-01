import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ReactElement } from "react";
import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledView = styled(View)`
  align-items: center;
  display: flex;
  padding: 20%
`;

const StyledHaikuLine = styled(Text)`
  font-size: 20px;
  margin: 1.5%;
`;

const ClipboardButton = styled(Pressable)`
  margin-top: 50%;
;`

const ClipboardText = styled(Text)`
  color: blue;
  text-decoration: underline blue;
`;

const CopiedText = styled(Text)`
  font-size: 10px;
`;

const Finished = ({
  navigation,
  route: { params: { haiku } }
}: NativeStackScreenProps<RootStackParamList, 'Finished'>
): ReactElement => {
  const [copied, setCopied] = useState(false);
  const [press, setPress] = useState(0);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (copied) {
      if (currentTimeout) clearTimeout(currentTimeout)
      const timeout = setTimeout(() => setCopied(false), 1000)
      setCurrentTimeout(timeout)
      return () => {
        clearTimeout(timeout)
        setCurrentTimeout(undefined)
      }
    }
  }, [press])

  return (
    <ScrollView>
      <StyledView>
        {haiku.map((line: string, index: number) => {
          return (
            <StyledHaikuLine key={line + index}>
              {line}
            </StyledHaikuLine>
          );
        })}
        <ClipboardButton
          style={(props: { pressed: boolean }) => {
            return [
              {
                opacity: props.pressed ? 0.5 : 1
              }
            ]
          }}
          onPress={() => {
            Clipboard.setString(haiku.join('\n'))
            setCopied(true)
            setPress(press + 1)
          }}
        >
          <ClipboardText>Copy to Clipboard!</ClipboardText>
        </ClipboardButton>
        {copied &&
          <CopiedText>
            Copied!
          </CopiedText>
        }
      </StyledView >
    </ScrollView >
  );
};

export default Finished;