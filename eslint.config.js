const js = require('@eslint/js')
const nextPlugin = require('@next/eslint-plugin-next')
const reactHooks = require('eslint-plugin-react-hooks')
const prettier = require('eslint-config-prettier')
const globals = require('globals')

module.exports = [
  {
    ignores: ['.next/', 'node_modules/', 'dist/'],
  },
  js.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  prettier,
  {
    files: ['*.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
