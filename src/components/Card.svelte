<script lang="ts">
  export let homepage: boolean = false
</script>

<div class="card" class:card--homepage={homepage}>
  <slot />
</div>

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
</style>
