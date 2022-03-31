import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ReactElement } from "react";
import { Button, ScrollView, Text, View } from "react-native";

const Finished = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Finished'>
): ReactElement => {
  return (
    <ScrollView>
      <View style={{ marginTop: 100 }}>
        <Text>
          Finished!
        </Text>
      </View>
    </ScrollView>
  );
};

export default Finished;