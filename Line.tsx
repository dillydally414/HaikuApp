import styled from 'styled-components/native';
import React, { ReactElement, useState } from 'react';
import { TextInput } from 'react-native';


const StyledLine = styled(TextInput)`
  border-bottom-color: #D3D3D3;
  border-bottom-width: 1px;
  height: 20px;
  padding-left: 2px;
  width: 75%;
`;

const Line = ({
  placeholder,
  returnKeyType = 'next',
}: {
  placeholder: string,
  returnKeyType?: 'next' | 'done',
}): ReactElement => {
  const [text, setText] = useState('');
  return (
    <StyledLine
      placeholder={placeholder}
      onChangeText={(text: string) => setText(text)}
      defaultValue={text}
      returnKeyType={returnKeyType}
      autoCapitalize='none'
    />
  );
};

export default Line;