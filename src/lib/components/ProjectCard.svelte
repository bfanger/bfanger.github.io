<script context="module" lang="ts">
  import Card from "./Card.svelte";
  import ProjectImage from "./ProjectImage.svelte";
</script>

<script lang="ts">
  import type { Project } from "$lib/project-fns";
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
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html project.content}
  <div class="footer">
    <a href="/portfolio">&lt; Terug naar portfolio</a>
    <span class="release-date">
      {formatReleaseDate(project.released)}
    </span>
  </div>
</Card>

<style>
  .footer {
    display: flex;
    justify-content: space-between;
  }

  .release-date {
    color: #aaa;
  }
</style>
