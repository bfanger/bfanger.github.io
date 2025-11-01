<script lang="ts">
  import Layout from "./Layout.svelte";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
  };
  let { children }: Props = $props();

  function outro(node: Element) {
    node.classList.add("outro");
    return {
      tick(t: number) {
        node.classList.toggle("outro", t !== 1);
      },
    };
  }
</script>

<Layout>
  <div class="page" class:outro={false} out:outro|global>
    {@render children?.()}
  </div>
</Layout>

<style>
  .page {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    padding: 15px 15px 30px;
  }

  .outro {
    position: absolute;
    top: 0;
    left: 0;

    overflow: hidden;

    width: 100%;
    height: 100%;
  }
</style>
