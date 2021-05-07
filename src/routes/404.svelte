<script lang="ts">
  import ErrorRoute from "./__error.svelte";
</script>

<ErrorRoute status={404} error={new Error("Pagina niet gevonden")} />
