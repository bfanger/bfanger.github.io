// svelte.config.js
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    scss: true
  })
  // ...other svelte options
};
