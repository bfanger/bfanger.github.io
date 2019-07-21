<template>
  <div class="gps-map">
    <div ref="placeholder" class="gps-map__placeholder" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mapboxgl, { Map } from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";
import markerCharlie from "../assets/images/marker-charlie.png";

export default {
  props: {
    token: { type: String, required: true }
  },
  computed: {
    ...mapState({
      locations: state => state.map.locations,
      persons: state => state.map.persons
    })
  },
  watch: {
    locations: {
      handler: "updateLine",
      deep: true
    },
    persons: {
      handler: "updateMarkers",
      deep: true
    }
  },
  async mounted() {
    const historyPromise = this.$store.dispatch("map/history");
    mapboxgl.accessToken = this.token;
    await historyPromise;
    let last = this.locations[0];
    if (!last) {
      last = { lat: 52.490033, lng: 4.760233 };
    }
    const map = new Map({
      container: this.$refs.placeholder,
      style: "mapbox://styles/mapbox/streets-v11",
      center: last,
      zoom: 13.5
    });
    this.map = map;
    this.markers = {};
    this.lines = {
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
          data: this.lines
        }
      });
      this.ready = mapboxgl;
      this.updateMarkers(this.persons);
    });
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
      this.lines.features[0].geometry.coordinates = locations.map(l => [
        l.lng,
        l.lat
      ]);
      this.map.getSource("lines").setData(this.lines);
    },
    updateMarkers(persons) {
      if (!this.ready) {
        return;
      }
      const { Marker } = this.ready;
      for (const person of Object.values(persons)) {
        if (this.markers[person.id]) {
          this.markers[person.id].setLngLat([person.lng, person.lat]);
        } else {
          const icon = document.createElement("img");
          icon.src = markerCharlie;
          icon.className = "gps-map__marker";
          const marker = new Marker({ element: icon, anchor: "bottom" });
          marker.setLngLat([person.lng, person.lat]);
          marker.addTo(this.map);
          this.markers[person.id] = marker;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.gps-map {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: #e6e4e0;
  padding: 0;
}
.gps-map__placeholder {
  width: 100vw;
  height: 100vh;
}
.gps-map__marker {
  width: 37px;
}
</style>
