import React, { memo } from 'react';
import { SelectProps } from './select.type';

const Select: React.FC<SelectProps> = (props) => {
  const { test } = props;

  return (
    <div>Select</div>
  );
};

export default memo(Select);
