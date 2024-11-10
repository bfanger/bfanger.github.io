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

  let range = $derived(max);

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

<div class="scroller" style:height="{range * 100}vh"></div>

<svelte:window onscroll={onScroll} />
