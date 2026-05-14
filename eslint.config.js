import globals from 'globals';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import {
  configs as airbnb,
  plugins as airbnbPlugins,
} from 'eslint-config-airbnb-extended';

export default defineConfig([
  globalIgnores(['dist']),
  airbnbPlugins.stylistic,
  airbnbPlugins.importX,
  airbnbPlugins.react,
  airbnbPlugins.reactA11y,
  airbnbPlugins.reactHooks,
  airbnbPlugins.typescriptEslint,
  ...airbnb.base.all,
  ...airbnb.react.all,
  {
    rules: {
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.config.{js,ts,mjs,cjs}',
            'eslint.config.js',
            'vite.config.ts',
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [reactRefresh.configs.vite],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'max-lines-per-function': [
        'error',
        { max: 40, skipBlankLines: true, skipComments: true },
      ],
      'no-magic-numbers': [
        'error',
        {
          ignore: [-1, 0, 1, 2],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          enforceConst: true,
        },
      ],
    },
  },
]);
