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
    screenHeight: number;
    move?: (delta: number) => Promise<void>;
  };
  let {
    max,
    value = $bindable(),
    move = $bindable(),
    screenHeight,
  }: Props = $props();

  let tween = $state<Tween<number>>();
  let scroll = $state<Tween<number>>();

  if (value !== 0) {
    onMount(() => {
      window.scrollTo({ top: screenHeight * value, behavior: "instant" });
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
      window.scrollTo({ top: screenHeight * target, behavior: "instant" });
    }
    tween = undefined;
  };

  function onscroll() {
    tween = undefined;
    const target = (window.scrollY / (screenHeight * max)) * max;
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
  <div class="scroller" style:height="{max * screenHeight}px"></div>
{/if}

<style>
  .scroller {
    position: absolute;
    top: 0;
    left: 0;

    width: 1px;

    visibility: hidden;
  }
</style>
