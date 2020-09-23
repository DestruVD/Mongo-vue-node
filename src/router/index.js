import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../views/WelcomePage/WelcomePage';
import Register from '../views/Register/Register.vue'
import Agenda from '../views/Agenda/Agenda.vue'
import ContactUs from '../views/ContactUs/ContactUs.vue'
import Login from '../views/Login/Login.vue'

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

const router = new VueRouter({ routes })

export default router
