<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="project">
    <h4 class="project__date"></h4>
    <h1 class="project__title">{{ project.title }}</h1>
    <div class="project__image">
      <img
        :src="project.image.src"
        :width="project.image.width"
        :height="project.image.height"
      />
    </div>
    <div class="project__description" v-html="project.description" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ projectBySlug: "projects/bySlug" }),
    slug() {
      return this.$route.params.slug;
    },
    project() {
      return this.projectBySlug(this.slug);
    }
  },
  async fetch({ params, store }) {
    await store.dispatch("projects/cached", params.slug);
  }
};
</script>

<style lang="scss">
@import "../../util.scss";

.project {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project__title {
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  @include fluid-property(font-size, 28px, 40px);
}
.project__image {
  max-width: 760px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;

  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.3);
    height: auto;
    display: block;
  }
}
.project__description {
  background: white;
  border-radius: 30px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  padding: 15px 20px;
  max-width: 500px;
  margin-top: auto;
  margin-left: 45px;
  margin-right: 45px;
  margin-bottom: 30px;

  p:last-child {
    margin-bottom: 0;
  }
}
</style>
