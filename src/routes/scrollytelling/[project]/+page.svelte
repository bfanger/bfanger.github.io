<script lang="ts">
  import { browser } from "$app/environment";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  export let data;
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<ProjectCard project={data.project} />
{#if !browser}
  <div>
    {#if data.project.before}
      <a href="/scrollytelling/{data.project.before}">Vorige</a>
    {/if}

    {#if data.project.after}
      <a href="/scrollytelling/{data.project.after}">Volgende</a>
    {/if}
  </div>
{/if}
