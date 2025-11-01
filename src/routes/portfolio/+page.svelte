<script lang="ts">
  import { groupBy } from "lodash-es";
  import Card from "$lib/components/Card.svelte";
  import Disclaimer from "$lib/components/Disclaimer.svelte";
  import NavButton from "$lib/components/NavButton.svelte";
  import Page from "$lib/components/Page.svelte";
  import cardTransition, {
    cardIn,
    cardOut,
  } from "../../services/cardTransition";
  import { resolve } from "$app/paths";
  import { fade } from "svelte/transition";

  let { data } = $props();

  type Teaser = (typeof data)["teasers"][number];

  function extractYear(project: Teaser) {
    const match = project.released.toString().match(/^[0-9]+/);
    if (match === null) {
      console.warn(`Project[${project.slug}].released is invalid`);
      return 2000;
    }
    return parseInt(match[0], 10);
  }
  let grouped = $derived(
    groupBy(data.teasers, extractYear) as Record<string, Teaser[]>,
  );
  let years = $derived(Object.keys(grouped).sort().reverse());
</script>

<svelte:head>
  <title>Bob Fanger's portfolio</title>
</svelte:head>
<Page>
  <div in:cardIn|global={{}} out:cardOut|global={{}}>
    <Card>
      <h1>Portfolio van Bob Fanger</h1>
      {#each years as year}
        <h2>{year}</h2>
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <ul
          onmousedown={() => {
            cardTransition.set("left");
          }}
        >
          {#each grouped[year] as project}
            <li>
              <a
                href={resolve("/projects/[project]", {
                  project: project.slug,
                })}
                data-sveltekit-noscroll>{project.title}</a
              >
            </li>
          {/each}
        </ul>
      {/each}
    </Card>
  </div>
  <div class="previous">
    <NavButton
      href="/"
      type="previous"
      onmousedown={() => {
        cardTransition.set("right");
      }}
    >
      Home
    </NavButton>
  </div>

  <div class="next" out:fade={{ duration: 200 }}>
    <NavButton
      type="next"
      href={resolve("/projects/[project]", {
        project: grouped[years[0]][0].slug,
      })}
      onmousedown={() => {
        cardTransition.set("left");
      }}
    >
      {years[0]}
    </NavButton>
  </div>
  <Disclaimer />
</Page>

<style>
  .previous {
    position: fixed;
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

  .next {
    position: fixed;
    right: calc(50vw - 550px);
    bottom: calc(50% - 35px);
    transform: translateX(50%);

    @media (width <= 1290px) {
      right: 30px;
      transform: none;
    }

    @media (width <= 880px) {
      right: 40px;
      bottom: 40px;
    }
  }
</style>
