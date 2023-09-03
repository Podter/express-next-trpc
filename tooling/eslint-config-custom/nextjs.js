/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/prop-types": "off",
  },
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
  },
};

module.exports = config;
