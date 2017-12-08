# README

[ESLint](http://www.eslint.org) rules!

## **ESLint** *extends* options

- `@canastro`: extension of the `airbnb` rules!
- `@canastro/jsdoc`: adds `jsdoc` awareness!
- `@canastro/react`: adds `react` specific rules!

## Usage

1. Create a `.eslintrc` on `root` path of the module;
2. Install as a `devDependency` by running `npm i -D @canastro/eslint-config`;
3. Add the following line `{ "extends": ["@canastro"] }`;
4. Extend or add as needed like adding `globals` and `env` or `plugins`.

## Example

```
{
  "extends": [
    "@canastro",
    "@canastro/jsdoc",
    "@canastro/react"
  ],
  "env": {
    "es6": true,
    "browser": true
  }
}
```
