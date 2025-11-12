<script lang="ts">
  import Card from "./Card.svelte";
  import type { Project } from "../services/project-fns";
  import { formatReleaseDate } from "../services/formatDate";

  type Props = {
    project: Project;
  };
  let { project }: Props = $props();

  let image = $derived(project.image);
</script>

<Card>
  <h1 class="title">{project.title}</h1>
  {#if image}
    <div class="image-container">
      <img
        class="project-image"
        style:aspect-ratio="{image.width} / {image.height}"
        src={image.src}
        alt={image.alt}
      />
    </div>
  {/if}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div>
    {@html project.content}
  </div>
  {#if project.released}
    <div class="footer">
      <span class="release-date">
        {formatReleaseDate(project.released)}
      </span>
    </div>
  {/if}
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

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .project-image {
    max-width: 100%;
    max-height: 50svh;
    margin-inline: auto;
    border-radius: 3px;

    box-shadow: 3px 0 15px #0000000d;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
  }

  .release-date {
    color: #9b9b9b;
  }
</style>
