<template>
  <div>
    <Card>
      <nuxt-link to="/">&lt; Terug naar home</nuxt-link>
      <h1>Portfolio van Bob Fanger</h1>
      <div 
        v-for="{year, projects} in projectsByYear" 
        :key="year">
        <h2>{{ year }}</h2>
        <ul>
          <li 
            v-for="project in projects" 
            :key="project.slug">
            <nuxt-link :to="'projects/' + project.slug">{{ project.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </Card>
    <ProjectDisclaimer/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../components/Card.vue";
import ProjectDisclaimer from "../components/ProjectDisclaimer.vue";

export default {
  components: { Card, ProjectDisclaimer },
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
