<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    href: string;
    type: "next" | "previous";
    onmousedown?: () => void;
    children?: Snippet;
  };
  let { href, type, onmousedown, children }: Props = $props();
</script>

<a
  {href}
  data-sveltekit-preload-data
  class="nav-button"
  class:next={type === "next"}
  class:previous={type === "previous"}
  onmousedown={() => onmousedown?.()}
>
  <div class="label">
    {@render children?.()}
  </div>
</a>

<style>
  .nav-button {
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;

    height: 70px;
    padding-right: 25px;
    padding-left: 25px;
    border-radius: 35px;

    background: linear-gradient(
      to bottom,
      rgb(0 0 0 / 80%),
      rgb(0 0 0 / 70%) 30%,
      rgb(0 0 0 / 70%) 70%,
      rgb(0 0 0 / 80%)
    );
    backdrop-filter: blur(8px);
    box-shadow: 2px 2px 30px rgb(0 0 0 / 20%);

    &:hover {
      text-decoration: none;
    }
  }

  .label {
    font:
      400 22px/70px Glory,
      sans-serif;
    color: white;
    text-shadow: 0 0 10px rgb(0 0 0 / 50%);
  }

  .previous,
  .next {
    .label {
      overflow: hidden;
      max-width: 0;
      transition: 0.15s all;
    }

    @media (hover: hover) {
      &:hover .label {
        max-width: 400px;
        transition: 0.25s all;
      }
    }
  }

  .next {
    padding-right: 20px;
    padding-left: 22px;

    &::after {
      content: "";

      display: inline-block;

      width: 28px;
      height: 40px;

      background: url("/images/nav-button-next.svg") no-repeat center center;
      background-size: contain;
    }

    @media (hover: hover) {
      &:hover .label {
        padding-right: 10px;
      }
    }
  }

  .previous {
    padding-right: 23px;
    padding-left: 19px;

    &::before {
      content: "";

      display: inline-block;

      width: 28px;
      height: 40px;

      background: url("/images/nav-button-previous.svg") no-repeat center center;
      background-size: contain;
    }

    @media (hover: hover) {
      &:hover .label {
        padding-left: 10px;
      }
    }
  }
</style>
