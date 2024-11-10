import "eslint-plugin-only-warn";
// @ts-ignore
import js from "@eslint/js";
import ts from "typescript-eslint";
// @ts-ignore
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...svelte.configs["flat/recommended"],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  prettier,
  ...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
      parser: svelteParser,
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: [".svelte"],
        project: `tsconfig.eslint.json`,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { ignoreRestSiblings: true, argsIgnorePattern: "^_+$" },
      ],
      "@typescript-eslint/no-shadow": "warn",
      curly: "warn",
      eqeqeq: "warn",
      "no-console": ["warn", { allow: ["info", "warn", "error"] }],
      "no-useless-rename": "warn",
      "object-shorthand": "warn",
      "prefer-template": "warn",
      "svelte/block-lang": ["warn", { script: "ts", style: ["scss", null] }],
      "svelte/no-at-html-tags": "off",
    },
  },
  {
    files: ["src/routes/**/*.ts", "src/routes/**/*.svelte"],
    rules: {
      // ESLint is not aware of the generated ./$types and reports false positives
      "@typescript-eslint/no-unsafe-argument": 0,
      "@typescript-eslint/no-unsafe-call": 0,
    },
  },
  {
    files: ["**/*.cjs"],
    rules: {
      // Allow require() in CommonJS modules.
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    ignores: [
      ".svelte-kit",
      ".vercel",
      "build",
      "node_modules",
      "package",
      "src/global.d.ts",
      "vite.config.ts.timestamp-*.mjs",
    ],
  },
);