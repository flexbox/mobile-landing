// .eslintrc.js

module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "prettier",
    "@typescript-eslint",
    "react-native",
    "simple-import-sort",
  ],
  rules: {
    camelcase: "off", // disable camelcase rule
    "func-style": ["error", "declaration"], // enforce function declarations over expressions
    "@typescript-eslint/no-explicit-any": "warn", // detect usage of `any` type
    "@typescript-eslint/no-require-imports": "off", // disable require style imports error
    "prettier/prettier": [
      "warn",
      {
        usePrettierrc: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "react-native/no-unused-styles": 2,
    "react-native/no-raw-text": 0,
    "react-native/sort-styles": 2,
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Environment variables
          ["^(@env)(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
  },
  ignorePatterns: ["/dist/*"],
};
