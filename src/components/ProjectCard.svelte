<script lang="ts">
  import Card from "./Card.svelte";
  import type { Project } from "../services/project-fns";
  import { formatReleaseDate } from "../services/formatDate";
  import screenSize from "../services/screenSize.svelte";
  import { browser } from "$app/environment";

  type Props = {
    project: Project;
  };
  let { project }: Props = $props();

  let image = $derived(project.image);

  let scaled = $derived.by(() => {
    if (!browser || !image) {
      return { width: undefined, height: undefined };
    }
    let scale = 1;
    if (screenSize.width > 700) {
      scale = Math.min(700 / image.width, 1);
    } else {
      scale = Math.min((screenSize.width - 72) / image.width, 1);
    }
    const size = {
      width: Math.floor(image.width * scale),
      height: Math.floor(image.height * scale),
    };
    if (size.height > screenSize.height * 0.5) {
      scale = (screenSize.height * 0.5) / size.height;
      size.width *= scale;
      size.height *= scale;
    }
    return size;
  });
</script>

<Card>
  <h1 class="title">{project.title}</h1>
  {#if image}
    <div class="image-container">
      <img
        class="project-image"
        src={image.src}
        alt={image.alt}
        width={scaled.width}
        height={scaled.height}
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
    display: block;

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
