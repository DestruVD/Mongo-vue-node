import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'bootstrap';
import './assets/app.scss';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  axios,
  VueAxios,
  Vuex,
  store,
  render: h => h(App)
}).$mount('#app')
