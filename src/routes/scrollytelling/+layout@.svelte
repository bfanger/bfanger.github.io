<script lang="ts">
  import Scrollytelling from "$lib/components/Scrollytelling/Scrollytelling.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<Scrollytelling teasers={data.teasers}><slot /></Scrollytelling>
