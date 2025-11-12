<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };
  let { children }: Props = $props();

  let el: HTMLElement | undefined = $state();
  let minHeight = $state("");

  onMount(() => {
    if (el?.clientHeight === window.innerHeight) {
      return;
    }
    // 100vh doesn't works in this browser (or the content doesn't fit)
    function detectHeight() {
      minHeight = `${window.innerHeight}px`;
    }
    window.addEventListener("resize", detectHeight);
    detectHeight();
    return () => {
      window.removeEventListener("resize", detectHeight);
    };
  });
</script>

<div
  class="layout"
  style={minHeight ? `min-height: ${minHeight}` : ""}
  bind:this={el}
>
  {@render children()}
</div>

<style>
  .layout {
    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: clamp(100vh, 100vh, max-content);
  }
</style>
