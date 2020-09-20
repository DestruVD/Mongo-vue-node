import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    LoginRequest(context, credentials) {
      axios.post("http://localhost:3000/api/users/pseudo", {
        pseudo: credentials.pseudo,
        password: credentials.password
      })
        .then(function (response) {
          const token = response.data.accessToken
          localStorage.setItem('jwt', token)
          context.commit('retrieveToken', token)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    Disconnect(context) {
      console.log('test2')
      context.commit('disconnect')
    }
  },
  modules: {
  }
})
