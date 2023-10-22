/* eslint-disable filenames/match-exported */
import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const svelteConfig = {
  preprocess: vitePreprocess(),
  kit: { adapter: adapter() },
};

export default svelteConfig;
