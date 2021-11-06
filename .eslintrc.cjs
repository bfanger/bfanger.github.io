module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    extraFileExtensions: [".cjs", ".svelte"],
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    "airbnb-base",
    "eslint-config-airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["only-warn", "svelte3"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "svelte3/typescript": true,
    "svelte3/ignore-styles": ({ lang }) => !!lang,
  },
  overrides: [
    {
      files: ["*.js", "*.cjs"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        // Interactions with other plugins: https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
        "prettier/prettier": "off",
        "import/prefer-default-export": "off",
        "import/order": "off",
        "import/first": "off",
        "import/no-duplicates": "off",
        "import/no-mutable-exports": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "import/extensions": "off",
    "no-restricted-syntax": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "warn",
      { functions: false, classes: true, variables: true },
    ],
  },
};
