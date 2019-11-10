<script>
  import { fade } from "svelte/transition";

  export let appear = true;
  let inTransition = fade;
  export { inTransition as in };
  export let out = fade;
  export let homepage = false;
  function animateIn(node) {
    if (Array.isArray(inTransition)) {
      return inTransition[0](node, inTransition[1]);
    }
    return inTransition(node, {});
  }
  function animateOut(node) {
    if (Array.isArray(out)) {
      return out[0](node, out[1]);
    }
    return out(node, {});
  }
</script>

<style lang="scss">
  .card {
    display: block;
    background: rgba(#ffffff, 0.9);
    min-width: 33%;
    width: 100%;
    max-width: 760px;
    padding: 10px 20px;
    box-sizing: border-box;
    box-shadow: 6px 6px 60px rgba(black, 0.2);
    @media (min-width: 500px) {
      padding: 25px 30px;
    }
  }
  .card--homepage {
    position: relative;
    width: auto;
    border-radius: 50px !important;
  }
  // Add a 0.35s delay to the container
  //   .v-leave-active .card--slide-left,
  //   .v-enter-active .card--slide-left,
  //   .v-leave-active .card--slide-right,
  //   .v-enter-active .card--slide-right {
  //     transform: translateX(0px);
  //     opacity: 1;
  //   }
  //   .v-enter-active .card--slide-left,
  //   .v-enter-active .card--slide-right {
  //     transition: 0.35s transform cubic-bezier(0.1, 0.4, 0.7, 1.1),
  //       opacity 0.2s ease-out;
  //   }
  //   .v-leave-active .card--slide-left,
  //   .v-leave-active .card--slide-right {
  //     transition: 0.25s transform cubic-bezier(0.2, 0, 0.9, 0.5), opacity 0.25s;
  //   }
  //   .v-enter .card--slide-left {
  //     transform: translateX(20%) scale(0.8);
  //     opacity: 0;
  //   }
  //   .v-leave-to .card--slide-left {
  //     transform: translateX(-50%) scale(0.5);
  //     opacity: 0;
  //   }

  //   .v-enter .card--slide-right {
  //     transform: translateX(-20%) scale(0.8);
  //     opacity: 0;
  //   }
  //   .v-leave-to .card--slide-right {
  //     transform: translateX(50%) scale(0.5);
  //     opacity: 0;
  //   }
</style>

<div in:animateIn out:animateOut class="card" class:card--homepage={homepage}>
  <slot />
</div>
