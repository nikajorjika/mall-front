import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function (to, from, savedPosition) {
    // const exception = [ 'guest_service', 'about', 'mallTaxi', 'gift_card', 'marketing', 'leasing', 'magazine' ]
    // if ((exception.indexOf(to.name) === -1 && exception.indexOf(from.name) === -1) && to.name !== from.name) {
    // }
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
          name: 'guest_service',
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
          path: 'mall-map',
          name: 'mallMap',
          props: true,
          component: () => import('./components/page-components/about-us/TbilisiMallMap.vue')
        },
        {
          path: 'leasing',
          name: 'leasing',
          props: true,
          component: () => import('./components/page-components/about-us/Leasing.vue')
        },
        {
          path: 'magazine',
          name: 'magazine',
          props: true,
          component: () => import('./components/page-components/about-us/Magazine.vue')
        },
        {
          path: 'gift-card',
          name: 'gift_card',
          props: true,
          component: () => import('./components/page-components/about-us/GiftCard.vue')
        },
        {
          path: 'tbilisi-mall-taxi',
          name: 'mallTaxi',
          props: true,
          component: () => import('./components/page-components/about-us/MallTaxi.vue')
        }
      ]
    },
    {
      path: '/:locale/page',
      props: true,
      component: () => import('./views/StaticPage.vue'),
      children: [
        {
          path: '',
          name: 'DefaultStatic',
          props: true,
          component: () => import('./components/page-components/statics/AboutCompany.vue')
        },
        {
          path: 'about-company',
          name: 'AboutCompany',
          props: true,
          component: () => import('./components/page-components/statics/AboutCompany.vue')
        },
        {
          path: 'career',
          name: 'Career',
          props: true,
          component: () => import('./components/page-components/statics/Career.vue')
        },
        {
          path: 'how-to-get',
          name: 'HowToGet',
          props: true,
          component: () => import('./components/page-components/statics/HowToGet.vue')
        },
        {
          path: 'contact',
          name: 'Contact',
          props: true,
          component: () => import('./components/page-components/statics/Contact.vue')
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
      path: '/choose/santa',
      name: 'promoPage',
      props: true,
      component: () => import('./views/PromoPage.vue')
    },
    {
      path: '/:locale/media',
      name: 'Media',
      props: true,
      component: () => import('./views/Media.vue')
    },
    {
      path: '/:locale/store/:slug?/:store?',
      name: 'singleStore',
      props: true,
      component: () => import('./views/SingleStore.vue')
    },
    {
      path: '/:locale/whats-new/:cat?/:slug?/:id?',
      name: 'whats-new',
      props: true,
      component: () => import('./views/News.vue')
    },
    {
      path: '/:locale/entertainment/:cat?',
      name: 'entertainment',
      props: true,
      component: () => import('./views/Entertainment.vue')
    },
    {
      path: '/:locale/services/:cat?',
      name: 'services',
      props: true,
      component: () => import('./views/Services.vue')
    },
    {
      path: '/:locale/user/notifications',
      name: 'notifications',
      props: true,
      component: () => import('./views/Notifications.vue')
    },
    {
      path: '/:locale/user/subscribed',
      name: 'subscribed',
      props: true,
      component: () => import('./views/Subscribed.vue')
    },
    {
      path: '/:locale/user/bookmarks',
      name: 'bookmarks',
      props: true,
      component: () => import('./views/Bookmarks.vue')
    },
    {
      path: '/:locale/user/settings',
      name: 'settings',
      props: true,
      component: () => import('./views/Settings.vue')
    },
    {
      path: '/:locale/login',
      name: 'login',
      props: true,
      component: () => import('./views/Login.vue')
    },
    {
      path: '/:locale/password/recovery',
      name: 'passwordRecovery',
      props: true,
      component: () => import('./views/PasswordReset.vue')
    },
    {
      path: '/:locale/reset/password/:resetToken',
      name: 'renewPassword',
      props: true,
      component: () => import('./views/RenewPassword.vue')
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
  const aboutPages = [ 'guest_service', 'about', 'mallTaxi', 'gift_card', 'marketing', 'leasing', 'magazine' ]
  if (aboutPages.indexOf(to.name) !== -1 && to.name !== from.name) {
    store.commit('SET_LOADING_STATE', { model: 'page', value: true })
  }
  next()
})

export default router
