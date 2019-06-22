export const strict = true;

export const state = () => ({
  slideDirection: ""
});
export const actions = {
  slide({ state, commit }, direction) {
    if (state.slideDirection !== direction) {
      commit("slide", direction);
    }
  }
};

export const mutations = {
  slide(state, direction) {
    state.slideDirection = direction;
  }
};
