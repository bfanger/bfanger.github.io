<script lang="ts">
  import { writable } from "svelte/store";
  import observeSize from "../../../services/observeSize";

  export let scroll: number;

  const padding = 16;

  const size = writable<ResizeObserverSize>({ inlineSize: 0, blockSize: 0 });

  function y(offset: number, itemHeight: number): number {
    const screenHeight = window.innerHeight;
    const halfScreen = screenHeight / 2;
    if (offset > 1) {
      // 1.0: cardbottom at screentop
      return -itemHeight;
    }
    if (offset < -1) {
      // -1.0: cardtop at screenbottom
      return screenHeight;
    }
    if (offset > 0.5) {
      // 0.5: cardbottom at screenmiddle
      const process = (offset - 0.5) * 2;
      return -itemHeight + halfScreen - halfScreen * process;
    }
    if (offset < -0.5) {
      // -0.5: cardtop at screenmiddle
      const process = (offset + 1.5) * 2 - 1;
      return screenHeight - halfScreen * process;
    }
    // -0.5 till 0.5
    const process = offset + 0.5;
    return halfScreen - itemHeight * process;
  }

  function transform(offset: number, itemHeight: number): string {
    if (itemHeight === 0) {
      return "";
    }
    let scale = 1;
    if (offset > 0.75 && offset < 1) {
      const progress = (offset - 0.75) * 4;
      scale = 1 - progress * progress * 0.2;
    }
    if (offset < -0.5 && offset > -1) {
      const progress = (offset + 0.5) * -2;
      scale = 1 - progress * progress * 0.3;
    }
    return `translateY(${y(offset, itemHeight + padding)}px) scale(${scale})`;
  }
</script>

<div
  class="item"
  style:transform={transform(scroll, $size.blockSize)}
  use:observeSize={size}
>
  <slot />
</div>

<style lang="scss">
  .item {
    position: absolute;
    top: 0;
    will-change: transform;
    @media (max-width: 768px) {
      left: 0;
      width: 100%;
    }
    @media (min-width: 768px) {
      left: calc(50% - 380px);
      width: 760px;
    }
  }
</style>
