<script lang="ts">
  export let homepage = false;
</script>

<div class="card" class:homepage>
  <slot />
</div>

<style>
  .card {
    display: block;

    box-sizing: border-box;
    width: 100%;
    min-width: 33%;
    max-width: 760px;
    padding: 10px 20px;

    background: #ffffffe6;
    box-shadow: 6px 6px 60px #0003;

    @media (width >= 500px) {
      padding: 25px 30px;
    }
  }

  .homepage {
    position: relative;
    width: auto;
    border-radius: 50px !important;
  }
</style>
