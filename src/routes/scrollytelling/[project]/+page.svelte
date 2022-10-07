<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<ProjectCard project={data.project} />
