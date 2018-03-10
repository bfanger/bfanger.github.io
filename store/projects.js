import Vue from "vue";
import { sortBy } from "lodash";
import api from "../services/api";

export const strict = true;

export const state = () => ({
  entities: {},
  recent: []
});
export const actions = {
  async fetchAll({ commit }) {
    const entities = await api.get("projects");
    commit("fetched", entities);
  },
  async fetchRecent({ commit }) {
    const entities = await api.get("projects");
    const projects = sortBy(entities, "released")
      .reverse()
      .slice(0, 5);
    commit("fetched", projects);
  },
  async fetch({ commit }, slug) {
    const entity = await api.get("projects/" + slug);
    commit("fetched", [entity]);
  }
};

export const mutations = {
  fetched(state, entities) {
    for (const entity of entities) {
      Vue.set(state.entities, entity.slug, entity);
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
