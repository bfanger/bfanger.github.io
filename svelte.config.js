/* eslint-disable import/no-extraneous-dependencies */
import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const svelteConfig = {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter(),
    target: "svelte-app",
    vite: {
      optimizeDeps: {
        include: [
          "lodash-es/noop",
          "lodash-es/groupBy",
          "lodash-es/orderBy",
          "three/examples/jsm/loaders/GLTFLoader.js",
        ],
      },
    },
  },
};

export default svelteConfig;
