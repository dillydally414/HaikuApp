import styled from 'styled-components/native';
import { TextInput, View } from 'react-native';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Line from './Line';

const HaikuView = styled(View)`
  align-self: center;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const Haiku = ({
  lines,
}: {
  lines: {
    text: string,
    setText: (newText: string) => void
    setComplete: (newComplete: boolean) => void
  }[],
}): ReactElement => {
  const ref1 = useRef<TextInput>(null);
  const ref2 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);

  return (
    <HaikuView>
      <Line
        placeholder='First line goes here'
        syllableGoal={5}
        onSubmit={() => ref2.current?.focus()}
        ref={ref1}
        lineProps={lines[0]}
      />
      <Line
        placeholder='Second line goes here'
        syllableGoal={7}
        onSubmit={() => ref3.current?.focus()}
        ref={ref2}
        lineProps={lines[1]}
      />
      <Line
        placeholder='Third line goes here'
        syllableGoal={5}
        returnKeyType='done'
        onSubmit={() => ref3.current?.blur()}
        ref={ref3}
        lineProps={lines[2]}
      />
    </HaikuView>
  )
}

export default Haiku;