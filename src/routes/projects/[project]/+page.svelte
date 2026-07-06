<script lang="ts">
  import ProjectCard from "../../../components/ProjectCard.svelte";

  let { data } = $props();
</script>

<ProjectCard project={data.project} />
