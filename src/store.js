import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios/index'
import messages from './lang/lang'
import navigation from './store/modules/navigation'
import hamburgerData from './store/modules/hamburgerData'
import googleMap from './store/modules/map'
import pageData from './store/modules/pageData'
import footerData from './store/modules/footerData'
import newsFilters from './store/modules/newsFilters'
import storeFilters from './store/modules/storeFilters'
import alphabet from './store/modules/alphabet'
import { apiUrls, apiCredentials } from './store/modules/apiData'
import dateOptions from './store/modules/dateOptions'
import './mixin/mixin'
import staticPages from './store/modules/staticPages'

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
      events: false,
      page: true
    },
    locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : 'en',
    navigation: navigation,
    hamburgerData: hamburgerData,
    events: [],
    showPromo: true,
    frontPromotions: [],
    frontEvents: [],
    fbLoaded: false,
    frontNewCollections: [],
    frontNews: [],
    contactPage: null,
    stores: [],
    storesList: [],
    servicesList: [],
    entertainmentList: [],
    giftStoresList: [],
    entertainment: [],
    messages: messages,
    apiUrls: apiUrls,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : (sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null),
    apiCredentials: apiCredentials,
    googleMap: googleMap,
    alphabet: alphabet,
    dateOptions: dateOptions,
    aboutUs: null,
    aboutCompany: null,
    career: null,
    leasing: null,
    guestServices: null,
    mallTaxi: null,
    marketing: null,
    giftCard: null,
    magazines: [],
    team: [],
    subscribed: [],
    bookmarked: [],
    notifications: [],
    socials: [],
    media: [],
    storeSearch: '',
    pageData: pageData,
    footer: footerData,
    staticPages: staticPages,
    newsFilters: newsFilters,
    storeFilters: storeFilters,
    homeAds: [],
    categories: [],
    searchResult: [],
    searchFeatured: [],
    sliderItems: [],
    showPopup: false,
    popup: {
      icon: '',
      message: ''
    }
  },
  getters: {
    noScroll: (state) => {
      return state.noScroll
    },
    alphabet: (state) => {
      return state.alphabet
    },
    showPromo: (state) => {
      return state.showPromo
    },
    searchResult: (state) => {
      return state.searchResult
    },
    showPopup: (state) => {
      return state.showPopup
    },
    popup: (state) => {
      return state.popup
    },
    contactPage: (state) => {
      return state.contactPage
    },
    navigation: (state) => {
      return state.navigation
    },
    categories: (state) => {
      return state.categories
    },
    aboutUs: (state) => {
      return state.aboutUs
    },
    aboutCompany: (state) => {
      return state.aboutCompany
    },
    career: (state) => {
      return state.career
    },
    leasing: (state) => {
      return state.leasing
    },
    guestServices: (state) => {
      return state.guestServices
    },
    mallTaxi: (state) => {
      return state.mallTaxi
    },
    media: (state) => {
      return state.media
    },
    marketing: (state) => {
      return state.marketing
    },
    magazines: (state) => {
      return state.magazines
    },
    giftCard: (state) => {
      return state.giftCard
    },
    events: (state) => {
      return state.events
    },
    stores: (state) => {
      return state.stores
    },
    team: (state) => {
      return state.team
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
    servicesList: (state) => {
      return state.servicesList
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
    },
    sliderItems: (state) => {
      return state.sliderItems
    },
    homeAds: (state) => {
      return state.homeAds
    },
    frontPromotions: (state) => {
      return state.frontPromotions
    },
    frontEvents: (state) => {
      return state.frontEvents
    },
    frontNews: (state) => {
      return state.frontNews
    },
    frontNewCollections: (state) => {
      return state.frontNewCollections
    },
    user: (state) => {
      return state.user
    },
    subscribed: (state) => {
      return state.subscribed
    },
    notifications: (state) => {
      return state.notifications
    },
    bookmarked: (state) => {
      return state.bookmarked
    },
    giftStoresList: (state) => {
      return state.giftStoresList
    },
    searchFeatured: (state) => {
      return state.searchFeatured
    },
    loading: (state) => {
      return state.loading
    },
    storeSearch: (state) => {
      return state.storeSearch
    },
    fbLoaded: (state) => {
      return state.storeSearch
    }
  },
  mutations: {
    SET_LOCALE: (state, locale) => {
      state.locale = locale
      localStorage.setItem('locale', locale)
    },
    SET_FB_STATUS: (state, value) => {
      state.fbLoaded = value
    },
    SET_NO_SCROLL: (state, newValue) => {
      state.noScroll = newValue
    },
    SET_PROMO_STATUS: (state, newValue) => {
      state.showPromo = newValue
    },
    SET_CATEGORIES: (state, newValue) => {
      state.categories = newValue
    },
    SET_SEARCH_RESULT: (state, newValue) => {
      state.searchResult = newValue
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
    SET_PAGE: (state, payload) => {
      const model = payload.model
      state[ model ] = payload.data
    },
    SET_FEATURED_SEARCH: (state, payload) => {
      state.searchFeatured = payload
    },
    INITIAL_LOAD: (state, payload) => {
      state[ payload.model ] = payload.data
    },
    SET_LOADING_STATE: (state, payload) => {
      state.loading[ payload.model ] = payload.value
    },
    SET_USER: (state, payload) => {
      state.user = payload.user
      if (payload.remember) {
        localStorage.setItem('user', JSON.stringify(payload.user))
      } else {
        sessionStorage.setItem('user', JSON.stringify(payload.user))
      }
    },
    LOG_OUT: (state) => {
      localStorage.removeItem('user')
      sessionStorage.removeItem('user')
      state.user = null
    },
    SET_HOME_ADS: (state, payload) => {
      state.homeAds = payload
    },
    SET_SLIDER_ITEMS: (state, payload) => {
      state.sliderItems = payload
    },
    SET_HOME_EVENTS: (state, payload) => {
      state.sliderItems = payload
    },
    SET_TEAM: (state, payload) => {
      state.team = payload
    },
    SET_MAGAZINES: (state, payload) => {
      state.magazines = payload.data
    },
    SET_GIFT_STORES: (state, payload) => {
      state.giftStoresList = payload.data
    },
    SET_USER_SUBSCRIPTIONS: (state, payload) => {
      state.subscribed = payload
    },
    SET_USER_BOOKMARKS: (state, payload) => {
      state.bookmarked = payload
    },
    SET_USER_NOTIFICATIONS: (state, payload) => {
      state.notifications = payload
    },
    SET_SOCIALS: (state, payload) => {
      state.socials = payload
    },
    SET_STORE_LIST: (state, payload) => {
      state[ payload.model ] = payload.data
    },
    SHOW_POPUP: (state, payload) => {
      state.showPopup = true
      state.popup.message = payload.message
      state.popup.icon = payload.icon
    },
    HIDE_POPUP: (state) => {
      state.showPopup = false
      state.popup.message = ''
      state.popup.icon = ''
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
        Axios.get(`${url}/${page}/${offset}`).then(function (response) {
          context.commit('LOAD_MORE', { model: model, data: response.data.data })
          context.commit('SET_LOADING_STATE', { model: model, value: false })
          if (response.data.data.length < offset) {
            resolve('NOT_ENOUGH_RECORDS')
          } else {
            resolve(response.data.data)
          }
        }).catch(function (error) {
          console.error(error)
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
        Axios.get(`${url}/${page}/${offset}`).then(function (response) {
          context.commit('LOAD_MORE', { model: model, data: response.data.data })
          context.commit('SET_LOADING_STATE', { model: model, value: false })
          if (response.data.data.length < offset) {
            resolve('NOT_ENOUGH_RECORDS')
          } else {
            resolve(response.data.data)
          }
        }).catch(function (error) {
          console.error(error)
          reject(error)
          context.commit('SET_LOADING_STATE', { model: model, value: false })
        })
      })
    },
    loadSingle: function (context, request) {
      return new Promise((resolve, reject) => {
        const id = request.id
        Axios.get(context.state.apiUrls.singleItemUrl(id)).then(function (response) {
          if (!response.data) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response.data)
          }
        }).catch(function (error) {
          console.error(error)
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
            resolve(store[ 0 ])
          } else {
            context.dispatch('loadSingle', {
              id: request,
              model: 'store'
            }).then(function (response) {
              resolve(response.data)
            }).catch(function (error) {
              console.error(error)
            })
          }
        }
      })
    },
    fetchItems: function (context, request) {
      return new Promise((resolve, reject) => {
        Axios.get(request.api).then(function (response) {
          if (response.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            if (request.hasOwnProperty('model')) {
              context.commit(request.setter, { data: response.data.data, model: request.model })
            }
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    loadFiltered: function (context, request) {
      return new Promise((resolve, reject) => {
        Axios.post(request.api, request.filters).then(function (response) {
          if (response.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            context.commit(request.setter, { data: response.data.data, model: request.model })
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getCategories: function (context) {
      return new Promise((resolve, reject) => {
        Axios.get(context.state.apiUrls.categories).then(function (response) {
          if (response.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            context.commit('SET_CATEGORIES', response.data.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    login: function (context, credentials) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.loginAPI
        const user = {
          email: credentials.email,
          password: credentials.password,
          remember: credentials.remember
        }
        Axios.post(`${url}`, user).then(function (response) {
          if (!response) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            if (response.data.token) {
              response.data.user.token = response.data.token
              context.commit('SET_USER', {
                token: response.data.token,
                user: response.data.user,
                remember: user.remember
              })
              context.dispatch('getSubscribed').catch((error) => {
                console.error(error)
              })
              context.dispatch('getBookmarks').catch((error) => {
                console.error(error)
              })
            }
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    register: function (context, payload) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.registerAPI
        let user
        if (payload.facebookId) {
          user = payload
        } else {
          user = {
            name: payload.name,
            surname: payload.lastName,
            email: payload.email,
            mobile: `${payload.mobileIndex.val}${payload.mobile}`,
            birthDate: `${payload.year.val}/${payload.month.val}/${payload.day.val}`,
            sex: payload.gender.val,
            country: payload.country.val,
            city: payload.city.val,
            password: payload.password
          }
        }
        Axios.post(`${url}`, user).then(function (response) {
          if (!response) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            if (response.data.token) {
              response.data.user.token = response.data.token
              context.commit('SET_USER', {
                token: response.data.token,
                user: response.data.user,
                remember: user.remember
              })
            }
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getUser: function (context, { token, email }) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.getUserAPI
        const credentials = {
          email: email,
          token: token
        }
        Axios.get(`${url}/${credentials.email}`, {
          data: credentials
        }).then(function (response) {
          if (!response) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            response.data.token = token
            let remember = false
            if (localStorage.getItem('user')) {
              remember = true
            }
            response.data.user.token = token
            context.commit('SET_USER', {
              token: token,
              user: response.data.user,
              remember: remember
            })
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    logout: function (context) {
      return new Promise((resolve) => {
        context.commit('LOG_OUT')
        resolve()
      })
    },
    search: function (context, keyword) {
      return new Promise((resolve) => {
        Axios.post(context.state.apiUrls.search, { name: keyword }).then((response) => {
          context.commit('SET_SEARCH_RESULT', response.data.data)
          resolve(response.data)
        }).catch(error => {
          console.error(error)
        })
      })
    },
    getSliderItems: function (context) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.getSliderItems
        Axios.get(`${url}`).then(function (response) {
          if (response.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            context.commit('SET_SLIDER_ITEMS', response.data.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getAdsItems: function (context) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.getAds
        Axios.get(`${url}`).then(function (response) {
          if (response.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            if (response.data.status === 'success') {
              context.commit('SET_HOME_ADS', response.data.data)
            } else {
              resolve('RECORD NOT FOUND')
            }
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getSearchFeatured: function (context) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.featuredSearch
        Axios.get(`${url}`).then(function (response) {
          if (response.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            context.commit('SET_FEATURED_SEARCH', response.data.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    subscribeNewsletter: function (context, request) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.newsletter
        Axios.post(`${url}`, { email: request.email }).then(function (response) {
          if (response.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response)
            context.commit('SET_FEATURED_SEARCH', response.data.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getAboutPage: function (context, payload) {
      return new Promise((resolve, reject) => {
        Axios.get(payload.url).then(function (response) {
          if (!response.data.aboutPage.length) {
            resolve('RECORD NOT FOUND')
          } else {
            context.commit('SET_PAGE', { model: payload.model, data: response.data.aboutPage })
            context.commit('SET_LOADING_STATE', { model: 'page', value: false })
            resolve(response.data.aboutPage)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getSocials: function (context) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.socials
        Axios.get(url).then(function (response) {
          if (!response.data.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            context.commit('SET_SOCIALS', response.data.data)
            resolve(response.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getTeam: function (context) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.team
        Axios.get(url).then(function (response) {
          if (!response.data.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            resolve(response.data.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getBookmarks: function (context) {
      return new Promise((resolve, reject) => {
        Axios.post(context.state.apiUrls.getBookmarked, { userToken: context.getters.user.token }).then(function (response) {
          if (!response.data.bookmarkedItems.length) {
            resolve('RECORD NOT FOUND')
          } else {
            if (response.data.hasOwnProperty('bookmarkedItems')) {
              let bookmarks = response.data.bookmarkedItems.filter((item) => {
                return item
              })
              context.commit('SET_USER_BOOKMARKS', bookmarks)
            }
            resolve(response.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getNotifications: function (context) {
      return new Promise((resolve, reject) => {
        Axios.post(context.state.apiUrls.notifications, { userToken: context.getters.user.token }).then(function (response) {
          console.log(response)
          if (!response.data.data.length) {
            resolve('RECORD NOT FOUND')
          } else {
            context.commit('SET_USER_NOTIFICATIONS', response.data.data)
            resolve(response.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    clearNotifications: function (context) {
      return new Promise((resolve, reject) => {
        Axios.post(context.state.apiUrls.clearNotifications, { userToken: context.getters.user.token }).then(function (response) {
          context.dispatch('getUser', {
            token: context.getters.user.token,
            email: context.getters.user.email
          }).catch(error => console.error(error))
          resolve(response.data)
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getSubscribed: function (context) {
      return new Promise((resolve, reject) => {
        Axios.post(context.state.apiUrls.getSubscribed, { userToken: context.getters.user.token }).then(function (response) {
          if (!response.data.subscribedStores.length) {
            resolve('RECORD NOT FOUND')
          } else {
            if (response.data.hasOwnProperty('subscribedStores')) {
              let subscribed = response.data.subscribedStores.filter((item) => {
                return item
              })
              context.commit('SET_USER_SUBSCRIPTIONS', subscribed)
            }
            resolve(response.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    showPopup: function (context, payload) {
      context.commit('SHOW_POPUP', payload)
    }
  }
})
