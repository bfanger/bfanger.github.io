<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    index: number;
    screenHeight: number;
    inert?: boolean;
    children: Snippet;
  };

  let { index, screenHeight, inert, children }: Props = $props();
</script>

<div class="item" {inert} style:top={`${index * screenHeight}px`}>
  <div>
    {@render children()}
  </div>
</div>

<style>
  .item {
    isolation: isolate;
    position: absolute;
    top: 0;

    display: grid;
    place-items: center;

    width: 100%;
    min-height: 100svh;
  }
</style>
