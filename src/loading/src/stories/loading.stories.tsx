import { Meta } from '@storybook/react';
import { Loading } from './loading';

export default {
  title: 'iVND component/Loading',
  component: Loading,
  tags: ['iVND', 'loading']
} as Meta;

export const LoadingDefault = {
  args: {}
};

export const LoadingWithSize = {
  args: {
    size: 60
  }
};

export const LoadingWithColor = {
  args: {
    color: '#00b300'
  }
};
