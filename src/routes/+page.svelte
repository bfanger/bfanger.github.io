<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Card from "$lib/components/Card.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import NavButton from "$lib/components/NavButton.svelte";
  import Page from "$lib/components/Page.svelte";
  import cardTransition from "../services/cardTransition";

  let { data } = $props();

  const introVisible = data.withIntro;
  let cardVisible = $state(data.withCard);
  let skipped = $derived(data.skipped);
  let Avatar: any = $state(undefined);
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
          <img src="images/avatar.webp" class="avatar" alt="Bob Fanger" />
          <div class="avatar">
            {#if Avatar}
              <Avatar />
            {/if}
          </div>
          <h1 class="title">Hoi, ik ben Bob&nbsp;Fanger</h1>
          <p>
            Ik ben een webdeveloper bij
            <a href="https://www.this.nl/">This.nl </a>
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
        class="porfolio"
        in:fly|global={{
          y: 50,
          delay: skipped ? 0 : 100,
          duration: skipped ? 250 : 600,
        }}
      >
        <NavButton
          type="next"
          href="/portfolio"
          onmousedown={() => {
            cardTransition.set("left");
          }}
        >
          Portfolio
        </NavButton>
      </div>
    {/if}
  </div>
</Page>

<style>
  .title {
    font-size: clamp(22px, calc(18px + 1.136vw), 32px);
  }

  .avatar {
    position: absolute;
    top: calc(100% - 10px);
    left: -140px;

    overflow: hidden;

    width: 180px;
    height: 180px;
    border: 4px solid white;
    border-radius: 50%;

    box-shadow: -2px 4px 20px rgb(0 0 0 / 10%);

    @media (width <= 730px) {
      top: auto;
      bottom: calc(100% + 20px);
      left: calc(50% - 90px);
    }
  }

  .porfolio {
    position: fixed;
    right: calc(50vw - 550px);
    bottom: calc(50% - 35px);
    transform: translateX(50%);

    @media (width <= 1290px) {
      right: 30px;
      transform: none;
    }

    @media (width <= 880px) {
      right: 50%;
      bottom: 40px;
      transform: translateX(50%);
    }
  }
</style>
