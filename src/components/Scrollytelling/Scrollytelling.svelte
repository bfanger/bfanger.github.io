<script lang="ts">
  import type { Project } from "../../services/project-fns";
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import ProjectCard from "../ProjectCard.svelte";
  import Scroller from "../Scroller.svelte";
  import ScrollytellingItem from "./ScrollytellingItem.svelte";
  import type { Snippet } from "svelte";
  import cardTransition, {
    cardIn,
    cardOut,
  } from "../../services/cardTransition";
  import NavButton from "../NavButton.svelte";
  import { fade } from "svelte/transition";
  import { fetchProject } from "../../services/fetchProject.remote";
  import { resolve } from "$app/paths";
  import { replaceState } from "$app/navigation";

  type Teaser = {
    slug: string;
    title: string;
    released: string;
  };

  type Props = {
    teasers: Teaser[];
    children: Snippet;
  };
  let { teasers, children }: Props = $props();

  const initial = findIndex(page.params.project ?? "");
  const cached: Record<number, Promise<Project>> = $state({}); // @todo Prime cache with server project data

  let scrollIndex = $state(initial);

  function findIndex(slug: string) {
    return teasers.findIndex((t) => t.slug === slug);
  }

  function loadProject(slug: string) {
    const projectIndex = findIndex(slug);
    /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
    if (!cached[projectIndex]) {
      cached[projectIndex] = fetchProject(slug);
    }
    return cached[projectIndex];
  }

  function updateUrl(index: number) {
    const { slug } = teasers[index];
    const url = `/projects/${slug}`;
    if (window.location.pathname === url) {
      return;
    }
    replaceState(resolve("/projects/[project]", { project: slug }), {
      scroll: index,
    });
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
  let previous = $derived(teasers[currentIndex - 1]);
  let current = $derived(teasers[currentIndex]);
  let next = $derived(teasers[currentIndex + 1]);

  $effect(() => {
    if (browser && current) {
      void loadProject(current.slug);
    }
  });
  $effect(() => {
    if (browser && next) {
      void loadProject(next.slug);
    }
  });
  $effect(() => {
    if (browser && previous) {
      void loadProject(previous.slug);
    }
  });
  let virtual = $derived(
    (browser ? [currentIndex - 1, currentIndex, currentIndex + 1] : []).filter(
      (index) => index >= 0 && index < teasers.length && index !== initial,
    ),
  );
  $effect(() => {
    if (browser) {
      updateUrl(currentIndex);
    }
  });
</script>

<Scroller max={teasers.length} bind:value={scrollIndex} />
<div
  class="viewport"
  class:ssr={!browser}
  in:cardIn|global={{}}
  out:cardOut|global={{}}
>
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
      {@render children()}
    </ScrollytellingItem>
  {/if}
</div>
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="previous"
  out:fade|global={{ duration: 200 }}
  onmousedown={() => {
    cardTransition.set("right");
  }}
>
  <NavButton href="/portfolio" type="previous">Portfolio</NavButton>
</div>

<style>
  .viewport {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    min-height: 100svh;

    &.ssr {
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .previous {
    position: fixed;
    z-index: 1;
    bottom: calc(50% - 35px);
    left: calc(50vw - 550px);
    transform: translateX(-50%);

    @media (width <= 1290px) {
      left: 30px;
      transform: none;
    }

    @media (width <= 880px) {
      bottom: 40px;
      left: 40px;
    }
  }
</style>
