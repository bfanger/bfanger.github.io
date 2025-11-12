<script lang="ts">
  import ProjectCard from "../../../components/ProjectCard.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
  {#if data.project.canonical}
    <link rel="canonical" href="/projects/{data.project.canonical}" />
  {/if}
</svelte:head>

<ProjectCard project={data.project} />
