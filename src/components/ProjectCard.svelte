<script context="module" lang="ts">
  import Card from "./Card.svelte";
  import ProjectImage from "./ProjectImage.svelte";
  import type { Project } from "../routes/types";
</script>

<script lang="ts">
  import { formatReleaseDate } from "$lib/formatDate";

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
  <div class="project-card__footer">
    <a href="/portfolio">&lt; Terug naar portfolio</a>
    <span class="project-card__release-date">
      {formatReleaseDate(project.released)}
    </span>
  </div>
</Card>

<style lang="scss">
  .project-card__footer {
    display: flex;
    justify-content: space-between;
  }
  .project-card__release-date {
    color: #aaa;
  }
</style>
