<template>
  <div>
    <Intro v-if="cardVisible === false" @completed="showCard" />
    <transition name="homepage__card">
      <Card v-show="cardVisible" class="homepage__card">
        <h1>Hoi, ik ben Bob&nbsp;Fanger</h1>
        <p>
          Ik ben een webdeveloper bij <a href="http://www.noprotocol.nl/">NoProtocol</a>.<br > Daarnaast ben ik ook actief
          op <a href="https://github.com/bfanger/"><i class="icon-github"/> GitHub</a> en <a href="http://stackoverflow.com/users/19165/bob-fanger">StackOverflow</a>.
        </p>
        <aside>

          <h2>Recente projecten</h2>
          <ul>
            <li v-for="project in recentProjects" :key="project.slug"><nuxt-link :to="'projects/' + project.slug">{{ project.title }}</nuxt-link></li>
          </ul>
          <nuxt-link to="/portfolio">Bekijk alle projecten</nuxt-link>
        </aside>
      </Card>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Intro from "../components/Intro.vue";
import Card from "../components/Card.vue";
export default {
  components: { Intro, Card },
  data: () => ({
    cardVisible: false,
    projects: []
  }),
  computed: mapGetters({
    recentProjects: "projects/recent"
  }),
  async fetch({ store }) {
    await store.dispatch("projects/fetchRecent");
  },
  methods: {
    showCard() {
      this.cardVisible = true;
    }
  }
};
</script>

<style lang="scss">
.homepage__card-enter-active {
  transition: opacity 0.5s, transform 0.5s;
}
.homepage__card-enter {
  opacity: 0;
  transform: translateY(30px);
}
</style>
