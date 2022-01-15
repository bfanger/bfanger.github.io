<script lang="ts">
  import { tick } from "svelte";
  import { noop } from "lodash-es";

  export let src: string;
  export let width: number;
  export let height: number;
  export let alt = "Een screenshot van het project";

  let started: number;
  let img: HTMLImageElement;

  const css = {
    height: "auto",
    opacity: 1,
    duration: "0s",
  };
  $: loading(src);
  $: style = `max-width: 100%; height: ${css.height}; opacity: ${css.opacity}; transition-duration: ${css.duration};`;

  async function loading(url: string) {
    noop(url);
    if (!img) {
      return;
    }
    if (!img.parentElement) {
      throw new Error("Unexpected");
    }
    const autoHeight = Math.ceil(
      img.parentElement.getBoundingClientRect().width / (width / height)
    );
    const halfScreen = window.innerHeight / 2;
    if (autoHeight < halfScreen) {
      css.height = `${autoHeight}px`;
    } else {
      css.height = `${halfScreen}px`;
    }
    css.opacity = 0;
    css.duration = "0s";
    started = Date.now();
    await tick();
    if (img.complete) {
      loaded();
    }
  }
  function loaded() {
    if (Date.now() - started < 150) {
      css.duration = "0.2s";
    } else {
      css.duration = "0.5s";
    }
    css.opacity = 1;
    css.height = "auto";
  }
</script>

<img
  bind:this={img}
  class="project-image"
  {style}
  {src}
  {width}
  {height}
  {alt}
  on:load={loaded}
/>

<style lang="scss">
  .project-image {
    display: block;
    align-self: center;
    max-height: 50vh;
    box-shadow: 3px 0px 15px rgba(#000, 0.05);
    width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5em;
    border-radius: 3px;
    transition-property: opacity;
    will-change: opacity;
  }
</style>
