<script lang="ts">
  import { page } from "$app/stores";
  import ErrorPage from "$lib/components/ErrorPage.svelte";

  $: title = $page.status >= 400 ? $page.status : "Error";
  $: message = $page.error?.message || "Oops";
</script>

<ErrorPage {title} {message} />
