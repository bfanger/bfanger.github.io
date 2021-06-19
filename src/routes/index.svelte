<script lang="ts" context="module">
  export async function load({}) {
    const isServer = typeof window === "undefined";
    if (!isServer) {
      await window["introPromise"];
    }
    return {
      props: {
        introVisible: true,
        isServer,
      },
    };
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Intro from "../components/Intro.svelte";
  import NavButton from "../components/NavButton.svelte";
  import Page from "../components/Page.svelte";
  import Card from "../components/Card.svelte";
  import cardTransition from "../services/cardTransition";
  import Async from "../components/Async.svelte";
  import Avatar from "../components/AsyncAvatar";

  export let introVisible: boolean;
  export let isServer: boolean;
  let cardVisible = isServer;

  onMount(async () => {
    introVisible = false;
    cardVisible = true;
  });
</script>

<svelte:head>
  <title>BFanger.nl - Bob Fanger</title>
</svelte:head>
<Page>
  {#if isServer}
    <Intro />
  {/if}

  <div hidden={isServer}>
    {#if cardVisible}
      <div in:fly={{ y: 50, duration: 500 }} out:fly={{ x: -100 }}>
        <Card homepage>
          <img
            src="images/avatar.jpg"
            class="homepage__avatar"
            alt="Bob Fanger"
          />
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
          <slot />
        </Card>
      </div>
      <div
        class="homepage--porfolio"
        in:fly={{ y: 50, delay: 100, duration: 600 }}
      >
        <NavButton
          type="next"
          href="/portfolio"
          on:mousedown={() => {
            cardTransition.set("left");
          }}
        >
          Portfolio
        </NavButton>
      </div>
    {/if}
  </div>
</Page>

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
