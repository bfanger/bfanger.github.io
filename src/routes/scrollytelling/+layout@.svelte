<script lang="ts">
  import type { LayoutData } from "./$types";
  import Scrollytelling from "$lib/components/Scrollytelling/Scrollytelling.svelte";

  export let data: LayoutData;
</script>

<Scrollytelling teasers={data.teasers}><slot /></Scrollytelling>
