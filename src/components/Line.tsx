import styled from 'styled-components/native';
import React, { ReactElement, useState } from 'react';
import { Text, TextInput } from 'react-native';
import countSyllables from '../count-syllables';

const secondaryColor = '#D3D3D3';

const StyledLine = styled(TextInput)`
  border-bottom-width: 1px;
  height: 20px;
  margin-top: 10px;
  padding-left: 2px;
  width: 100%;
`;

const Line = ({
  placeholder,
  returnKeyType = 'next',
  syllableGoal,
}: {
  placeholder: string,
  returnKeyType?: 'next' | 'done',
  syllableGoal: number,
}): ReactElement => {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);
  const [syllables, setSyllables] = useState(0);

  const handleTextChange = (text: string): void => {
    setText(text);
    setSyllables(countSyllables(text));
  }

  return (
    <>
      <StyledLine
        placeholder={`${placeholder} (${syllableGoal} syllables)`}
        onChangeText={(text: string) => handleTextChange(text)}
        defaultValue={text}
        placeholderTextColor={secondaryColor}
        returnKeyType={returnKeyType}
        autoCapitalize='none'
        blurOnSubmit={true} //returnKeyType === 'done'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          borderBottomColor: focused ? 'blue' : secondaryColor,
        }}
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
};

export default Line;