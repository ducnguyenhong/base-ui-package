---
to: src/<%= name %>/tsconfig.json
---
{
  "extends": "../../tsconfig.json",
  "include": ["src"],
  "exclude": ["node_modules", "lib", "src/stories"]
}
