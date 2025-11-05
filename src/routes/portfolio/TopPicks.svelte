<script lang="ts">
  import { resolve } from "$app/paths";
  import type { RawProject } from "$lib/project-fns";
  import cardTransition from "../../services/cardTransition";

  type Props = {
    projects: RawProject[];
  };
  let { projects }: Props = $props();
</script>

<ul class="top-picks">
  {#each projects as project}
    <li>
      <a
        class="top-pick"
        href={resolve("/projects/[project]", {
          project: project.slug,
        })}
        data-sveltekit-noscroll
        onmousedown={() => cardTransition.set("left")}
      >
        <div class="title">
          <span>
            {project.title}
          </span>
        </div>
        <img class="image" src="/build/img/{project.image}" alt={project.alt} />
      </a>
    </li>
  {/each}
</ul>

<style>
  .top-picks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px 10px;

    padding: 0;

    list-style: none;

    > li {
      display: contents;
    }

    @media (width > 600px) {
      gap: 8px 24px;
    }
  }

  .top-pick {
    display: grid;
    grid-row: span 2;
    grid-template-rows: subgrid;

    &:hover {
      text-decoration: none;
    }
  }

  .title {
    display: flex;
    grid-row: 1 / 2;
    align-items: end;
    justify-content: center;

    font:
      450 18px Glory,
      sans-serif;
    color: black;
    text-align: center;

    @media (width >= 500px) {
      font-size: 24px;
    }
  }

  .image {
    grid-row: 2 / 3;

    aspect-ratio: 4 / 3;
    width: 100%;
    border-radius: 16px;

    object-fit: cover;

    transition: ease-in-out 0.1s transform;

    @supports (corner-shape: squircle) {
      border-radius: 40px;

      corner-shape: squircle;
    }

    .top-pick:hover & {
      transform: scale(1.02);
    }
  }
</style>
