import type { SvelteComponent } from "svelte";

const Avatar: Promise<{ default: typeof SvelteComponent } | null> =
  typeof window !== "undefined"
    ? import("./Avatar.svelte")
    : Promise.resolve(null);

export default Avatar;
