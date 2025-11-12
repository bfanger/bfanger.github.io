<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };
  let { children }: Props = $props();
</script>

<div class="layout">
  {@render children()}
</div>

<style>
  .layout {
    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;
  }
</style>
