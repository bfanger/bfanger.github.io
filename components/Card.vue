<template>
  <div class="card" :class="slideClass"><slot /></div>
</template>

<script>
export default {
  props: {
    slide: { type: String, default: "" }
  },
  computed: {
    slideClass() {
      if (this.slide) {
        return "card--slide-" + this.slide;
      }
      return "";
    }
  }
};
</script>

<style lang="scss">
.card {
  display: block;
  background: rgba(#ffffff, 0.9);
  border-radius: 2px;
  min-width: 33%;
  width: 100%;
  max-width: 760px;
  padding: 10px 20px;
  box-sizing: border-box;
  box-shadow: 6px 6px 60px rgba(black, 0.2);
  @media (min-width: 500px) {
    padding: 25px 30px;
  }
}
// Add a 0.35s delay to the container
.v-leave-active .card--slide-left,
.v-enter-active .card--slide-left,
.v-leave-active .card--slide-right,
.v-enter-active .card--slide-right {
  transform: translateX(0px);
  opacity: 1;
}
.v-enter-active .card--slide-left,
.v-enter-active .card--slide-right {
  transition: 0.35s transform cubic-bezier(0.1, 0.4, 0.7, 1.1),
    opacity 0.2s ease-out;
}
.v-leave-active .card--slide-left,
.v-leave-active .card--slide-right {
  transition: 0.25s transform cubic-bezier(0.2, 0, 0.9, 0.5), opacity 0.25s;
}
.v-enter .card--slide-left {
  transform: translateX(20%) scale(0.8);
  opacity: 0;
}
.v-leave-to .card--slide-left {
  transform: translateX(-50%) scale(0.5);
  opacity: 0;
}

.v-enter .card--slide-right {
  transform: translateX(-20%) scale(0.8);
  opacity: 0;
}
.v-leave-to .card--slide-right {
  transform: translateX(50%) scale(0.5);
  opacity: 0;
}
</style>
