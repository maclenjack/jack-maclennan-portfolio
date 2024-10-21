import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import vitest from 'eslint-plugin-vitest';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default ts.config(
  {
    ignores: [
      '.next',
      'node_modules',
      '.gitignore',
      '.prettierrc.json',
      'eslint.config.mjs',
      'next.config.mjs',
      'playwright.config.ts',
      'postcss.config.mjs',
      'tailwind.config.js',
      'vitest.config.mts'
    ]
  },
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/e2e/**']
  },
  {
    files: ['tests/component/**'],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules
    },
    settings: {
      vitest: {
        typecheck: true
      }
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals
      }
    }
  },
  ...compat.extends(
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ),
  js.configs.recommended,
  // add `typescript-eslint` flat config simply
  // if you would like use more another configuration,
  // see the section: https://typescript-eslint.io/getting-started#details
  ...ts.configs.recommended,
  {
    plugins: {
      'jsx-a11y': jsxA11Y,
      prettier: prettier,
      react: react,
      'react-hooks': reactHooks
    },

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json'
      }
    },

    rules: {
      'react/jsx-props-no-spreading': 1,
      'react/require-default-props': 0,
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/comma-dangle': 0,
      '@typescript-eslint/no-unused-vars': 1,

      'max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreStrings: true,
          ignoreTemplateLiterals: true
        }
      ],

      'jsx-a11y/click-events-have-key-events': 1,
      'jsx-a11y/no-static-element-interactions': 1,
      'jsx-a11y/no-noninteractive-tabindex': 1,
      'jsx-a11y/no-noninteractive-element-interactions': 1
    }
  }
);
