<script>
  /**
   * @var {Promise<SvelteComponent>} component
   */
  export let component
  export let props = {}
  $: promise =
    component && component.then
      ? component
      : Promise.reject(new Error("Missing component parameter"))
</script>

{#await promise then module}
  <svelte:component this={module.default} {...props} />
{/await}
