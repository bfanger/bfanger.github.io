<script lang="ts">
  import Scrollytelling from "$lib/components/Scrollytelling/Scrollytelling.svelte";

  let { data, children } = $props();
</script>

<Scrollytelling teasers={data.teasers}>
  {@render children?.()}
</Scrollytelling>
