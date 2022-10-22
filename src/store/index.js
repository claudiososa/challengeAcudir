import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import activities from './modules/activities'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modeDark: true,
  },
  getters: {
  },
  mutations: {
    changeMode (state){
      state.modeDark = !state.modeDark
    }
  },
  actions: {
    changeModeDark(context){
      context.commit('changeMode')
    }
  },
  modules: { login, activities },
  //plugins: [createPersistedState()],
})
