module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'react-refresh'
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'off',
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off',
    'object-curly-spacing': 'off',
    'no-console': 'off',
    'eqeqeq': 2,
    'no-empty': 0,
    'spaced-comment': ['error', 'always'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'indent': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': ['error', 'never'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'space-infix-ops': 'error',
    'react/jsx-no-target-blank': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      },
    },
  ],
}