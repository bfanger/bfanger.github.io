<template>
  <div>
    <ProjectCard :project="project"/>
    <ProjectDisclaimer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectCard from "../../components/ProjectCard.vue";
import ProjectDisclaimer from "../../components/ProjectDisclaimer.vue";

export default {
  components: { ProjectCard, ProjectDisclaimer },
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
