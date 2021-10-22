# app-ui

## Install

```sh
npm ci
```

## Recommended configuration

`.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.formatOnSave": true,
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Local server

```sh
npm start
```

If are using Chrome, you can turn on chrome://flags/#allow-insecure-localhost to avoid the "_Your connection is not private_" alert.

## Build

```sh
npm run build
```

## Test

```sh
npm test
```

## Lint

```sh
npm run lint
```
