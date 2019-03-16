<template>
  <div ref="container" class="gps-map" />
</template>

<script>
import { mapState } from "vuex";

function injectCss() {
  if (!injectCss.promise) {
    injectCss.promise = new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.href = "https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css";
      link.rel = "stylesheet";
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
  return injectCss.promise;
}
export default {
  props: {
    token: { type: String, required: true }
  },
  computed: {
    ...mapState({
      locations: state => state.map.locations
    })
  },
  watch: {
    locations: {
      handler: "updateLine",
      deep: true
    }
  },
  async mounted() {
    const cssPromise = injectCss();
    const historyPromise = this.$store.dispatch("map/history");
    const {
      Map,
      default: mapboxgl
    } = await import("mapbox-gl/dist/mapbox-gl.js");
    mapboxgl.accessToken = this.token;
    await historyPromise;
    let last = this.locations[0];
    if (!last) {
      last = { lat: 52.490033, lng: 4.760233 };
    }
    await cssPromise;
    const map = new Map({
      container: this.$refs.container,
      style: "mapbox://styles/mapbox/streets-v11",
      center: last,
      zoom: 13.5
    });
    this.geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: this.locations.map(l => [l.lng, l.lat])
          }
        }
      ]
    };
    map.on("load", () => {
      map.addLayer({
        id: "lines",
        type: "line",
        layout: {
          "line-cap": "round",
          "line-join": "round"
        },
        paint: {
          "line-width": 3,
          "line-color": "#F7455D"
        },
        source: {
          type: "geojson",
          data: this.geojson
        }
      });
      this.ready = true;
    });
    this.map = map;
    this.$store.dispatch("map/updates");
  },
  methods: {
    updateLine(locations) {
      if (!this.ready) {
        return;
      }
      const source = this.map.getSource("lines");
      if (!source) {
        return;
      }
      this.geojson.features[0].geometry.coordinates = locations.map(l => [
        l.lng,
        l.lat
      ]);
      this.map.getSource("lines").setData(this.geojson);
    }
  }
};
</script>

<style lang="scss">
.gps-map {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #e6e4e0;
}
</style>
