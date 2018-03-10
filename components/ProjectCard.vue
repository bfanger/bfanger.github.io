<template>
  <Card>
    <nuxt-link to="/portfolio">&lt; Terug naar portfolio</nuxt-link>
    <h1 class="h2">{{ project.title }}</h1>
    <img v-if="project.image" :src="'https://bfanger.nl/thumbs/660w/' + project.image" class="project-card__image">
    <div v-html="project.description"/>
  </Card>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  props: {
    project: { type: Object, required: true }
  }
};
</script>

<style lang="scss">
.project-card__image {
  display: block;
  max-width: 100%;
  margin-bottom: 1em;
}
</style>
