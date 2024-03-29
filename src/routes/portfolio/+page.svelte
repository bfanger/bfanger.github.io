<script lang="ts">
  import { groupBy } from "lodash-es";
  import cardTransition, {
    cardIn,
    cardOut,
  } from "../../services/cardTransition";
  import Page from "$lib/components/Page.svelte";
  import Card from "$lib/components/Card.svelte";
  import NavButton from "$lib/components/NavButton.svelte";
  import Disclaimer from "$lib/components/Disclaimer.svelte";

  export let data;

  type Teaser = (typeof data)["teasers"][number];

  $: grouped = groupBy(data.teasers, extractYear) as Record<string, Teaser[]>;
  $: years = Object.keys(grouped).sort().reverse();

  function extractYear(project: Teaser) {
    const match = project.released.toString().match(/^[0-9]+/);
    if (match === null) {
      console.warn(`Project[${project.slug}].released is invalid`); // eslint-disable-line no-console
      return 2000;
    }
    return parseInt(match[0], 10);
  }
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
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <ul
          on:mousedown={() => {
            cardTransition.set("left");
          }}
        >
          {#each grouped[year] as project}
            <li>
              <a href="projects/{project.slug}">{project.title}</a>
            </li>
          {/each}
        </ul>
      {/each}
      <slot />
    </Card>
  </div>
  <div class="previous">
    <NavButton
      href="/"
      type="previous"
      on:mousedown={() => {
        cardTransition.set("right");
      }}
    >
      Home
    </NavButton>
  </div>
  <Disclaimer />
</Page>

<a hidden href="/scrollytelling/bfanger.nl-v3">poc</a>

<style lang="scss">
  .previous {
    position: fixed;

    bottom: calc(50% - 35px);
    left: calc(50vw - 550px);
    transform: translateX(-50%);
    @media (max-width: 1290px) {
      left: 30px;
      transform: none;
    }
    @media (max-width: 880px) {
      bottom: 40px;
      left: 40px;
    }
  }
</style>
