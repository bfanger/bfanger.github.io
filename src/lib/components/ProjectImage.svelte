<script lang="ts">
  import { noop } from "lodash-es";
  import { tick } from "svelte";

  type Props = {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };

  let {
    src,
    width,
    height,
    alt = "Een screenshot van het project",
  }: Props = $props();

  let img: HTMLImageElement | undefined = $state();

  const css = $state({
    height: "auto",
  });

  async function loading(url: string) {
    noop(url);
    if (!img) {
      return;
    }
    if (!img.parentElement) {
      throw new Error("Unexpected");
    }
    const autoHeight = Math.ceil(
      img.parentElement.getBoundingClientRect().width / (width / height),
    );
    const halfScreen = window.innerHeight / 2;
    if (autoHeight < halfScreen) {
      css.height = `${autoHeight}px`;
    } else {
      css.height = `${halfScreen}px`;
    }
    await tick();
    if (img.complete) {
      loaded();
    }
  }
  function loaded() {
    css.height = "auto";
  }
  $effect(() => {
    void loading(src);
  });
  let style = $derived(`max-width: 100%; height: ${css.height};`);
</script>

<img
  bind:this={img}
  class="project-image"
  {style}
  {src}
  {width}
  {height}
  {alt}
  onload={loaded}
/>

<style>
  .project-image {
    display: block;
    align-self: center;

    width: auto;
    max-height: 50vh;
    margin-right: auto;
    margin-bottom: 1.5em;
    margin-left: auto;
    border-radius: 3px;

    box-shadow: 3px 0 15px #0000000d;
  }
</style>
