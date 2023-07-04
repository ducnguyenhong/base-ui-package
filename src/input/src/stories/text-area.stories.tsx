import { Meta } from '@storybook/react';
import { TextArea } from './text-area';

export default {
  title: 'iVND component/TextArea',
  component: TextArea,
  tags: ['iVND', 'input', 'text area']
} as Meta;

export const TextAreaDefault = {
  args: {}
};

export const TextAreaWithRows = {
  args: {
    rows: 10
  }
};
