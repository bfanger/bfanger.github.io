<script lang="ts">
  import { onMount } from "svelte";

  type Props = {
    /**
     * Usage is like using an <input type="range" />
     */
    max: number;
    value: number;
  };
  let { max, value = $bindable() }: Props = $props();
  let clientHeight = $state(0);

  if (value !== 0) {
    onMount(() => {
      window.scrollTo(0, clientHeight * value);
    });
  }
  function sync() {
    const factor = window.scrollY / (clientHeight * max);
    value = factor * max;
  }

  let lastChange = Date.now();
  let previous = value;
  let scrolling: undefined | ReturnType<typeof requestAnimationFrame>;

  function raf() {
    sync();
    if (previous !== value) {
      lastChange = Date.now();
      previous = value;
      scrolling = requestAnimationFrame(raf);
    } else if (Date.now() - lastChange < 1000) {
      scrolling = requestAnimationFrame(raf);
    } else {
      scrolling = undefined;
    }
  }

  function start() {
    lastChange = Date.now();
    sync();
    if (!scrolling) {
      scrolling = requestAnimationFrame(raf);
    }
  }

  function end() {
    sync();
    if (scrolling) {
      cancelAnimationFrame(scrolling);
      scrolling = undefined;
    }
  }
</script>

<div class="scroller" style:height="{max * 100}svh"></div>
<div class="size" bind:clientHeight></div>
<svelte:window onscroll={start} on:scrollend={end} />

<style>
  .scroller {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
  }

  .size {
    position: absolute;
    top: 0;
    left: -1px;

    width: 1px;
    height: 100svh;
  }
</style>
