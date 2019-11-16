<script context="module">
  import Card from "./Card.svelte";
  import ProjectImage from "./ProjectImage.svelte";

  const months = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December"
  ];
  function formatReleaseDate(dateString) {
    const [, year, , month] = dateString.match(
      /^([0-9]{4})(-([0-9]{2}))?(-([0-9]{2}))?$/
    );
    if (month) {
      return months[parseInt(month, 10) - 1] + " " + year;
    }
    return year;
  }
</script>

<script>
  export let project;
  $: image = project.image;
</script>

<style lang="scss">
  .project-card__footer {
    display: flex;
    justify-content: space-between;
  }
  .project-card__release-date {
    color: #aaa;
  }
</style>

<Card>
  <h1>{project.title}</h1>
  {#if image}
    <ProjectImage
      src={image.src}
      width={image.width}
      height={image.height}
      alt={image.alt} />
  {/if}
  {@html project.content}
  <div class="project-card__footer">
    <a href="portfolio">&lt; Terug naar portfolio</a>
    <span class="project-card__release-date">
      {formatReleaseDate(project.released)}
    </span>
  </div>

</Card>
