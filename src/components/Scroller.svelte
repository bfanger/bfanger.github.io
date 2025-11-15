<script lang="ts">
  import { browser } from "$app/environment";
  import { untrack, type Snippet } from "svelte";
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import screenSize from "../services/screenSize.svelte";

  type Props = {
    /**
     * Usage is like using an <input type="range" />
     */
    max: number;
    value: number;
    move?: (delta: number) => Promise<void>;
    children: Snippet;
  };
  let {
    max,
    value = $bindable(),
    move = $bindable(),
    children,
  }: Props = $props();

  let tween = $state<Tween<number>>();
  let container: HTMLElement;

  /**
   * Animated programmatic scroll
   */
  move = async (delta: number) => {
    let target = Math.round(tween?.target ?? value) + delta;
    let duration = 200;
    if (!tween) {
      tween = new Tween(value, { easing: cubicOut });
      duration = 400;
    }
    await tween.set(target, { duration });
    tween = undefined;
  };

  function onscroll() {
    if (!container || tween) {
      return;
    }
    value = Math.round((container.scrollTop / (screenSize.height * max)) * max);
  }

  $effect(() => {
    if (tween) {
      container.scrollTop = tween.current * screenSize.height;
      value = Math.round(tween.current);
    }
  });
  $effect(() => {
    if (container && screenSize.height > 1) {
      container.scrollTop = untrack(() => value * screenSize.height);
    }
  });
</script>

{#if browser}
  <div
    class="scroller"
    style:height="{max * screenSize.height}px"
    {@attach (el) => {
      container = el.parentElement as HTMLElement;
      container.addEventListener("scroll", onscroll, { passive: true });
      return () => {
        container.removeEventListener("scroll", onscroll);
      };
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
