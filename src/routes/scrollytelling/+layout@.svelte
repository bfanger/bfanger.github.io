<script lang="ts">
  import Scrollytelling from "$lib/components/Scrollytelling/Scrollytelling.svelte";

  export let data;
</script>

<Scrollytelling teasers={data.teasers}><slot /></Scrollytelling>
