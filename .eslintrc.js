const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    // require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
  ],
  ignorePatterns: ['node_modules', '.next', 'out', 'public'],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'no-undef': 'off',
      },
    },
    {
      files: ['*.js', '*.mjs'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  rules: {
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
};
