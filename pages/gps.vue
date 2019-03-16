<template>
  <GpsMap v-if="mapbox_token" :token="mapbox_token" />
  <form v-else @submit.prevent="login">
    <input v-model="username" type="text" />
    <input v-model="password" type="password" />
    <input type="submit" value="login" />
  </form>
</template>

<script>
import { mapState } from "vuex";
import GpsMap from "../components/GpsMap.vue";

export default {
  components: { GpsMap },
  data: () => ({
    username: "",
    password: ""
  }),
  computed: {
    ...mapState({
      mapbox_token: state => state.map.mapbox_token
    })
  },
  async mounted() {
    const credentials = JSON.parse(
      sessionStorage.getItem("gps/authentication")
    );
    if (credentials) {
      try {
        await this.$store.dispatch("map/authenticate", credentials);
      } catch (err) {
        console.warn(err); // eslint-disable-line no-console
        sessionStorage.removeItem("gps/authentication");
      }
    }
  },
  methods: {
    async login() {
      const credentials = {
        username: this.username,
        password: this.password
      };
      await this.$store.dispatch("map/authenticate", credentials);
      sessionStorage.setItem("gps/authentication", JSON.stringify(credentials));
    }
  }
};
</script>
