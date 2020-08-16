<script lang="ts">
  import { onMount } from "svelte"
  let image: HTMLImageElement
  let opacity = 0

  onMount(() => {
    if (image.complete) {
      loaded()
    }
  })

  function loaded() {
    opacity = 1
  }
</script>

<style lang="scss">
  .background {
    position: fixed;
    top: 0;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    transition: 2.5s opacity 0.5s;
    will-change: opacity;
    width: 100%;
    filter: blur(50px);
    @media (max-aspect-ratio: 1/1) {
      width: 150%;
    }
    @media (max-aspect-ratio: 3/5) {
      width: 200%;
    }
  }
</style>

<img
  bind:this={image}
  class="background"
  style="opacity: {opacity}"
  src="images/millennial-colors.jpg"
  draggable={false}
  alt=""
  on:load={loaded} />
