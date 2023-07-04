---
to: src/<%= name %>/src/stories/<%= name %>.stories.tsx
---

import { Meta } from '@storybook/react';
import { <%= name.replace(name[0], name[0].toUpperCase()) %> } from './<%= name %>';

export default {
  title: 'iVND component/<%= name.replace(name[0], name[0].toUpperCase()) %>',
  component: <%= name.replace(name[0], name[0].toUpperCase()) %>,
  tags: ['iVND', '<%= name.replace(name[0], name[0].toUpperCase()) %>']
} as Meta;

export const <%= name.replace(name[0], name[0].toUpperCase()) %>Default = {
  args: {}
};
