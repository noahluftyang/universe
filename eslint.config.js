import reactCompiler from 'eslint-plugin-react-compiler';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    plugins: {
      'react-compiler': reactCompiler,
    },
    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },
];
