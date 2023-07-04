---
to: src/<%= name %>/src/<%= name %>.tsx
---

import React, { memo } from 'react';
import { <%= name.replace(name[0], name[0].toUpperCase()) %>Props } from './<%= name %>.type';

const <%= name.replace(name[0], name[0].toUpperCase()) %>: React.FC<<%= name.replace(name[0], name[0].toUpperCase()) %>Props> = (props) => {
  const { test } = props;

  return (
    <div><%= name.replace(name[0], name[0].toUpperCase()) %></div>
  );
};

export default memo(<%= name.replace(name[0], name[0].toUpperCase()) %>);
