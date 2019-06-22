<template>
  <div class="default-layout" :style="{ minHeight }">
    <Background />
    <nuxt class="default-layout__body" />
  </div>
</template>

<script>
import Background from "../components/Background.vue";

export default {
  components: { Background },
  data: () => ({
    minHeight: null
  }),
  mounted() {
    if (this.$el.clientHeight !== window.innerHeight) {
      // 100vh doesn't works in this browser (or the content doesn't fit)
      window.addEventListener("resize", this.detectHeight);
      this.detectHeight();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.detectHeight);
  },
  methods: {
    detectHeight() {
      this.minHeight = window.innerHeight + "px";
    }
  }
};
</script>

<style lang="scss">
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.default-layout__body {
  position: relative;
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  &.v-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 100%;
    overflow: hidden;
  }
}
</style>
