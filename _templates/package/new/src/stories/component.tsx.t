---
to: src/<%= name %>/src/stories/<%= name %>.tsx
---

import React from 'react';
import UI<%= name.replace(name[0], name[0].toUpperCase()) %> from '../<%= name %>';
import { <%= name.replace(name[0], name[0].toUpperCase()) %>Props } from '../<%= name %>.type';

export const <%= name.replace(name[0], name[0].toUpperCase()) %>: React.FC<<%= name.replace(name[0], name[0].toUpperCase()) %>Props> = (props) => {
  return <UI<%= name.replace(name[0], name[0].toUpperCase()) %> {...props} />;
};
