module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'newline-before-return': ['error'],
    'eol-last': ['error', 'always'],
  },
};
