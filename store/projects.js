import Vue from "vue";
import { sortBy } from "lodash";
import api from "../services/api";

export const strict = true;
const requests = {};

export const state = () => ({
  entities: {}
});
export const actions = {
  async fetchAll({ commit }) {
    const items = await api.get("projects");
    commit("fetched", items);
  },

  cached({ state, dispatch }, slug) {
    if (state.entities[slug]) {
      return state.entities[slug];
    }
    if (requests[slug]) {
      return requests[slug];
    }
    return dispatch("fetch", slug);
  },

  async fetch({ commit }, slug) {
    requests[slug] = api.get("projects/" + slug);
    const entity = await requests[slug];
    commit("fetched", [entity]);
    delete requests[slug];
    return entity;
  }
};

export const mutations = {
  fetched(state, items) {
    for (const item of items) {
      Vue.set(state.entities, item.slug, item);
    }
  },
  recent(state, recent) {
    state.recent = recent;
  }
};

export const getters = {
  bySlug: state => slug => state.entities[slug],
  groupedByYear(state) {
    const byYear = [];
    const collected = {};
    const sorted = sortBy(Object.values(state.entities), "released").reverse();
    for (const project of sorted) {
      if (!project.released) {
        console.warn("No release date", project); // eslint-disable-line no-console
        continue;
      }
      const match = project.released.toString().match(/^[0-9]+/);
      const year = parseInt(match[0], 10);
      if (collected[year]) {
        collected[year].projects.push(project);
      } else {
        collected[year] = { year, projects: [project] };
        byYear.push(collected[year]);
      }
    }
    return byYear;
  },
  recent(state) {
    return sortBy(Object.values(state.entities), "released")
      .reverse()
      .slice(0, 5);
  }
};
