import styled from "styled-components/native";
import React, { ForwardedRef, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { syllable } from "syllable";
import removeBlacklisted from "../functions/remove-blacklisted";

const secondaryColor = "#D3D3D3";

const StyledLine = styled(TextInput)`
  align-self: center;
  border-bottom-width: 1px;
  display: flex;
  padding-left: 0.5%;
  width: 100%;
  height: 40%;
`;

const StyledSubLine = styled(Text)`
  display: flex;
  height: 30%;
`;

const Line = React.forwardRef(
  (
    {
      placeholder,
      returnKeyType = "next",
      syllableGoal,
      onSubmit = () => {},
      lineProps: { text, setText, setComplete },
    }: {
      placeholder: string;
      returnKeyType?: "next" | "done";
      syllableGoal: number;
      onSubmit?: Function;
      lineProps: {
        text: string;
        setText: (newText: string) => void;
        setComplete: (newComplete: boolean) => void;
      };
    },
    ref: ForwardedRef<TextInput>
  ) => {
    const [focused, setFocused] = useState(false);
    const [syllables, setSyllables] = useState(0);

    useEffect(() => {
      setComplete(syllables === syllableGoal);
    }, [syllables]);

    useEffect(() => {
      setSyllables(syllable(text));
    }, [text]);

    useEffect(() => {
      setText(removeBlacklisted(text));
    }, [focused]);

    return (
      <View style={{ minHeight: "30%", height: "30%", maxHeight: "30%" }}>
        <View style={{ minHeight: "5%", height: "5%", maxHeight: "5%" }} />
        <StyledLine
          placeholder={`${placeholder} (${syllableGoal} syllables)`}
          onChangeText={(text: string) =>
            setText(text.endsWith(" ") ? removeBlacklisted(text) : text)
          }
          value={text}
          placeholderTextColor={secondaryColor}
          returnKeyType={returnKeyType}
          autoCapitalize="none"
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setText(removeBlacklisted(text));
            setFocused(false);
          }}
          style={{
            borderBottomColor: focused ? "blue" : secondaryColor,
          }}
          onSubmitEditing={() => onSubmit()}
          ref={ref}
        />
        <View style={{ minHeight: "5%", height: "5%", maxHeight: "5%" }} />

        <StyledSubLine
          style={{
            color:
              syllableGoal - syllables > 0
                ? "black"
                : syllableGoal === syllables
                ? "green"
                : "red",
          }}
        >
          {syllableGoal - syllables > 0
            ? `${syllableGoal - syllables} more syllable${
                syllableGoal - syllables > 1 ? "s" : ""
              }.`
            : syllableGoal === syllables
            ? "Right number of syllables!"
            : `${syllables - syllableGoal} syllable${
                syllables - syllableGoal > 1 ? "s" : ""
              } over.`}
        </StyledSubLine>
      </View>
    );
  }
);

export default Line;
