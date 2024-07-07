<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Page from "$lib/components/Page.svelte";

  export let title: string | number;
  export let message: string;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Page>
  <Card>
    <h1>{title}</h1>
    <p>{message}</p>

    <slot />
  </Card>
</Page>
