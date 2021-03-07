<script lang="ts">
  import { fade } from "svelte/transition"
</script>

<footer class="disclaimer" transition:fade>
  Deze projecten zijn gerealiseerd tijdens mijn dienstperiode bij de diverse
  werkgevers en zijn de concept & design fases reeds door overige partijen
  uitgevoerd.
</footer>

<style lang="scss">
  .disclaimer {
    font-size: 12px;
    color: #fff;
    padding: 15px 15px 3px 15px;
    text-align: center;

    @media screen and (max-width: 800px) {
      font-size: 9px;
    }
  }
</style>
