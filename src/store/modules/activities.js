
const getters = {};

const state = {
    data: [],
};

const mutations = {
    addActivity: (state, data) => {
        state.data.unshift(data)
    },
    removeItem: (state, data) => {
        state.data = state.data.filter( e => e.key != data.key)
    }
};

const actions = {
    addActivity: (context, data) => {
        context.commit('addActivity', data)
    },
    removeItem: (context, data) => {
        context.commit('removeItem', data)
    }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
