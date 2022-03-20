<script lang="ts" context="module">
  import type { ErrorLoad } from "@sveltejs/kit";
  import { getStatus } from "$lib/services/api";

  export const load: ErrorLoad = ({ error, status }) => {
    const responseStatus = getStatus(error) || 500;
    if (responseStatus >= 400) {
      // eslint-disable-next-line no-param-reassign
      status = responseStatus;
    }
    return {
      props: {
        title: `${status}`,
        message: error?.message ? error?.message : "Oops",
        stack: import.meta.env.DEV ? error?.stack : undefined,
      },
    };
  };
</script>

<script lang="ts">
  import Page from "$lib/components/Page.svelte";
  import Card from "$lib/components/Card.svelte";

  export let title: string;
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
