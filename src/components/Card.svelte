<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    homepage?: boolean;
    children?: Snippet;
  };
  let { homepage = false, children }: Props = $props();
</script>

<div class="card" class:homepage>
  {@render children?.()}
</div>

<style>
  .card {
    display: block;

    box-sizing: border-box;
    width: calc(100vw - 32px);
    min-width: 33%;
    max-width: 760px;
    margin-inline: auto;
    padding: 10px 20px;
    border-radius: 20px;

    background: #ffffffe6;
    box-shadow: 6px 6px 60px #0003;

    corner-shape: squircle;

    @media (width >= 500px) {
      padding: 25px 30px;
    }
  }

  .homepage {
    position: relative;
    width: auto;
    border-radius: 50px;

    @supports (corner-shape: squircle) {
      border-radius: 70px;
    }
  }
</style>
