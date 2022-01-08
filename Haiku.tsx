import { Text } from 'react-native';
import React, { ReactElement, } from 'react';
import Line from './Line';

const Haiku = (): ReactElement => {
  return (
    <>
      <Text>Haiku goes here</Text>
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
    </>
  )
}

export default Haiku;