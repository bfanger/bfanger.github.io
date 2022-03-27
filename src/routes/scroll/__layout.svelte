<script lang="ts" context="module">
  export const load: Load = async ({ params, fetch }) => {
    const response = await fetch("/portfolio.json");
    const teasers = await response.json();
    return {
      props: { slug: params.scroll, teasers },
    };
  };
</script>

<script lang="ts">
  import { browser } from "$app/env";

  import Screen from "$lib/components/Screen.svelte";
  import type { Load } from "@sveltejs/kit";
  import { onMount } from "svelte";

  export let slug: string;
  export let teasers: Array<{ title: string; slug: string; released: string }>;

  let viewport: HTMLDivElement;
  let active: HTMLDivElement;
  $: index = teasers.findIndex((t) => t.slug === slug);

  onMount(() => {
    viewport.scrollTo({ top: active.offsetTop, behavior: "auto" });
  });
</script>

<div class="viewport" bind:this={viewport}>
  {#if browser}
    {#each { length: index } as _, i}
      <Screen title={teasers[i].title} />
    {/each}
  {/if}
  <div bind:this={active}>
    <slot />
  </div>
  {#if browser}
    {#each { length: teasers.length - index - 1 } as _, i}
      <Screen
        title="{teasers[index + i + 1].title} - {teasers[index + i + 1]
          .released}"
      />
    {/each}
  {:else}
    {#if index !== 0}
      <a href={teasers[index - 1].slug}>Vorige</a>
    {/if}
    {#if index < teasers.length - 1}
      <a href={teasers[index + 1].slug}>Volgende</a>
    {/if}
  {/if}

  <slot />
</div>

<style lang="scss">
  .viewport {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
</style>
