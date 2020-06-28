module.exports = {
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  plugins: ["svelte3", "prettier", "only-warn"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        "prettier/prettier": "off",
        "no-unused-vars": "off",
      },
      settings: {
        "svelte3/ignore-styles": () => true,
      },
    },
  ],
  globals: {
    System: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
}
