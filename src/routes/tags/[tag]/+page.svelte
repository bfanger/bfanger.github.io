<script lang="ts">
  import Page from "../../../components/Page.svelte";
  import Card from "../../../components/Card.svelte";
  import cardTransition, {
    cardIn,
    cardOut,
  } from "../../../services/cardTransition";
  import Tags from "../../../components/Tags.svelte";
  import { fade } from "svelte/transition";
  import NavButton from "../../../components/NavButton.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Projects tagged</title>
</svelte:head>
<Page>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="portfolio-link"
    out:fade|global={{ duration: 200 }}
    onmousedown={() => {
      cardTransition.set("right");
    }}
  >
    <NavButton href="/portfolio" type="previous">Portfolio</NavButton>
  </div>
  <div in:cardIn|global={{}} out:cardOut|global={{}}>
    <Card>
      <Tags tags={data.popularTags} active={data.tag} />
      <h2 class="title">Projects tagged with "{data.tag}"</h2>
      <div class="min-height">
        <ul>
          {#each data.projects as project}
            <li>
              <a href="/projects/{project.slug}">{project.title}</a>
            </li>
          {/each}
        </ul>
      </div>
    </Card>
  </div>
</Page>

<style>
  .title {
    margin-top: 24px;
  }

  .min-height {
    min-height: 450px;
  }

  .portfolio-link {
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
</style>
