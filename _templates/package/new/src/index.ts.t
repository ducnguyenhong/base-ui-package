---
to: src/<%= name %>/src/index.ts
---
import <%= name.replace(name[0], name[0].toUpperCase()) %> from './<%= name %>';

export { <%= name.replace(name[0], name[0].toUpperCase()) %> };
