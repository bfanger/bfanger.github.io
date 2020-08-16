<script lang="ts">
  /**
   * @var {Promise<SvelteComponent>} component
   */
  export let component: Promise<{ default: Function }>
  export let props: object = {}
  $: promise =
    component && component.then
      ? component
      : Promise.reject(new Error("Missing component parameter"))
</script>

{#await promise then module}
  <svelte:component this={module.default} {...props} />
{/await}
