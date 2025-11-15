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
  import { resolve } from "$app/paths";
  import { replaceState } from "$app/navigation";
  import ScrollArrow from "./ScrollArrow.svelte";

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

  let currentIndex = $state(initial);
  let screenHeight = $state(1);

  function findIndex(slug: string) {
    return teasers.findIndex((t) => t.slug === slug);
  }

  function loadProject(slug: string) {
    const projectIndex = findIndex(slug);
    /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
    if (!cached[projectIndex]) {
      cached[projectIndex] = fetch(`/projects/${slug}.json`).then((res) =>
        res.json(),
      );
    }
    return cached[projectIndex];
  }
  // Fix for Safari's SecurityError: Attempt to use history.replaceState() more than X times per Y seconds.
  let debounceTimer: ReturnType<typeof setTimeout>;
  function updateUrl(index: number) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const { slug } = teasers[index];
      const url = `/projects/${slug}`;
      if (window.location.pathname === url) {
        return;
      }
      replaceState(resolve("/projects/[project]", { project: slug }), {
        scroll: index,
      });
    }, 100);
  }

  function placeholder(teaser: Teaser): Project {
    return {
      content: "",
      released: teaser.released,
      slug: teaser.slug,
      title: teaser.title,
    };
  }

  let previous = $derived(teasers[currentIndex - 1]);
  let current = $derived(teasers[currentIndex]);
  let next = $derived(teasers[currentIndex + 1]);
  let move = $state(() => Promise.resolve());

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

<div class="viewport" in:cardIn|global={{}} out:cardOut|global={{}}>
  <div class="screen-height" bind:clientHeight={screenHeight}></div>
  {#if !browser}
    <ScrollytellingItem index={initial} screenHeight={1}>
      {@render children()}
    </ScrollytellingItem>
  {:else}
    <Scroller
      max={teasers.length}
      {screenHeight}
      bind:value={currentIndex}
      bind:move
    >
      {#each virtual as index (index)}
        <ScrollytellingItem
          {index}
          inert={index !== currentIndex}
          {screenHeight}
        >
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
        <!-- scroll={scrollIndex - initial} -->
        <ScrollytellingItem
          index={initial}
          inert={initial !== currentIndex}
          {screenHeight}
        >
          {@render children()}
        </ScrollytellingItem>
      {/if}
    </Scroller>
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
<div class="up-down" out:fade|global={{ duration: 200 }}>
  <div class="up">
    {#if previous}
      <ScrollArrow
        slug={previous.slug}
        title={previous.title}
        direction="up"
        {move}
      />
    {/if}
  </div>
  {#if next}
    <ScrollArrow slug={next.slug} title={next.title} direction="down" {move} />
  {/if}
</div>

<style>
  .viewport {
    position: fixed;
    top: 0;
    left: 0;

    overflow-y: scroll;
    overscroll-behavior: contain;

    width: 100%;
    height: 100dvh;
  }

  .screen-height {
    position: absolute;
    top: 0;
    left: 0;

    width: 0;
    height: 100svh;

    visibility: hidden;
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

    @media (width <= 1000px) {
      bottom: 40px;
      left: 40px;
    }
  }

  .up-down {
    position: fixed;
    z-index: 1;
    right: calc(50vw - 575px);

    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 10px;

    @media (width <= 1290px) {
      right: 40px;
    }

    @media (width <= 1000px) {
      bottom: 40px;
      display: block;
    }

    @media (width > 1000px) {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .up {
    @media (width <= 1000px) {
      display: none;
    }
  }
</style>
