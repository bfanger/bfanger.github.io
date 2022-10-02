<script lang="ts">
  import { onMount } from "svelte";

  /**
   * Usage is like using an <input type="range" />
   */
  export let max: number;
  export let value: number;

  $: range = max;

  if (value !== 0) {
    onMount(() => {
      window.scrollTo(0, document.body.scrollHeight * (value / range));
    });
  }

  function onScroll() {
    const factor =
      window.scrollY / (document.body.offsetHeight - window.innerHeight);
    value = factor * range;
  }
</script>

<div class="scroller" style:height="{range * 100}vh" />

<svelte:window on:scroll={onScroll} />
