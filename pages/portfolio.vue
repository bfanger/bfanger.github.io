<template>
  <div>
    <NavButton to="/" type="previous" class="portfolio__previous"
      >Home</NavButton
    >
    <Card>
      <h1>Portfolio van Bob Fanger</h1>
      <div v-for="{ year, projects } in projectsByYear" :key="year">
        <h2>{{ year }}</h2>
        <ul>
          <li v-for="project in projects" :key="project.slug">
            <nuxt-link :to="'projects/' + project.slug">{{
              project.title
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </Card>
    <ProjectDisclaimer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../components/Card.vue";
import ProjectDisclaimer from "../components/ProjectDisclaimer.vue";
import NavButton from "../components/NavButton.vue";

export default {
  components: { Card, ProjectDisclaimer, NavButton },
  head() {
    return {
      title: "Bob Fanger's portfolio",
      link: [
        { rel: "cannonical", href: `https://bfanger.nl${this.$route.path}` }
      ]
    };
  },
  computed: {
    ...mapGetters({
      projectsByYear: "projects/groupedByYear"
    })
  },
  async fetch({ store }) {
    await store.dispatch("projects/fetchAll");
  }
};
</script>

<style lang="scss">
.portfolio__previous {
  position: fixed;
  bottom: calc(50% - 35px);
  left: calc(50vw - 550px);
  transform: translateX(-50%);
  @media (max-width: 1290px) {
    left: 30px;
    transform: none;
  }
  @media (max-width: 880px) {
    bottom: 40px;
    left: 40px;
    // transform: translateX(-50%);
  }
}
</style>
