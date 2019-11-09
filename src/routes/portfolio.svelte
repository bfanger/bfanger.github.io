<script context="module">
  import Page from "../components/Page.svelte";
  import Card from "../components/Card.svelte";
  import NavButton from "../components/NavButton.svelte";

  export async function preload() {
    const response = await this.fetch("/portfolio.json");
    const portfolio = await response.json();
    return { portfolio };
  }
</script>

<script>
  export let portfolio;
  const years = Object.keys(portfolio)
    .sort()
    .reverse();
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
      // transform: translateX(-50%);
    }
  }
</style>

<svelte:head>
  <title>Bob Fanger's portfolio</title>
</svelte:head>
<Page>
  <Card>
    <h1>Portfolio van Bob Fanger</h1>
    {#each years as year}
      <h2>{year}</h2>
      <ul>
        {#each portfolio[year] as project}
          <li>
            <a href="projects/{project.slug}">{project.title}</a>
          </li>
        {/each}
      </ul>
    {/each}
  </Card>
  <div class="portfolio-page__previous">
    <NavButton href="/" type="previous">Home</NavButton>
  </div>
</Page>
