import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //exemple
    token: (localStorage.getItem('jwt') === undefined ? undefined : localStorage.getItem('jwt')),
    userId: null
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
    },
    getUser(state, information) {
      console.log(information)
      const Header = `Bearer ${information}`
      axios.get("http://localhost:3000/api/users/authUser", {
        headers: {
          "authorization": Header
        }
      })
        .then(function (response) {
          state.userId = response.data
          console.log(response)
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  },
  actions: {
    async LoginRequest(context, credentials) {
      try {
        const rep = await axios.post("http://localhost:3000/api/users/pseudo", credentials)
        const token = rep.data.accessToken
        localStorage.setItem('jwt', token)
        context.commit('retrieveToken', token)
      } catch (err) {
        console.log(err)
      }
    },
    Disconnect(context) {
      context.commit('disconnect')
    }
  },
  modules: {
  }
})
