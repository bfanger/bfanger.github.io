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
  plugins: ["prettier", "only-warn"],
  globals: {
    System: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
}
