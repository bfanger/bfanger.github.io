<script context="module">
  import Page from "../../components/Page.svelte";
  import ProjectCard from "../../components/ProjectCard.svelte";
  import NavButton from "../../components/NavButton.svelte";
  import Disclaimer from "../../components/Disclaimer.svelte";
  import cardTransition from "../../services/cardTransition";

  export async function preload({ params }) {
    const response = await this.fetch(`projects/${params.project}.json`);
    const project = await response.json();

    return { project };
  }
</script>

<script>
  import { prefetch, goto } from "@sapper/app";
  export let project;
  $: if (project.next && typeof window !== "undefined") {
    prefetch("projects/" + project.next);
  }
  function keydown(e) {
    if (e.altKey || e.shiftKey || e.metaKey) {
      return;
    }
    if (e.key === "ArrowLeft" && project.before) {
      cardTransition.set("right");
      goto("projects/" + project.before);
    } else if (e.key === "ArrowRight" && project.after) {
      cardTransition.set("left");
      goto("projects/" + project.after);
    }
  }
  function transitionOut(node) {
    return $cardTransition.out(node);
  }
  function transitionIn(node) {
    return $cardTransition.in(node);
  }
</script>

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

<svelte:head>
  <title>{project.title}</title>
</svelte:head>
<svelte:window on:keydown={keydown} />

{#each [project] as p (p.slug)}
  <Page>
    <div in:transitionIn out:transitionOut>
      <ProjectCard project={p} />
    </div>

  </Page>
{/each}

<div
  class="project-page__previous"
  on:mousedown={() => {
    $cardTransition = 'right';
  }}>
  {#if project.before}
    <NavButton href="projects/{project.before}" type="previous">
      Vorige
    </NavButton>
  {:else}
    <NavButton href="portfolio" type="previous">Portfolio</NavButton>
  {/if}
</div>

{#if project.after}
  <div
    class="project-page__next"
    on:mousedown={() => {
      $cardTransition = 'left';
    }}>
    <NavButton href="projects/{project.after}" type="next">Volgende</NavButton>
  </div>
{/if}
<div class="project-page__disclaimer">
  <Disclaimer />
</div>
