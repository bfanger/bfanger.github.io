<script lang="ts">
  import { browser } from "$app/environment";
  import { tick, type Snippet } from "svelte";
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import abortSignal from "../services/abortSignal";

  type Props = {
    /**
     * Usage is like using an <input type="range" />
     */
    max: number;
    value: number;
    screenHeight: number;
    move?: (delta: number) => Promise<void>;
    children: Snippet;
  };
  let {
    max,
    value = $bindable(),
    move = $bindable(),
    screenHeight,
    children,
  }: Props = $props();

  let tween = $state<Tween<number>>();
  let container: HTMLElement;

  /**
   * Animated programmatic scroll
   */
  move = async (delta: number) => {
    let target = Math.round(tween?.target ?? value) + delta;
    if (!tween) {
      tween = new Tween(value, {
        duration: 400,
        easing: cubicOut,
      });
    }
    await tween.set(target, {
      duration: 300,
      easing: cubicOut,
    });
    tween = undefined;
  };

  function onscroll() {
    if (!container || tween) {
      return;
    }
    value = Math.round((container.scrollTop / (screenHeight * max)) * max);
  }

  function onscrollend() {
    // scroll = undefined;
  }

  $effect(() => {
    if (tween) {
      container.scrollTop = tween.current * screenHeight;
      value = Math.round(tween.current);
    }
  });
</script>

{#if browser}
  <div
    class="scroller"
    style:height="{max * screenHeight}px"
    {@attach (el) => {
      container = el.parentElement as HTMLElement;
      void tick().then(() => {
        container.scrollTop = value * screenHeight;
      });
      const { signal, abort } = abortSignal();
      container.addEventListener("scroll", onscroll, {
        passive: true,
        signal,
      });
      container.addEventListener("scrollend", onscrollend, {
        passive: true,
        signal,
      });
      return abort;
    }}
  >
    {@render children()}
  </div>
{/if}

<style>
  .scroller {
    position: relative;
  }
</style>
