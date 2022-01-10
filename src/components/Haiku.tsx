import styled from 'styled-components/native';
import { TextInput, View } from 'react-native';
import React, { ReactElement, useEffect, useRef } from 'react';
import Line from './Line';

const HaikuView = styled(View)`
  display: flex;
  height: 20%;
  justify-content: space-between;
  width: 80%;
`;

const Haiku = ({
  blurHandler,
}: {
  blurHandler: [boolean, (arg: boolean) => void]
}): ReactElement => {
  const [blur, setBlur] = blurHandler;
  const ref1 = useRef<TextInput>(null);
  const ref2 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);

  useEffect(() => {
    if (blur) {
      ref1.current?.blur();
      ref2.current?.blur();
      ref3.current?.blur();
      setBlur(false);
    }
  }, [blur]);

  return (
    <HaikuView>
      <Line
        placeholder='First line goes here'
        syllableGoal={5}
        onSubmit={() => ref2.current?.focus()}
        ref={ref1}
      />
      <Line
        placeholder='Second line goes here'
        syllableGoal={7}
        onSubmit={() => ref3.current?.focus()}
        ref={ref2}

      />
      <Line
        placeholder='Third line goes here'
        syllableGoal={5}
        returnKeyType='done'
        onSubmit={() => ref3.current?.blur()}
        ref={ref3}
      />
    </HaikuView>
  )
}

export default Haiku;