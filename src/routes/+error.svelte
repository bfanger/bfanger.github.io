<script lang="ts">
  import { page } from "$app/state";
  import ErrorPage from "$lib/components/ErrorPage.svelte";

  let title = $derived(page.status >= 400 ? page.status : "Error");
  let message = $derived(page.error?.message || "Oops");
</script>

<ErrorPage {title} {message} />
