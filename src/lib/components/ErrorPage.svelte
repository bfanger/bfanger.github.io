<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Page from "$lib/components/Page.svelte";
  import type { Snippet } from "svelte";

  type Props = {
    title: string | number;
    message: string;
    children?: Snippet;
  };

  let { title, message, children }: Props = $props();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Page>
  <Card>
    <h1>{title}</h1>
    <p>{message}</p>

    {@render children?.()}
  </Card>
</Page>
