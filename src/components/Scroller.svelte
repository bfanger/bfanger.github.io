<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  type Props = {
    /**
     * Usage is like using an <input type="range" />
     */
    max: number;
    value: number;
    move?: (delta: number) => Promise<void>;
  };
  let { max, value = $bindable(), move = $bindable() }: Props = $props();

  /** The size of each step in pixels */
  let size = $state(0);
  let tween = $state<Tween<number>>();

  let scrolling: ReturnType<typeof requestAnimationFrame> | undefined;
  let lastChange = Date.now();
  let previous = value;

  if (value !== 0) {
    onMount(() => {
      window.scrollTo({ top: size * value, behavior: "instant" });
    });
  }

  /**
   * Animated programmatic scroll
   */
  move = async (delta: number) => {
    let target = Math.round(tween?.target ?? value) + delta;
    if (!tween) {
      tween = new Tween(value, {
        duration: 300,
        easing: cubicOut,
      });
    }
    const currentTween = tween;
    await tween.set(target, {
      duration: 300,
      easing: cubicOut,
    });
    if (tween === currentTween) {
      window.scrollTo({ top: size * target, behavior: "instant" });
    }
    tween = undefined;
  };

  function sync() {
    const factor = window.scrollY / (size * max);
    value = factor * max;
  }

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
    tween = undefined;
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

  $effect(() => {
    if (tween) {
      value = tween.current;
    }
  });
</script>

<svelte:window onscroll={start} on:scrollend={end} />
{#if browser}
  <div class="scroller" style:height="{max * 100}svh"></div>
  <div class="size" bind:clientHeight={size}></div>
{/if}

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
