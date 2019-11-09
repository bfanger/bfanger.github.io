<script context="module">
  import { writable } from "svelte/store";
  import { fly, fade } from "svelte/transition";
  import Intro from "../components/Intro.svelte";
  import NavButton from "../components/NavButton.svelte";
  import Page from "../components/Page.svelte";
  import Card from "../components/Card.svelte";
  import Async from "../components/Async.svelte";
  const Avatar = import("../components/Avatar.svelte");
  const introVisible = writable(true);
</script>

<script>
  let cardVisible = true; //server sided
  function introCompleted() {
    $introVisible = false;
  }
</script>

<style lang="scss">
  @import "../util";

  .homepage__title {
    @include fluid-property(font-size, 22px, 32px);
  }
  .homepage__avatar {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid white;
    box-shadow: -2px 4px 20px rgba(black, 0.1);
    position: absolute;
    top: calc(100% - 10px);
    left: -140px;
    @media (max-width: 730px) {
      top: auto;
      bottom: calc(100% + 20px);
      left: calc(50% - 90px);
    }
  }
  .homepage--porfolio {
    position: fixed;
    bottom: calc(50% - 35px);
    right: calc(50vw - 550px);
    transform: translateX(50%);
    @media (max-width: 1290px) {
      right: 30px;
      transform: none;
    }
    @media (max-width: 880px) {
      bottom: 40px;
      right: 50%;
      transform: translateX(50%);
    }
  }
</style>

<svelte:head>
  <title>BFanger.nl - Bob Fanger</title>
  <meta
    name="description"
    content="Hoi, ik ben Bob Fanger, een webdeveloper bij Triple. Daarnaast ben
    ik ook actief op GitHub en StackOverflow." />
</svelte:head>
<Page>
  {#if $introVisible}
    <Intro on:complete={introCompleted} />
  {:else}
    <Card
      homepage
      in={node => fly(node, { y: 50, duration: 500 })}
      out={node => fly(node, { x: -100 })}>
      <img src="images/avatar.jpg" class="homepage__avatar" alt="Bob Fanger" />
      <div class="homepage__avatar">
        <Async component={Avatar} />
      </div>
      <h1 class="homepage__title">Hoi, ik ben Bob&nbsp;Fanger</h1>
      <p>
        Ik ben een webdeveloper bij
        <a href="https://www.wearetriple.com/">Triple</a>
        .
        <br />
        Daarnaast ben ik ook actief op:
        <br />
        <a href="https://github.com/bfanger/">
          <i class="icon-github" />
          GitHub
        </a>
        en
        <a href="https://stackoverflow.com/users/19165/bob-fanger">
          StackOverflow
        </a>
      </p>
      <aside />
    </Card>
    <div
      class="homepage--porfolio"
      in:fly={{ y: 50, delay: 100, duration: 600 }}
      out:fade>
      <NavButton type="next" href="/portfolio">Portfolio</NavButton>
    </div>
  {/if}
</Page>
