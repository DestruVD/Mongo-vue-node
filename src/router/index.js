import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from '../components/WelcomePage';
import Register from '../views/Register.vue'
import Agenda from '../views/Agenda.vue'
import ContactUs from '../views/ContactUs.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
