<script context="module" lang="ts">
  import Card from "./Card.svelte";
  import ProjectImage from "./ProjectImage.svelte";
</script>

<script lang="ts">
  import { formatReleaseDate } from "$lib/formatDate";
  import type { Project } from "$lib/Project";

  export let project: Project;
  $: image = project.image;
</script>

<Card>
  <h1>{project.title}</h1>
  {#if image}
    <ProjectImage
      src={image.src}
      width={image.width}
      height={image.height}
      alt={image.alt}
    />
  {/if}
  {@html project.content}
  <div class="footer">
    <a href="/portfolio">&lt; Terug naar portfolio</a>
    <span class="release-date">
      {formatReleaseDate(project.released)}
    </span>
  </div>
</Card>

<style lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
  }
  .release-date {
    color: #aaa;
  }
</style>
