<template>
  <img
    ref="image"
    :style="{ opacity }"
    class="background"
    src="../assets/images/millennial-colors.jpg"
    draggable="false"
    @load="loaded"
  />
</template>

<script>
export default {
  data: () => ({
    opacity: 0
  }),
  mounted() {
    if (this.$refs.image.complete) {
      this.loaded();
    }
  },
  methods: {
    loaded() {
      this.opacity = 1;
    }
  }
};
</script>

<style lang="scss">
.background {
  position: fixed;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  transition: 2.5s opacity 0.5s;
  will-change: opacity;
  width: 100%;
  filter: blur(50px);
  @media (max-aspect-ratio: 1/1) {
    width: 150%;
  }
  @media (max-aspect-ratio: 3/5) {
    width: 200%;
  }
}
</style>
