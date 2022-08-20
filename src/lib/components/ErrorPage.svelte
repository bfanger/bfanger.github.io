<script lang="ts">
  import Page from "$lib/components/Page.svelte";
  import Card from "$lib/components/Card.svelte";

  export let title: string | number;
  export let message: string;
  export let stack: string | undefined = undefined;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Page>
  <Card>
    <h1>{title}</h1>
    <p>{message}</p>

    {#if stack}
      <pre>{stack}</pre>
    {/if}
    <slot />
  </Card>
</Page>

<style>
  pre {
    font: 11px Monaco, monospace;
    overflow: auto;
  }
</style>
