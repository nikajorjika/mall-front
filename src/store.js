import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios/index'
import messages from './lang/lang'
import navigation from './store/modules/navigation'
import hamburgerData from './store/modules/hamburgerData'
import stores from './store/modules/stores'
import events from './store/modules/events'
import googleMap from './store/modules/map'
import pageData from './store/modules/pageData'
import footerData from './store/modules/footerData'
import newsFilters from './store/modules/newsFilters'
import storeFilters from './store/modules/storeFilters'
import storesList from './store/modules/storesList'
import alphabet from './store/modules/alphabet'
import { apiUrls, apiCredentials } from './store/modules/apiData'
import entertainment from './store/modules/entertainments'
import entertainmentList from './store/modules/entertainmentList'
import dateOptions from './store/modules/dateOptions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    noScroll: false,
    languages: [
      {
        name: 'ENG',
        locale: 'en'
      },
      {
        name: 'ქარ',
        locale: 'ka'
      }
    ],
    loading: {
      stores: false,
      events: false
    },
    locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : 'en',
    navigation: navigation,
    hamburgerData: hamburgerData,
    events: events,
    stores: stores,
    storesList: storesList,
    entertainment: entertainment,
    entertainmentList: entertainmentList,
    messages: messages,
    apiUrls: apiUrls,
    apiCredentials: apiCredentials,
    googleMap: googleMap,
    alphabet: alphabet,
    dateOptions: dateOptions,
    socials: [
      {
        icon: 'facebook-f',
        name: 'facebook',
        url: 'https://facebook.com'
      },
      {
        icon: 'twitter',
        name: 'twitter',
        url: 'https://facebook.com'
      },
      {
        icon: 'youtube',
        name: 'youtube',
        url: 'https://facebook.com'
      },
      {
        icon: 'pinterest',
        name: 'pinterest',
        url: 'https://facebook.com'
      }
    ],
    pageData: pageData,
    footer: footerData,
    newsFilters: newsFilters,
    storeFilters: storeFilters
  },
  mutations: {
    SET_LOCALE: (state, locale) => {
      state.locale = locale
      localStorage.setItem('locale', locale)
    },
    SET_NO_SCROLL: (state, newValue) => {
      state.noScroll = newValue
    },
    SET_NAVIGATION: (state, newValue) => {
      state.noScroll = newValue
    },
    LOAD_MORE: (state, payload) => {
      const model = payload.model
      payload.data.forEach(function (element) {
        state[ model ].push(element)
      })
    },
    SET_LOADING_STATE: (state, payload) => {
      state.loading[ payload.model ] = payload.value
    }
  },
  getters: {
    noScroll: (state) => {
      return state.noScroll
    },
    alphabet: (state) => {
      return state.alphabet
    },
    navigation: (state) => {
      return state.navigation
    },
    events: (state) => {
      return state.events
    },
    stores: (state) => {
      return state.stores
    },
    storesList: (state) => {
      return state.storesList
    },
    entertainment: (state) => {
      return state.entertainment
    },
    entertainmentList: (state) => {
      return state.entertainmentList
    },
    googleMap: (state) => {
      return state.googleMap
    },
    socials: (state) => {
      return state.socials
    },
    locale: (state) => {
      return state.languages.find(e => e.locale === state.locale)
    },
    languages: (state) => {
      return state.languages
    },
    footerMenus: (state) => {
      return state.footer.footerMenus
    },
    message: (state, index) => {
      return state.messages[ index ]
    },
    storeFilters: (state) => {
      return state.storeFilters
    }
  },
  actions: {
    loadItems: function (context, request) {
      return new Promise((resolve, reject) => {
        const url = request.url
        const model = request.model
        const page = request.page === undefined ? 0 : request.page
        const offset = request.offset === undefined ? 1 : request.offset
        context.commit('SET_LOADING_STATE', { model: model, value: true })
        Axios.get(`${url}/${page}/${offset}`)
          .then(function (response) {
            context.commit('LOAD_MORE', { model: model, data: response.data.data })
            context.commit('SET_LOADING_STATE', { model: model, value: false })
            if (response.data.data.length < offset) {
              resolve('NOT_ENOUGH_RECORDS')
            } else {
              resolve(response.data.data)
            }
          })
          .catch(function (error) {
            console.log(error)
            reject(error)
            context.commit('SET_LOADING_STATE', { model: model, value: false })
          })
      })
    },
    loadStoreList: function (context, request) {
      return new Promise((resolve, reject) => {
        const url = request.url
        const model = request.model
        const page = request.page === undefined ? 0 : request.page
        const offset = request.offset === undefined ? 1 : request.offset
        context.commit('SET_LOADING_STATE', { model: model, value: true })
        Axios.get(`${url}/${page}/${offset}`)
          .then(function (response) {
            context.commit('LOAD_MORE', { model: model, data: response.data.data })
            context.commit('SET_LOADING_STATE', { model: model, value: false })
            if (response.data.data.length < offset) {
              resolve('NOT_ENOUGH_RECORDS')
            } else {
              resolve(response.data.data)
            }
          })
          .catch(function (error) {
            console.log(error)
            reject(error)
            context.commit('SET_LOADING_STATE', { model: model, value: false })
          })
      })
    },
    loadSingle: function (context, request) {
      return new Promise((resolve, reject) => {
        const url = request.url
        const id = request.id
        Axios.get(`${url}/${id}`)
          .then(function (response) {
            if (!response.data.data) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response.data.data)
            }
          })
          .catch(function (error) {
            console.log(error)
            reject(error)
          })
      })
    },
    findStore: function (context, request) {
      return new Promise((resolve, reject) => {
        if (request) {
          let store = context.getters.stores.filter(function (item) {
            return item._id === request
          })
          if (store.length) {
            resolve(store)
          } else {
            context.dispatch('loadSingle', {
              url: `${context.state.apiUrls.singleItemUrl}`,
              id: request,
              model: 'store'
            }).then(function (response) {
              console.log(response)
            }).catch(function (error) {
              console.log(error)
            })
          }
        }
      })
    }
  }
})
