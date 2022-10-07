<script lang="ts">
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import Scroller from "$lib/components/Scroller.svelte";
  import ScrollytellingItem from "./ScrollytellingItem.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import type { Project } from "$lib/Project";

  type Teaser = {
    slug: string;
    title: string;
    released: string;
  };

  export let teasers: Teaser[];

  const initial = findIndex($page.params.project);
  const cached: Record<number, Promise<Project>> = {}; // @todo Prime cache with server project data

  let scrollIndex = initial;
  $: currentIndex = Math.round(scrollIndex);
  $: previous = teasers[currentIndex - 1]?.slug;
  $: current = teasers[currentIndex]?.slug;
  $: next = teasers[currentIndex + 1]?.slug;
  // @todo Debounce
  $: browser && previous && loadProject(previous);
  $: browser && current && loadProject(current);
  $: browser && next && loadProject(next);

  $: virtual = [currentIndex - 1, currentIndex, currentIndex + 1].filter(
    (index) => index >= 0 && index < teasers.length && index !== initial
  );

  function findIndex(slug: string) {
    return teasers.findIndex((t) => t.slug === slug);
  }

  function loadProject(slug: string) {
    const projectIndex = findIndex(slug);
    if (!cached[projectIndex]) {
      cached[projectIndex] = fetch(`/projects/${slug}.json`).then((r) =>
        r.json()
      );
    }
    return cached[projectIndex];
  }
  $: browser && updateUrl(currentIndex);

  function updateUrl(index: number) {
    const { slug } = teasers[index];
    const url = `/scrollytelling/${slug}`;
    if (window.location.pathname === url) {
      return;
    }
    window.history.pushState({ scroll: index }, "", `/scrollytelling/${slug}`);
  }

  function placeholder(teaser: Teaser): Project {
    return {
      content: "",
      released: teaser.released,
      slug: teaser.slug,
      title: teaser.title,
    };
  }
</script>

<Scroller max={teasers.length - 1} bind:value={scrollIndex} />
<div class="viewport">
  {#each virtual as index (index)}
    <ScrollytellingItem scroll={scrollIndex - index}>
      {#await cached[index]}
        <ProjectCard project={placeholder(teasers[index])} />
      {:then project}
        {#if project}
          <ProjectCard {project} />
        {:else}
          <ProjectCard project={placeholder(teasers[index])} />
        {/if}
      {/await}
    </ScrollytellingItem>
  {/each}
  {#if initial > currentIndex - 2 && initial < currentIndex + 2}
    <ScrollytellingItem scroll={scrollIndex - initial}>
      <slot />
    </ScrollytellingItem>
  {/if}
</div>

<style lang="scss">
  .viewport {
    position: fixed;
    inset: 0;
  }
</style>
