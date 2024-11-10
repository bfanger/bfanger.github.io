import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const svelteConfig = {
  preprocess: vitePreprocess(),
  kit: { adapter: adapter() },
};

export default svelteConfig;
