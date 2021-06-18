<script lang="ts" context="module">
  export function load({ error, status }) {
    if (error.response && error.response.status) {
      status = error.response.status;
    }
    return {
      props: { error, status },
    };
  }
</script>

<script lang="ts">
  import Page from "../components/Page.svelte";
  import Card from "../components/Card.svelte";
  export let status: number;
  export let error: Error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>
<Page>
  <Card>
    <h1>{status}</h1>

    <p>{error && error.message}</p>

    {#if dev && error && error.stack}
      <pre>{error.stack}</pre>
    {/if}
    <slot />
  </Card>
</Page>
