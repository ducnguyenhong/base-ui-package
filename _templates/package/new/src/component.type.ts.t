---
to: src/<%= name %>/src/<%= name %>.type.ts
---

export interface <%= name.replace(name[0], name[0].toUpperCase()) %>Props {
  test?: string;
}
