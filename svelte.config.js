import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const svelteConfig = {
  preprocess: sveltePreprocess(),
  kit: {
    prerender: {
      default: true,
    },
    adapter: adapter(),
  },
};

export default svelteConfig;
