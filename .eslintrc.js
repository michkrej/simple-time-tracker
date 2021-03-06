module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'no-multiple-empty-lines': 'warn',
    'eol-last': 'warn',
    'padded-blocks': 'warn',
    quotes: 'warn',
    semi: 0,
    'comma-dangle': 'warn',
    'space-before-function-paren': 'warn',
    'no-trailing-spaces': 'warn'
  }
}
