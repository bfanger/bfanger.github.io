<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ page, fetch, session, context }) => {
    const response = await fetch("./portfolio.json");
    const portfolio = await response.json();
    return { props: { portfolio } };
  };
</script>

<script lang="ts">
  import Page from "../components/Page.svelte";
  import Card from "../components/Card.svelte";
  import NavButton from "../components/NavButton.svelte";
  import Disclaimer from "../components/Disclaimer.svelte";
  import cardTransition, { cardIn, cardOut } from "../services/cardTransition";
  import type { Portfolio } from "./types";

  export let portfolio: Portfolio;
  const years = Object.keys(portfolio).sort().reverse();
</script>

<svelte:head>
  <title>Bob Fanger's portfolio</title>
</svelte:head>
<Page>
  <div in:cardIn out:cardOut>
    <Card>
      <h1>Portfolio van Bob Fanger</h1>
      {#each years as year}
        <h2>{year}</h2>
        <ul
          on:mousedown={() => {
            cardTransition.set("left");
          }}
        >
          {#each portfolio[year] as project}
            <li>
              <a href="projects/{project.slug}">{project.title}</a>
            </li>
          {/each}
        </ul>
      {/each}
    </Card>
  </div>
  <div class="portfolio-page__previous">
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

<style lang="scss">
  .portfolio-page__previous {
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
