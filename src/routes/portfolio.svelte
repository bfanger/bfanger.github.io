<script context="module" lang="ts">
  import Page from "../components/Page.svelte"
  import Card from "../components/Card.svelte"
  import NavButton from "../components/NavButton.svelte"
  import Disclaimer from "../components/Disclaimer.svelte"
  import cardTransition from "../services/cardTransition"
  import type { Portfolio } from "./types"

  export async function preload(this: Window) {
    const response = await this.fetch("/portfolio.json")
    const portfolio = await response.json()
    return { portfolio }
  }
</script>

<script lang="ts">
  export let portfolio: Portfolio
  const years = Object.keys(portfolio).sort().reverse()
  function transitionOut(node: Element, config: object) {
    return $cardTransition.out(node, config)
  }
  function transitionIn(node: Element, config: object) {
    return $cardTransition.in(node, config)
  }
</script>

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

<svelte:head>
  <title>Bob Fanger's portfolio</title>
</svelte:head>
<Page>

  <div in:transitionIn out:transitionOut>
    <Card>
      <h1>Portfolio van Bob Fanger</h1>
      {#each years as year}
        <h2>{year}</h2>
        <ul
          on:mousedown={() => {
            $cardTransition = 'left'
          }}>
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
        $cardTransition = 'right'
      }}>
      Home
    </NavButton>
  </div>
  <Disclaimer />
</Page>
