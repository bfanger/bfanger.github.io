<template>
  <div class="project-page">
    <NavButton
      v-if="!project.previous"
      to="/portfolio"
      type="previous"
      class="project-page__previous"
      @mousedown="slide('right')"
    >
      Portfolio
    </NavButton>
    <NavButton
      v-if="project.previous"
      :to="{ name: 'projects-slug', params: { slug: project.previous } }"
      type="previous"
      class="project-page__previous"
      @mousedown="slide('right')"
    >
      Vorige
    </NavButton>

    <ProjectCard :project="project" class="project-page__card" />

    <NavButton
      v-if="project.next"
      :to="{ name: 'projects-slug', params: { slug: project.next } }"
      type="next"
      class="project-page__next"
      @mousedown="slide('left')"
    >
      Volgende
    </NavButton>
    <ProjectDisclaimer class="project-page__disclaimer" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavButton from "../../components/NavButton.vue";
import ProjectCard from "../../components/ProjectCard.vue";
import ProjectDisclaimer from "../../components/ProjectDisclaimer.vue";
import preload from "../../services/preload";

export default {
  components: { NavButton, ProjectCard, ProjectDisclaimer },
  transition: { name: "v", mode: "" },
  computed: {
    ...mapGetters({ projectBySlug: "projects/bySlug" }),
    slug() {
      const slug = this.$route.params.slug;
      if (slug.endsWith(".html")) {
        return slug.substr(0, slug.length - 5);
      }
      return slug;
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
    await store.dispatch("projects/cached", params.slug);
  },
  mounted() {
    window.addEventListener("keydown", this.pressed);
    this.$nextTick(async () => {
      if (this.project.next) {
        // preload net project
        const next = await this.$store.dispatch(
          "projects/cached",
          this.project.next
        );
        preload(next.image.src);
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.pressed);
  },
  methods: {
    ...mapActions("transition", ["slide"]),
    pressed(e) {
      if (e.altKey || e.shiftKey || e.metaKey) {
        return;
      }
      if (e.key === "ArrowLeft" && this.project.previous) {
        this.slide("right");
        this.$router.push({ params: { slug: this.project.previous } });
      } else if (e.key === "ArrowRight" && this.project.next) {
        this.slide("left");
        this.$router.push({ params: { slug: this.project.next } });
      }
    }
  }
};
</script>

<style lang="scss">
.project-page {
  transition-delay: 0.35s;
}
.project-page__previous {
  position: fixed;
  z-index: 1;
  bottom: calc(50% - 35px);
  left: calc(50vw - 550px);
  transform: translateX(-50%);
  @media (max-width: 1290px) {
    left: 30px;
    transform: none;
  }
  @media (max-width: 880px) {
    bottom: 50px;
    left: 20px;
  }
}
.project-page__card {
  will-change: transform, opacity;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 880px) {
    margin-top: 0;
    margin-bottom: 70px;
  }
}
.project-page__next {
  position: fixed;
  z-index: 1;
  bottom: calc(50% - 35px);
  right: calc(50vw - 550px);
  transform: translateX(50%);
  @media (max-width: 1290px) {
    right: 30px;
    transform: none;
  }
  @media (max-width: 880px) {
    bottom: 50px;
    right: 20px;
  }
}
.project-page.v-leave-active {
  .project-page__previous,
  .project-page__next,
  .project-page__disclaimer {
    visibility: hidden;
  }
}
</style>
