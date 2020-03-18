module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // "no-var": 0,
    // "eqeqeq": 0,
    // "no-undef": 0,
    // "no-unused-vars": 0,
    // "no-use-before-define": 0,
    // "camelcase": 0,
    // "no-eval": 0,
    // "prefer-destructuring": 0,
    // "no-restricted-syntax": 0,
    // "no-prototype-builtins": 0,
    // "no-shadow": 0,
    // "max-len": 0,
    // "func-names": 0
  },
};
