<script lang="ts">
  import { Vector3 } from "three";
  import { onMount } from "svelte";
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  type Teaser = {
    title: string;
    slug: string;
    thumbnail: string;
    aspect: string;
  };

  type Props = {
    teasers: Teaser[];
  };
  let { teasers }: Props = $props();
  let loaded = $state<Record<string, boolean>>({});
  let elapsed = $state(0);
  let timeScale = new Tween(1);
  let clientHeight = $state(1);
  let radius = $derived.by(() => {
    if (clientHeight > 420) {
      return 80;
    }
    if (clientHeight < 200) {
      return 20;
    }
    return 20 + (clientHeight / 3 - 80);
  });
  const pitch = 75;
  const omega = -Math.PI / 3;
  const distance = 0.6;
  const speed = 0.0005;

  function helix(offset: number): Vector3 {
    const angle = omega * offset;
    return new Vector3(
      offset * pitch,
      radius * Math.cos(angle),
      radius * Math.sin(angle),
    );
  }

  function offsetFor(index: number) {
    const repeat =
      (index * distance + elapsed * speed) % (teasers.length * distance);
    return -repeat + teasers.length / 2;
  }

  let raf: number;
  let previous: number = 0;
  const animate: FrameRequestCallback = (time: number) => {
    const dt = time - previous;
    previous = time;
    elapsed += dt * timeScale.current;

    raf = requestAnimationFrame(animate);
  };

  onMount(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  });
</script>

<div
  class="viewport"
  in:fade|global={{ delay: 500, duration: 700 }}
  bind:clientHeight
>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="helix"
    onmouseenter={() => timeScale.set(0, { duration: 800, easing: cubicOut })}
    onmouseleave={() => timeScale.set(1, { duration: 2000, delay: 100 })}
  >
    {#each teasers as teaser, i}
      {@const { x, y, z } = helix(offsetFor(i))}
      <a
        href="/projects/{teaser.slug}"
        class="node"
        style:transform="translate3d({x}px, {y}px, {z}px) rotateY(-70deg)"
        data-sveltekit-preload="hover"
      >
        <img
          class="image"
          src={teaser.thumbnail}
          alt={teaser.title}
          style:opacity={loaded[teaser.thumbnail] ? 1 : 0}
          style:--aspect={teaser.aspect}
          {@attach (img: HTMLImageElement) => {
            if (img.complete) {
              loaded[teaser.thumbnail] = true;
            } else {
              img.addEventListener(
                "load",
                () => {
                  loaded[teaser.thumbnail] = true;
                },
                { once: true },
              );
            }
          }}
        />
      </a>
    {/each}
  </div>
</div>

<style>
  .viewport {
    position: fixed;
    z-index: 0;
    inset: 50% 0 0;

    overflow: hidden;

    max-width: 2880px;
    margin-inline: auto;

    perspective: 1500px;

    mask-image: linear-gradient(to right, black 30%, rgb(0 0 0 / 40%));

    @media (width>2000px) {
      mask-image: linear-gradient(
        to right,
        transparent,
        black 100px,
        black 30%,
        rgb(0 0 0 / 40%) calc(100% - 100px),
        transparent
      );
    }
  }

  .helix {
    position: absolute;
    top: 60%;
    transform-style: preserve-3d;
    transform: rotateX(10deg) rotateY(35deg);

    width: 100vw;
    height: 0;

    @media (height<600px) {
      transform: rotateX(5deg) rotateY(35deg);
    }
  }

  .node {
    position: absolute;
    transform-style: preserve-3d;
    width: 0;
    height: 0;
  }

  .image {
    transform: translate(-50%, -50%);

    aspect-ratio: 1/1;
    height: 8rem;
    border-radius: 2rem;

    object-fit: cover;

    transition:
      aspect-ratio 0.3s ease,
      height 0.3s ease,
      transform 0.5s ease,
      opacity 0.7s linear;
    transition-behavior: allow-discrete;

    @supports (corner-shape: squircle) {
      border-radius: 4rem;

      corner-shape: squircle;
    }

    &:hover {
      transform: translate(-50%, -50%) rotateY(10deg);
      aspect-ratio: var(--aspect);
      height: 10rem;
      border-radius: 8px;
    }
  }
</style>
