<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Scroller from "$lib/components/Scroller.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const initial = data.teasers.findIndex(
    (t) => t.slug === $page.params.project
  );

  let value = initial;
  function top(slug: string, y: number) {
    const index = data.teasers.findIndex((t) => t.slug === slug);
    const offset = y - index;
    if (offset < -0.5) {
      goto(`/scrollytelling/${data.teasers[index + Math.floor(offset)].slug}`, {
        noscroll: true,
      });
    } else if (offset > 0.5) {
      goto(`/scrollytelling/${data.teasers[index + Math.ceil(offset)].slug}`, {
        noscroll: true,
      });
    }
    return `${offset * -100}vh`;
  }
</script>

<Scroller max={data.teasers.length} bind:value />
<div class="viewport">
  <div class="current" style:top={top($page.params.project, value)}>
    <slot />
  </div>
</div>

<style lang="scss">
  .viewport {
    position: fixed;
    inset: 0;
  }
  .current {
    position: absolute;
  }
</style>
