<script>
  import Card from "./Card.svelte";

  export let project;
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
  function releaseDate() {
    const [, year, , month] = project.released.match(
      /^([0-9]{4})(-([0-9]{2}))?(-([0-9]{2}))?$/
    );
    if (month) {
      return months[parseInt(month, 10) - 1] + " " + year;
    }
    return year;
  }
  function loaded() {
    // opacity = 1;
    // const duration = Date.now() - mountedAt;
    // if (duration < 150) {
    //   fadeDuration = 0.2;
    // }
    height = "auto";
  }
</script>

<style lang="scss">
  .project-card__image {
    display: block;
    align-self: center;
    max-width: 100%;
    max-height: 50vh;
    box-shadow: 3px 0px 15px rgba(#000, 0.05);
    width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5em;
    border-radius: 3px;
    will-change: opacity;
  }
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
  {#if project.image}
    <img
      ref="image"
      src={project.image.src}
      width={project.image.width}
      height={project.image.height}
      class="project-card__image"
      alt={project.alt}
      on:load={loaded} />
  {/if}
  <!-- :style="{ opacity, height, transition: fadeDuration + 's opacity' }" -->
  {@html project.description}
  <div class="project-card__footer">
    <a href="portfolio">&lt; Terug naar portfolio</a>
    <span class="project-card__release-date">{releaseDate()}</span>
  </div>

</Card>
