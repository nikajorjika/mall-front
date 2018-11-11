import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us/:page?',
      name: 'about',
      props: true,
      component: () => import('./views/About.vue')
    },
    {
      path: '/stores/:cat?',
      name: 'stores',
      props: true,
      component: () => import('./views/Stores.vue')
    },
    {
      path: '/store/details/:store?',
      name: 'singleStore',
      props: true,
      component: () => import('./views/SingleStore.vue')
    },
    {
      path: '/whats-new/:cat?/:id?',
      name: 'whats-new',
      props: true,
      component: () => import('./views/News.vue')
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      props: true,
      component: () => import('./views/Entertainment.vue')
    },
    {
      path: '/login',
      name: 'login',
      props: true,
      component: () => import('./views/Login.vue')
    }
  ]
})
