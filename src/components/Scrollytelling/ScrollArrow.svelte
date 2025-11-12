<script lang="ts">
  import { resolve } from "$app/paths";
  import { scale } from "svelte/transition";

  type Props = {
    slug: string;
    title: string;
    direction: "up" | "down";
    move: (delta: number) => Promise<void>;
  };
  let { slug, title, direction, move }: Props = $props();
</script>

<a
  transition:scale={{ duration: 200 }}
  class="scroll-arrow"
  class:up={direction === "up"}
  class:down={direction === "down"}
  href={resolve("/projects/[project]", { project: slug })}
  data-sveltekit-replacestate
  aria-label={direction === "up" ? "Vorige" : "Volgende"}
  onclick={(e) => {
    e.preventDefault();
    void move(direction === "up" ? -1 : 1);
  }}
>
  <img
    draggable="false"
    class="arrow"
    src="/images/nav-button-next.svg"
    alt=""
    height="42"
    width="28"
  />
  {title}
</a>

<style>
  .scroll-arrow {
    cursor: pointer;
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    font-size: 0;
    color: transparent;

    backface-visibility: hidden;
    background: linear-gradient(
      to bottom,
      rgb(0 0 0 / 80%),
      rgb(0 0 0 / 70%) 30%,
      rgb(0 0 0 / 70%) 70%,
      rgb(0 0 0 / 80%)
    );
    backdrop-filter: blur(8px);
    box-shadow: 2px 2px 30px rgb(0 0 0 / 20%);

    &:focus-visible {
      outline: 3px solid rgb(255 255 255 / 80%);
      outline-offset: 3px;
    }

    @media (width <= 1000px) {
      width: 70px;
      height: 70px;
    }

    @media (width > 1000px) {
      width: 50px;
      height: 50px;
    }
  }

  .arrow {
    aspect-ratio: 28 / 42;
    height: auto;
    transition: ease-out transform 0.1s;

    @starting-style {
      transform: translateY(0) rotate(0deg) !important;
    }

    :active & {
      transition-duration: 0s;
    }

    .up & {
      transform: translateY(-2px) rotate(-90deg);
    }

    .down & {
      transform: translateY(2px) rotate(90deg);
    }

    .up:active & {
      transform: translateY(-5px) rotate(-90deg);
    }

    .down:active & {
      transform: translateY(5px) rotate(90deg);
    }

    @media (width <= 1000px) {
      width: 28px;
    }

    @media (width > 1000px) {
      width: 20px;
    }
  }
</style>
