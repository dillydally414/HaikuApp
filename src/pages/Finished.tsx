import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ReactElement } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { useState, useEffect } from "react";

const Finished = ({
  navigation,
  route: { params: { haiku } }
}: NativeStackScreenProps<RootStackParamList, 'Finished'>
): ReactElement => {
  const [copied, setCopied] = useState(true);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 3000)
    }
  }, [copied])

  return (
    <ScrollView>
      <View style={{ marginTop: 100 }}>
        {haiku.map((line: string, index: number) => {
          return (
            <Text key={line + index}>
              {line}
            </Text>
          );
        })}
        <Button
          title='Copy to Clipboard'
          onPress={() => {
            Clipboard.setString(haiku.join('\n'))
            setCopied(true)
          }}
        />
        {copied &&
          <Text>
            Copied!
          </Text>
        }
      </View>
    </ScrollView>
  );
};

export default Finished;