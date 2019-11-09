<script>
  /**
   * @var {Promise<SvelteComponent>} component
   */
  export let component;
  export let props = {};
</script>

{#await component then module}
  <svelte:component this={module.default} {...props} />
{/await}
