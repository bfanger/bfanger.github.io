<script lang="ts">
  function out(node: Element) {
    node.classList.add("outro");
    return {
      tick(t: number) {
        node.classList.toggle("outro", t !== 1);
      },
    };
  }
</script>

<div class="page" class:outro={false} out:out|global>
  <slot />
</div>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 15px 15px 30px 15px;
    box-sizing: border-box;
  }
  .outro {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
