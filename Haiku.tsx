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
        placeholder='First line goes here (5 syllables)'
      />
      <Line
        placeholder='Second line goes here (7 syllables)'
      />
      <Line
        placeholder='Third line goes here (5 syllables)'
        returnKeyType='done'
      />
    </HaikuView>
  )
}

export default Haiku;