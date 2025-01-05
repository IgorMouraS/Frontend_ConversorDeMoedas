import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier, // Adiciona Prettier para desativar regras conflitantes do ESLint
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Desativa a exigência do React no escopo
      'prettier/prettier': 'error', // Configura Prettier como uma regra de ESLint
      'react/display-name': 'off',
      'react/prop-types': 'off',
    },
  },
];
