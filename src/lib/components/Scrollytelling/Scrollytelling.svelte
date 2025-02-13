<script lang="ts">
  import type { Project } from "$lib/project-fns";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Scroller from "$lib/components/Scroller.svelte";
  import ScrollytellingItem from "./ScrollytellingItem.svelte";
  import type { Snippet } from "svelte";

  type Teaser = {
    slug: string;
    title: string;
    released: string;
  };

  type Props = {
    teasers: Teaser[];
    children?: Snippet;
  };

  let { teasers, children }: Props = $props();

  const initial = findIndex($page.params.project);
  const cached: Record<number, Promise<Project>> = $state({}); // @todo Prime cache with server project data

  let scrollIndex = $state(initial);

  function findIndex(slug: string) {
    return teasers.findIndex((t) => t.slug === slug);
  }

  function loadProject(slug: string) {
    const projectIndex = findIndex(slug);
    /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
    if (!cached[projectIndex]) {
      cached[projectIndex] = fetch(`/projects/${slug}.json`).then((r) =>
        r.json(),
      );
    }
    return cached[projectIndex];
  }

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
  let currentIndex = $derived(Math.round(scrollIndex));
  let previous = $derived(teasers[currentIndex - 1]?.slug);
  let current = $derived(teasers[currentIndex]?.slug);
  let next = $derived(teasers[currentIndex + 1]?.slug);
  // @todo Debounce
  $effect(() => {
    if (browser && previous) {
      void loadProject(previous);
    }
  });
  $effect(() => {
    if (browser && current) {
      void loadProject(current);
    }
  });
  $effect(() => {
    if (browser && next) {
      void loadProject(next);
    }
  });
  let virtual = $derived(
    [currentIndex - 1, currentIndex, currentIndex + 1].filter(
      (index) => index >= 0 && index < teasers.length && index !== initial,
    ),
  );
  $effect(() => {
    if (browser) {
      updateUrl(currentIndex);
    }
  });
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
      {@render children?.()}
    </ScrollytellingItem>
  {/if}
</div>

<style>
  .viewport {
    position: fixed;
    inset: 0;
  }
</style>
