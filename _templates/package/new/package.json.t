---
to: src/<%= name %>/package.json
---
{
  "name": "@ivnd/<%= name %>",
  "version": "0.0.1",
  "description": "iVND Control <%= name.replace(name[0], name[0].toUpperCase()) %>",
  "author": "iVND",
  "type": "module",
  "license": "MIT",
  "main": "lib/index.js",
  "module": "lib/index.esm.js",
  "types": "lib/index.d.ts",
  "files": [
    "lib"
  ],
  "repository": {
    "type": "git",
    "url": "https://gitlab-ext.vndirect.com.vn/ivnd-library/ivnd-control"
  },
  "bugs": {
    "url": "https://gitlab-ext.vndirect.com.vn/ivnd-library/ivnd-control/issues"
  },
  "scripts": {
    "build": "rollup -c"
  },
  "peerDependencies": {
    "antd": "^5.6.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
