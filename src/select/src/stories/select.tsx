import React from 'react';
import UISelect from '../select';
import { SelectProps } from '../select.type';

export const Select: React.FC<SelectProps> = (props) => {
  return <UISelect {...props} />;
};
