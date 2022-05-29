export const namespaced = true;

export const state = {
  scribeLevel: 0,
};

export const getters = {
  getScribeLevel: (state) => Number(state.scribeLevel),
};

export const actions = {
  setScribeLevel(context, scribeLevel) {
    context.commit("setScribeLevel", scribeLevel);
  },
};

export const mutations = {
  setScribeLevel(state, scribeLevel) {
    state.scribeLevel = scribeLevel;

    localStorage.setItem('scribeLevel', scribeLevel);
  },
};
