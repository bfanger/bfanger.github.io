<script context="module" lang="ts">
  import Card from "../components/Card.svelte"
  import { cardIn, cardOut } from "../services/cardTransition"
  import Page from "../components/Page.svelte"
</script>

<Page>
  <div in:cardIn out:cardOut>
    <Card>
      <h1>404</h1>
      <p>Pagina niet gevonden</p>
      <a href="/">&lt; Terug naar home</a>
    </Card>
  </div>
</Page>
