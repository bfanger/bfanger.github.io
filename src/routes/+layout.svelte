<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";

  let el: HTMLElement;
  let minHeight = "";

  onMount(() => {
    if (el.clientHeight !== window.innerHeight) {
      // 100vh doesn't works in this browser (or the content doesn't fit)
      window.addEventListener("resize", detectHeight);
      detectHeight();
    }
    return unmount;
  });
  function unmount() {
    window.removeEventListener("resize", detectHeight);
  }
  function detectHeight() {
    minHeight = `${window.innerHeight}px`;
  }
</script>

<svelte:window />
<div
  class="layout"
  style={minHeight ? `min-height: ${minHeight}` : ""}
  bind:this={el}
>
  <slot />
</div>

<style>
  .layout {
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;
  }
</style>
