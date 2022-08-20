<!-- <script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  import { getStatus } from "$lib/services/api";

  export const load: Load = ({ error, status }) => {
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
</script> -->
<script lang="ts">
  import { page } from "$app/stores";
  import ErrorPage from "$lib/components/ErrorPage.svelte";

  $: title = $page.status >= 400 ? $page.status : "Error";
  $: message = $page.error.message || "Oops";
  $: stack = import.meta.env.DEV ? $page.error.stack : undefined;
</script>

<ErrorPage {title} {message} {stack} />
