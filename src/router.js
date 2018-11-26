import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'
import Axios from 'axios/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: `/${store.getters.locale.locale}`
    },
    {
      path: '/:locale',
      name: 'home',
      component: Home
    },
    {
      path: '/:locale/about-us',
      props: true,
      component: () => import('./views/About.vue'),
      children: [
        {
          path: '',
          name: 'about',
          props: true,
          component: () => import('./components/page-components/about-us/PageBlock.vue')
        },
        {
          path: 'guest-service',
          name: 'guestService',
          props: true,
          component: () => import('./components/page-components/about-us/GuestServicePage.vue')
        },
        {
          path: 'marketing',
          name: 'marketing',
          props: true,
          component: () => import('./components/page-components/about-us/Marketing.vue')
        },
        {
          path: 'leasing',
          name: 'leasing',
          props: true,
          component: () => import('./components/page-components/about-us/Leasing.vue')
        }
      ]
    },
    {
      path: '/:locale/stores/:cat?',
      name: 'stores',
      props: true,
      component: () => import('./views/Stores.vue')
    },
    {
      path: '/:locale/store/details/:store?',
      name: 'singleStore',
      props: true,
      component: () => import('./views/SingleStore.vue')
    },
    {
      path: '/:locale/whats-new/:cat?/:id?',
      name: 'whats-new',
      props: true,
      component: () => import('./views/News.vue')
    },
    {
      path: '/:locale/entertainment',
      name: 'entertainment',
      props: true,
      component: () => import('./views/Entertainment.vue')
    },
    {
      path: '/:locale/login',
      name: 'login',
      props: true,
      component: () => import('./views/Login.vue')
    },
    {
      path: '/:locale/register',
      name: 'registration',
      props: true,
      component: () => import('./views/Registration.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  let language = to.params.locale
  if (language) {
    const languages = store.getters.languages
    languages.forEach(function (object, index) {
      if (object.locale === language) {
        store.commit('SET_LOCALE', object.locale)
      }
    })
  }
  const sessionToken = sessionStorage.getItem('websiteAuthToken')
  if (sessionToken === null || sessionToken === '' || sessionToken === undefined || sessionToken === 'undefined') {
    Axios.post(store.state.apiUrls.websiteAuthURL, {
      username: store.state.apiCredentials.username,
      password: store.state.apiCredentials.password
    }).then((response) => {
      sessionStorage.setItem('websiteAuthToken', response.data.token)
      Axios.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + response.data.token
      next()
    }).catch((error) => {
      console.log(error)
    })
  } else {
    Axios.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + sessionToken
    next()
  }
})

export default router
