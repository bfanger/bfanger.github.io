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
  let scroll = $state<Tween<number>>();

  if (value !== 0) {
    onMount(() => {
      window.scrollTo({ top: size * value, behavior: "instant" });
    });
  }

  /**
   * Animated programmatic scroll
   */
  move = async (delta: number) => {
    scroll = undefined;
    let target = Math.round(tween?.target ?? value) + delta;
    if (!tween) {
      tween = new Tween(value, {
        duration: 400,
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

  function onscroll() {
    tween = undefined;
    const target = (window.scrollY / (size * max)) * max;
    if (!scroll) {
      scroll = new Tween(target, {
        duration: 50,
        easing: cubicOut,
      });
    }
    void scroll.set(target);
  }

  function onscrollend() {
    scroll = undefined;
  }

  $effect(() => {
    if (scroll) {
      value = scroll.current;
    } else if (tween) {
      value = tween.current;
    }
  });
</script>

<svelte:window {onscroll} {onscrollend} />
{#if browser}
  <div class="scroller" style:height="{max * 60}svh"></div>
  <div class="size" bind:clientHeight={size}></div>
{/if}

<style>
  .scroller {
    position: absolute;
    top: 0;
    left: 0;

    width: 1px;

    visibility: hidden;
  }

  .size {
    position: absolute;
    top: 0;
    left: 0;

    width: 0;
    height: 60svh;

    visibility: hidden;
  }
</style>
