<script lang="ts">
  import { onMount } from "svelte";
  import gtm from "../services/gtm";

  let el: HTMLElement;
  let minHeight: string = "";

  onMount(() => {
    if (el.clientHeight !== window.innerHeight) {
      // 100vh doesn't works in this browser (or the content doesn't fit)
      window.addEventListener("resize", detectHeight);
      detectHeight();
    }
    return unmount;
  });
  function unmount() {
    window.removeEventListener("resize", detectHeight);
  }
  function onNavigation() {
    gtm({
      event: "VirtualPageview",
      virtualPageUrl: location.pathname,
      virtualPageTitle: document.title,
    });
  }
  function detectHeight() {
    minHeight = window.innerHeight + "px";
  }
</script>

<svelte:window on:sveltekit:navigation-end={onNavigation} />
<div
  class="layout"
  style={minHeight ? "min-height: " + minHeight : ""}
  bind:this={el}
>
  <slot />
</div>

<style lang="scss">
  @import "../util.scss";

  :global(html) {
    font: 300 62.5%/ 1.4 "Titillium Web", sans-serif;
    height: 100%;
    background: #5c6ae4;
  }
  :global(body) {
    background: #5c6ae4;
    color: #333;
    margin: 0;
    font-size: 1.5rem;
    min-height: 100%;
  }
  @font-face {
    font-family: "Titillium Web";
    src: local("Titillium Web24 Light"),
      url("/fonts/titillium-web-light.woff2") format("woff2"),
      url("/fonts/titillium-web-light.woff") format("woff");
    font-weight: 300;
  }

  :global(h1, h2, h3) {
    font-weight: 300;
    font-family: "Raleway", sans-serif;
    color: #4a4a4a;
    margin-top: 0;
    margin-bottom: 0.4em;
  }
  :global(h1, .h1) {
    @include fluid-property(font-size, 22px, 40px);
  }
  :global(h2, .h2) {
    @include fluid-property(font-size, 20px, 30px);
  }
  :global(h3, .h3) {
    font-size: 22px;
  }
  :global(p, ul, ol) {
    margin-top: 0;
  }
  :global(a) {
    color: #0f68d1;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .layout {
    min-height: 100vh;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  :global(.background) {
    position: fixed;
    top: 0;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    transition: 2.5s opacity 0.5s;
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
