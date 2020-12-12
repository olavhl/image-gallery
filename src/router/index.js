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
  },
  {
    path: '/tropical',
    name: 'Tropical',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tropical.vue')
  },
  {
    path: '/forests',
    name: 'Forests',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forests.vue')
  },
  {
    path: '/snowy',
    name: 'Snowy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Snowy.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
