<template>
  <div>
    <NavButton 
      v-if="!project.previous"
      to="/portfolio" 
      type="previous"
      class="project-page__previous">Portfolio</NavButton>
    <NavButton 
      v-if="project.previous"
      :to="{ name:'projects-slug', params: { slug: project.previous }}" 
      type="previous"
      class="project-page__previous">Vorige</NavButton>

    <ProjectCard 
      :project="project" 
      class="project-page__card"/>

    <NavButton 
      v-if="project.next"
      :to="{ name:'projects-slug', params: { slug: project.next }}" 
      type="next"
      class="project-page__next">Volgende</NavButton>
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
    await store.dispatch("projects/cached", params.slug);
  },
  mounted() {
    window.addEventListener("keydown", this.pressed);
    this.$nextTick(() => {
      if (this.project.next) {
        this.$store.dispatch("projects/cached", this.project.next); // preload net project
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.pressed);
  },
  methods: {
    pressed(e) {
      if (e.altKey || e.shiftKey || e.metaKey) {
        return;
      }
      if (e.key === "ArrowLeft" && this.project.previous) {
        this.$router.push({ params: { slug: this.project.previous } });
      } else if (e.key === "ArrowRight" && this.project.next) {
        this.$router.push({ params: { slug: this.project.next } });
      }
    }
  }
};
</script>

<style lang="scss">
.project-page__portfolio {
  margin: auto;
}
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
    bottom: 20px;
    left: 20px;
  }
}
.project-page__card {
  @media (max-width: 880px) {
    margin-bottom: 50px;
  }
}
.project-page__next {
  position: fixed;
  z-index: 1;
  bottom: calc(50% -35px);
  right: calc(50vw - 550px);
  transform: translateX(50%);
  @media (max-width: 1290px) {
    right: 30px;
    transform: none;
  }
  @media (max-width: 880px) {
    bottom: 20px;
    right: 20px;
  }
}
</style>
