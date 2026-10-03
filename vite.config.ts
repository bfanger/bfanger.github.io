import { existsSync } from "node:fs";
import adapter from "@sveltejs/adapter-static";
import runesMode from "./src/runesMode.js";
import type { UserConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import devtoolsJson from "vite-plugin-devtools-json";

const inDocker = existsSync("/.dockerenv");

const config: UserConfig = {
  css: { devSourcemap: true },
  plugins: [
    inDocker ? [] : devtoolsJson(),
    sveltekit({
      preprocess: runesMode(),
      inspector: true,
      adapter: adapter(),
    }),
  ],
  server: inDocker
    ? { host: true, watch: { usePolling: true, interval: 1000 } }
    : undefined,
};

export default config;
