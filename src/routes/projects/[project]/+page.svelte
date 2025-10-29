<script lang="ts">
  import { goto, preloadData } from "$app/navigation";
  import { resolve } from "$app/paths";
  import Disclaimer from "$lib/components/Disclaimer.svelte";
  import NavButton from "$lib/components/NavButton.svelte";
  import Page from "$lib/components/Page.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import cardTransition, {
    cardIn,
    cardOut,
  } from "../../../services/cardTransition";

  let { data } = $props();
  let project = $derived(data.project);
  $effect(() => {
    if (project.before && typeof window !== "undefined") {
      void preloadData(project.before);
    }
  });
  async function keydown(e: KeyboardEvent) {
    if (e.altKey || e.shiftKey || e.metaKey) {
      return;
    }
    if (e.key === "ArrowLeft" && project.before) {
      cardTransition.set("right");
      await goto(resolve("/projects/[project]", { project: project.before }));
    } else if (e.key === "ArrowRight" && project.after) {
      cardTransition.set("left");
      await goto(resolve("/projects/[project]", { project: project.after }));
    }
  }
</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>
<svelte:window onkeydown={keydown} />

{#key project}
  <Page>
    <div in:cardIn|global out:cardOut|global>
      <ProjectCard {project} />
    </div>
  </Page>
{/key}

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="previous"
  onmousedown={() => {
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
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="next"
    onmousedown={() => {
      cardTransition.set("left");
    }}
  >
    <NavButton href={project.after} type="next">Volgende</NavButton>
  </div>
{/if}
<div class="disclaimer">
  <Disclaimer />
</div>

<style>
  .disclaimer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
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
      bottom: 50px;
      left: 20px;
    }
  }

  .next {
    position: fixed;
    z-index: 1;
    right: calc(50vw - 550px);
    bottom: calc(50% - 35px);
    transform: translateX(50%);

    @media (width <= 1290px) {
      right: 30px;
      transform: none;
    }

    @media (width <= 880px) {
      right: 20px;
      bottom: 50px;
    }
  }
</style>
