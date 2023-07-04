import React from 'react';
import LoadingComponent from '../loading';
import { LoadingProps } from '../loading.type';

export const Loading: React.FC<LoadingProps> = (props) => {
  return <LoadingComponent {...props} />;
};
