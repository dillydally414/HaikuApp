import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ReactElement } from "react";
import { Button, ScrollView, Text, View } from "react-native";

const Finished = ({
  navigation,
  route: { params: { haiku } }
}: NativeStackScreenProps<RootStackParamList, 'Finished'>
): ReactElement => {
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
      </View>
    </ScrollView>
  );
};

export default Finished;