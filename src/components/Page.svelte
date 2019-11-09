<script>
  import { onMount, onDestroy } from "svelte";

  let outro = false;
  function out() {
    outro = true;
  }
</script>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
  .page--outro {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>

<div class="page" class:page--outro={outro} out:out>
  <slot />
</div>
