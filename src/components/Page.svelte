<script lang="ts">
  import noop from "lodash/noop"

  function out(node: Element, config: object) {
    noop(config)
    node.classList.add("page--outro")
    return {
      tick(t: number) {
        node.classList.toggle("page--outro", t !== 1)
      },
    }
  }
</script>

<div class="page" out:out>
  <slot />
</div>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 15px;
    box-sizing: border-box;
  }
  :global(.page--outro) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
