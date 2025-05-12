import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import js from '@eslint/js';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import vitest from 'eslint-plugin-vitest';
import ts from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
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
      'vitest.config.mts',
      'jack-maclennan-portfolio-docs',
    ]
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
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
    plugins: {
      '@typescript-eslint': ts.plugin,
    },
    rules: {
      ...ts.configs.recommended.rules,
      '@typescript-eslint/comma-dangle': 0,
      "@typescript-eslint/no-unused-vars": [
        "error", {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ]
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
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11Y.configs.recommended.rules,
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
