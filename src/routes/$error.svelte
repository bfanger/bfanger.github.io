<script lang="ts">
  import Page from "../components/Page.svelte";
  import Card from "../components/Card.svelte";
  import FourOhFour from "./404.svelte";
  export let status: number;
  export let error: Error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>
{#if status === 404}
  <FourOhFour />
{:else}
  <Page>
    <Card>
      <h1>{status}</h1>

      <p>{error.message}</p>

      {#if dev && error.stack}
        <pre>{error.stack}</pre>
      {/if}
    </Card>
  </Page>
{/if}
