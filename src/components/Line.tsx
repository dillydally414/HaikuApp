import styled from 'styled-components/native';
import React, { ForwardedRef, useEffect, useState } from 'react';
import { Text, TextInput } from 'react-native';
import { syllable } from 'syllable';
import removeBlacklisted from '../functions/remove-blacklisted';

const secondaryColor = '#D3D3D3';

const StyledLine = styled(TextInput)`
  border-bottom-width: 1px;
  height: 15%;
  margin-top: 3%;
  padding-left: 0.5%;
  width: 100%;
`;

const Line = React.forwardRef(({
  placeholder,
  returnKeyType = 'next',
  syllableGoal,
  onSubmit = () => { },
  lineProps: {
    text,
    setText,
    setComplete
  }
}: {
  placeholder: string,
  returnKeyType?: 'next' | 'done',
  syllableGoal: number,
  onSubmit?: Function,
  lineProps: {
    text: string,
    setText: (newText: string) => void,
    setComplete: (newComplete: boolean) => void
  }
}, ref: ForwardedRef<TextInput>) => {
  const [focused, setFocused] = useState(false);
  const [syllables, setSyllables] = useState(0);

  useEffect(() => {
    setComplete(syllables === syllableGoal)
  }, [syllables])

  useEffect(() => {
    setSyllables(syllable(text));
  }, [text]);

  useEffect(() => {
    setText(removeBlacklisted(text));
  }, [focused])

  return (
    <>
      <StyledLine
        placeholder={`${placeholder} (${syllableGoal} syllables)`}
        onChangeText={(text: string) => setText(text.endsWith(' ') ? removeBlacklisted(text) : text)}
        defaultValue={text}
        placeholderTextColor={secondaryColor}
        returnKeyType={returnKeyType}
        autoCapitalize='none'
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          borderBottomColor: focused ? 'blue' : secondaryColor,
        }}
        onSubmitEditing={() => onSubmit()}
        ref={ref}
      />
      <Text
        style={{
          color: syllableGoal - syllables > 0 ? 'black' : syllableGoal === syllables ? 'green' : 'red'
        }}
      >
        {syllableGoal - syllables > 0 ? (
          `${syllableGoal - syllables} more syllable${syllableGoal - syllables > 1 ? 's' : ''}.`
        ) : (syllableGoal === syllables ? (
          'Right number of syllables!'
        ) : (
          `${syllables - syllableGoal} syllable${syllables - syllableGoal > 1 ? 's' : ''} over.`
        ))}
      </Text>
    </>
  );
});

export default Line;