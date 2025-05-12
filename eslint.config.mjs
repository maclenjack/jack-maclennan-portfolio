import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
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

export default [
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
    files: ['**/*.{js,jsx}', '**/*.*.{js,jsx}'],
    rules: {
      ...js.configs.recommended.rules,
      'max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreStrings: true,
          ignoreTemplateLiterals: true
        }
      ]
    }
  },
  {
    files: ['**/*.{ts,tsx}', '**/*.*.{ts,tsx}'],
    plugins: { '@typescript-eslint': ts.plugin },
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        projectService: true,
        tsConfigRoot: __dirname
      }
    },
    rules: {
      '@typescript-eslint/comma-dangle': 0,
      '@typescript-eslint/no-unused-vars': 1
    }
  },
  {
    files: ['tests/e2e/**'],
    ...playwright.configs['flat/recommended']
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
  {
    files: ['src/**'],
    plugins: {
      'jsx-a11y': jsxA11Y,
      react: react,
      'react-hooks': reactHooks
    },
    rules: {
      ...jsxA11Y.flatConfigs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-props-no-spreading': 1,
      'react/require-default-props': 0,
      'react/react-in-jsx-scope': 0
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  eslintPluginPrettier
];
