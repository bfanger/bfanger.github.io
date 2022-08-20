<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/components/Page.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import NavButton from "$lib/components/NavButton.svelte";
  import Disclaimer from "$lib/components/Disclaimer.svelte";
  import cardTransition, {
    cardIn,
    cardOut,
  } from "$lib/services/cardTransition";
  import { goto, prefetch } from "$app/navigation";
  import type { Project } from "$lib/Project";

  export let data: PageData;
  $: project = data as Project;
  $: if (project.before && typeof window !== "undefined") {
    prefetch(project.before);
  }
  function keydown(e: KeyboardEvent) {
    if (e.altKey || e.shiftKey || e.metaKey) {
      return;
    }
    if (e.key === "ArrowLeft" && project.before) {
      cardTransition.set("right");
      goto(project.before);
    } else if (e.key === "ArrowRight" && project.after) {
      cardTransition.set("left");
      goto(project.after);
    }
  }
</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>
<svelte:window on:keydown={keydown} />

{#key project}
  <Page>
    <div in:cardIn out:cardOut>
      <ProjectCard {project} />
    </div>
  </Page>
{/key}

<div
  class="project-page__previous"
  on:mousedown={() => {
    cardTransition.set("right");
  }}
>
  {#if project.before}
    <NavButton href={project.before} type="previous">Vorige</NavButton>
  {:else}
    <NavButton href="/portfolio" type="previous">Portfolio</NavButton>
  {/if}
</div>

{#if project.after}
  <div
    class="project-page__next"
    on:mousedown={() => {
      cardTransition.set("left");
    }}
  >
    <NavButton href={project.after} type="next">Volgende</NavButton>
  </div>
{/if}
<div class="project-page__disclaimer">
  <Disclaimer />
</div>

<style lang="scss">
  .project-page__disclaimer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .project-page__previous {
    position: fixed;
    z-index: 1;
    bottom: calc(50% - 35px);
    left: calc(50vw - 550px);
    transform: translateX(-50%);
    @media (max-width: 1290px) {
      left: 30px;
      transform: none;
    }
    @media (max-width: 880px) {
      bottom: 50px;
      left: 20px;
    }
  }
  .project-page__next {
    position: fixed;
    z-index: 1;
    bottom: calc(50% - 35px);
    right: calc(50vw - 550px);
    transform: translateX(50%);
    @media (max-width: 1290px) {
      right: 30px;
      transform: none;
    }
    @media (max-width: 880px) {
      bottom: 50px;
      right: 20px;
    }
  }
</style>
