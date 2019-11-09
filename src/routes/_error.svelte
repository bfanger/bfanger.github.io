<script>
  import Page from "../components/Page.svelte";
  import Card from "../components/Card.svelte";
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>
<Page>
  <Card>
    <h1>{status}</h1>

    <p>{error.message}</p>

    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}

  </Card>
</Page>
