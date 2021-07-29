<script lang="ts">
  import type { SvelteComponent } from "svelte";

  export let component: Promise<{ default: typeof SvelteComponent } | null>;
  export let props: object = {};
  $: promise =
    component && typeof component.then === "function"
      ? component
      : Promise.reject(new Error("Missing component parameter"));
</script>

{#await promise then module}
  <svelte:component this={module.default} {...props} />
{/await}
