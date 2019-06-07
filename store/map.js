import Vue from "vue";
import mqtt from "../services/mqtt";

export function state() {
  return {
    mapboxToken: "",
    locations: [],
    persons: {}
  };
}
export const actions = {
  async authenticate({ commit }, { username, password }) {
    await mqtt.connect({
      protocol: "wss",
      host: "mqtt.bfanger.nl",
      port: 8083,
      username,
      password
    });

    const mapboxToken = await mqtt.rpc("mapbox_token");
    commit("authenticated", mapboxToken.toString());
  },

  async history({ commit }, last = "8h") {
    const buffer = await mqtt.rpc("history/gps/charlie", last);
    let json = buffer.toString();
    if (json === "null") {
      json = "[]";
    }
    const locations = JSON.parse(json);
    commit("locations", locations);
    return locations;
  },
  async updates({ commit }) {
    const listener = buffer => {
      const latlng = JSON.parse(buffer.toString());
      commit("locations", [latlng]);
      commit("person", { id: "charlie", ...latlng });
    };
    await mqtt.subscribe("sensors/gps/charlie", listener);
    return async function unsubscribe() {
      await mqtt.unsubscribe("sensors/gps/charlie", listener);
    };
  }
};

export const mutations = {
  authenticated(state, mapboxToken) {
    state.mapboxToken = mapboxToken;
  },
  locations(state, locations) {
    state.locations.unshift(...locations);
  },
  person(state, person) {
    const ago = Math.abs(
      new Date().getTime() - new Date(person.time).getTime()
    );
    if (ago < 600000) {
      Vue.set(state.persons, person.id, person);
    }
  }
};
