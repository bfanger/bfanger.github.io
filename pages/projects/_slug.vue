<template>
  <div>
    <NavButton 
      to="/portfolio" 
      type="previous"
      class="project-page__previous">Portfolio</NavButton>
    <ProjectCard :project="project"/>
    <ProjectDisclaimer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavButton from "../../components/NavButton.vue";
import ProjectCard from "../../components/ProjectCard.vue";
import ProjectDisclaimer from "../../components/ProjectDisclaimer.vue";

export default {
  components: { NavButton, ProjectCard, ProjectDisclaimer },
  computed: {
    ...mapGetters({ projectBySlug: "projects/bySlug" }),
    slug() {
      return this.$route.params.slug;
    },
    project() {
      return this.projectBySlug(this.slug);
    }
  },
  head() {
    return {
      title: this.project.title,
      link: [
        { rel: "cannonical", href: `https://bfanger.nl${this.$route.path}` }
      ]
    };
  },
  async fetch({ params, store }) {
    // if (params.slug.endsWith(".html")) {
    //   const strippedSlug = params.slug.substr(0, params.slug.length - 5);
    //   redirect(301, { name: "projects-slug", params: { slug: strippedSlug } });
    //   return;
    // }
    await store.dispatch("projects/fetch", params.slug);
  }
};
</script>

<style lang="scss">
.project-page__previous {
  position: fixed;
  z-index: 1;
  bottom: calc(50% -35px);
  left: calc(50vw - 550px);
  transform: translateX(-50%);
  @media (max-width: 1290px) {
    left: 30px;
    transform: none;
  }
  @media (max-width: 880px) {
    bottom: 40px;
    left: 40px;
  }
}
</style>
