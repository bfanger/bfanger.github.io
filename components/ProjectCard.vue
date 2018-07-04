<template>
  <Card>
    <nuxt-link to="/portfolio">&lt; Terug naar portfolio</nuxt-link>
    <div 
      ref="content"
      class="project-card">
      <h1 class="project-card__title">{{ project.title }}</h1>
      <img 
        v-if="project.image" 
        ref="image"
        :src="project.image.src" 
        :width="project.image.width"
        :height="project.image.height"
        :style="{ opacity, height, transition: fadeDuration + 's opacity' }"
        class="project-card__image"
        @load="loaded">
      <div v-html="project.description"/>
    </div>
  </Card>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: { Card },
  props: {
    project: { type: Object, required: true }
  },
  data: () => ({
    fadeDuration: 0.5,
    opacity: 0,
    height: "auto"
  }),
  mounted() {
    this.mountedAt = Date.now();
    const { width, height } = this.project.image;
    const autoHeight = Math.ceil(
      this.$refs.content.getBoundingClientRect().width / (width / height)
    );
    const halfScreen = window.innerHeight / 2;
    if (autoHeight < halfScreen) {
      this.height = autoHeight + "px";
    } else {
      this.height = halfScreen + "px";
    }
    this.timeout = setTimeout(() => {
      if (this.$refs.image.complete) {
        this.opacity = 1;
      }
    }, 300);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: {
    loaded() {
      this.opacity = 1;
      const duration = Date.now() - this.mountedAt;
      if (duration < 150) {
        this.fadeDuration = 0.2;
      }
      this.height = "auto";
    }
  }
};
</script>

<style lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
}
.project-card__image {
  display: block;
  align-self: center;
  max-width: 100%;
  max-height: 50vh;
  box-shadow: 3px 0px 15px rgba(#000, 0.05);
  width: auto;
  margin-bottom: 1.5em;
  border-radius: 3px;
  will-change: opacity;
}
</style>
