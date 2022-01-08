import styled from 'styled-components';
import { View } from 'react-native';
import React, { ReactElement } from 'react';
import Line from './Line';

const HaikuView = styled(View)`
  height: 100px;
  justify-content: space-between;
  width: 80%;
`;

const Haiku = (): ReactElement => {
  return (
    <HaikuView>
      <Line
        placeholder='First line goes here'
        syllableGoal={5}
      />
      <Line
        placeholder='Second line goes here'
        syllableGoal={7}
      />
      <Line
        placeholder='Third line goes here'
        syllableGoal={5}
        returnKeyType='done'
      />
    </HaikuView>
  )
}

export default Haiku;