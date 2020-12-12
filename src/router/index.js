import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mountains',
    name: 'Mountains',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mountains.vue')
  },
  {
    path: '/oceans',
    name: 'Oceans',
    component: () => import(/* webpackChunkName: "about" */ '../views/Oceans.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
