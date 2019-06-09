module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  rules: {
    indent: 'off', // disable the base rule as it may report incorrect errors
    'no-console': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility':  ['error', {
      accessibility: 'no-public'
    }],
    '@typescript-eslint/explicit-function-return-type':  ['error', {
      allowExpressions: true,
      allowTypedFunctionExpressions: true
    }]
  },
  parser: '@typescript-eslint/parser'
};
