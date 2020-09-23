import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //exemple
    token: (localStorage.getItem('jwt') === undefined ? undefined : localStorage.getItem('jwt'))
  },
  getters: {
    loggedIn(state) {
      return state.token != undefined ? true : false
    }
  },
  mutations: {
    disconnect(state) {
      localStorage.clear();
      state.token = undefined
    },
    retrieveToken(state, token) {
      state.token = token;
    }
  },
  actions: {

  },
  modules: {

  }
})
