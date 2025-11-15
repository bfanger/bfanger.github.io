<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    index: number;
    screenHeight: number;
    inert?: boolean;
    children: Snippet;
  };

  let { index, screenHeight, inert, children }: Props = $props();
</script>

<div class="item" {inert} style:top={`${index * screenHeight}px`}>
  <div>
    {@render children()}
  </div>
</div>

<style>
  .item {
    isolation: isolate;
    position: absolute;
    top: 0;

    display: grid;
    place-items: center;

    width: 100%;
    min-height: 100svh;

    animation-name: appear;
    animation-duration: 1ms; /* Firefox requires this to */
    animation-fill-mode: both;
    animation-timeline: --subject-reveal;
    view-timeline: --subject-reveal block;
  }

  @keyframes appear {
    0% {
      scale: 0.4;
      opacity: 0;
    }

    30% {
      opacity: 1;
    }

    40% {
      scale: 1;
    }

    60% {
      translate: 0 0;
    }

    100% {
      translate: 0 -100px;
    }
  }
</style>
