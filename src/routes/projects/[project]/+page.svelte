<script lang="ts">
  import { browser } from "$app/environment";
  import { resolve } from "$app/paths";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
  {#if data.project.canonical}
    <link rel="canonical" href="/projects/{data.project.canonical}" />
  {/if}
</svelte:head>

<ProjectCard project={data.project} />
{#if !browser}
  <div>
    {#if data.project.before}
      <a
        href={resolve("/projects/[project]", {
          project: data.project.before,
        })}
      >
        Vorige
      </a>
    {/if}

    {#if data.project.after}
      <a
        href={resolve("/projects/[project]", {
          project: data.project.after,
        })}
      >
        Volgende
      </a>
    {/if}
  </div>
{/if}
