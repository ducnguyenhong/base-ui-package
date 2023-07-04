import { UserOutlined } from '@ant-design/icons';
import { Meta } from '@storybook/react';
import React from 'react';
import { Input } from './input';

export default {
  title: 'iVND component/Input',
  component: Input,
  tags: ['iVND', 'input']
} as Meta;

export const InputDefault = {
  args: {}
};

export const InputDisabled = {
  args: {
    disabled: true
  }
};

export const InputWithIcon = {
  args: {
    prefix: <UserOutlined />
  }
};
