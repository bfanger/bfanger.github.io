<script lang="ts">
  import Card from "./Card.svelte";
  import ProjectImage from "./ProjectImage.svelte";
  import type { Project } from "$lib/project-fns";
  import { formatReleaseDate } from "$lib/formatDate";

  type Props = {
    project: Project;
  };
  let { project }: Props = $props();

  let image = $derived(project.image);
</script>

<Card>
  <h1 class="title">{project.title}</h1>
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
    <span class="release-date">
      {formatReleaseDate(project.released)}
    </span>
  </div>
</Card>

<style>
  .title {
    @media (width < 500px) {
      margin-bottom: 10px;
    }

    @media (width >= 500px) {
      margin-bottom: 20px;
      line-height: 1;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
  }

  .release-date {
    color: #aaa;
  }
</style>
