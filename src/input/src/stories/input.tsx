import React from 'react';
import InputComponent from '../input';
import { InputProps } from '../input/input.type';

export const Input: React.FC<InputProps> = (props) => {
  return <InputComponent {...props} />;
};
