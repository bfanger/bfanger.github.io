<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Card from "$lib/components/Card.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import NavButton from "$lib/components/NavButton.svelte";
  import Page from "$lib/components/Page.svelte";
  import cardTransition from "../services/cardTransition";

  export let data;

  const introVisible = data.withIntro;
  let cardVisible = data.withCard;
  $: skipped = data.skipped;
  let Avatar: any = undefined;
  const isServer = typeof window === "undefined";

  if (!import.meta.env.SSR) {
    void import("$lib/components/Avatar.svelte").then((m) => {
      Avatar = m.default;
    });
  }

  onMount(() => {
    (window as any).introPromise.then(() => {
      cardVisible = true;
    });
  });
</script>

<svelte:head>
  <title>BFanger.nl - Bob Fanger</title>
</svelte:head>
<Page>
  {#if introVisible}
    <Intro />
  {/if}

  <div hidden={isServer}>
    {#if cardVisible}
      <div
        in:fly|global={{ y: 50, duration: skipped ? 250 : 500 }}
        out:fly|global={{ x: -100 }}
      >
        <Card homepage>
          <img
            src="images/avatar.webp"
            class="homepage__avatar"
            alt="Bob Fanger"
          />
          <div class="homepage__avatar">
            {#if Avatar}
              <svelte:component this={Avatar} />
            {/if}
          </div>
          <h1 class="homepage__title">Hoi, ik ben Bob&nbsp;Fanger</h1>
          <p>
            Ik ben een webdeveloper bij
            <a
              href="https://www.thisisdevelopment.nl/"
              title="This is Development"
            >
              Th[is] Development
            </a>
            .
            <br />
            Daarnaast ben ik ook actief op:
            <br />
            <a href="https://github.com/bfanger/">
              <i class="icon-github"></i>
              GitHub
            </a>
            en
            <a href="https://stackoverflow.com/users/19165/bob-fanger">
              StackOverflow
            </a>
          </p>
        </Card>
      </div>
      <div
        class="homepage--porfolio"
        in:fly|global={{
          y: 50,
          delay: skipped ? 0 : 100,
          duration: skipped ? 250 : 600,
        }}
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
