import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //exemple
    sessionDisconnected: true,
    sessionConnected: false,
    logoutBool: false,
    items: [
      { title: 'Agenda' },
      { title: 'Register' },
      { title: 'Login' },
    ]
  },
  mutations: {
    disconnect(state) {
      state.sessionConnected = false
      state.sessionDisconnected = true
      state.logoutBool = false
      state.items = [
        { title: 'Agenda' },
        { title: 'Register' },
        { title: 'Login' },
      ]
      localStorage.clear();
    },
    connect(state) {
      state.sessionConnected = true
      state.sessionDisconnected = false
      state.logoutBool = true
      state.items = [
        { title: 'Agenda' },
        { title: 'Profil' },
      ]
    }
  },
  actions: {
  },
  modules: {
  }
})
