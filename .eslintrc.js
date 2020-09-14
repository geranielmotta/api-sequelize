module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended', 'prettier/standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    eqeqeq: ['error', 'always']
  }
}
