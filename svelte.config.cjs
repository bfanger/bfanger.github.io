/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const sveltePreprocess = require("svelte-preprocess");
const static = require("@sveltejs/adapter-static");
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: static(),
    target: "svelte-app",
  },
};
