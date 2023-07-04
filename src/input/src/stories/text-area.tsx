import React from 'react';
import TextAreaComponent from '../text-area';
import { TextAreaProps } from '../text-area/text-area.type';

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return <TextAreaComponent {...props} />;
};
