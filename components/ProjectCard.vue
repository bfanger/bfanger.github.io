<template>
  <Card>
    <nuxt-link to="/portfolio">&lt; Terug naar portfolio</nuxt-link>
    <h1 class="h2">{{ project.title }}</h1>
    <figure class="project-card__image">
      <img 
        v-if="imageUrl" 
        :src="imageUrl">
    </figure>
    <div v-html="project.description"/>
  </Card>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  props: {
    project: { type: Object, required: true }
  },
  computed: {
    imageUrl() {
      const { image } = this.project;
      if (image) {
        return "/build/img/" + image;
      }
    }
  }
};
</script>

<style lang="scss">
.project-card__image {
  display: block;
  padding: 1px;
  margin: 0;
  margin-bottom: 1em;
  background: linear-gradient(
    to bottom,
    #c6c6c6,
    #a4a4a4 60%,
    #a4a4a4 64%,
    #919191
  );
  img {
    margin: auto;
    display: block;
    max-width: 100%;
    max-height: 50vh;
  }
}
</style>
