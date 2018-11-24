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
import sliderItems from './store/modules/SliderItems'

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
    frontPromotions: [],
    frontEvents: [],
    frontNewCollections: [],
    frontNews: [],
    stores: stores,
    storesList: storesList,
    entertainment: entertainment,
    entertainmentList: entertainmentList,
    messages: messages,
    apiUrls: apiUrls,
    user: localStorage.getItem('user') ? localStorage.getItem('user') : '',
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
    storeFilters: storeFilters,
    homeAds: [
      {
        name: {
          ka: 'თიბისი',
          en: 'tbc',
          ru: 'tbc'
        },
        description: {
          ka: 'თიბისი ბანკი წარმოადგენს ლიდერ კომპანიას საქართველოს ფინანსურ სექტორში. \nჩვენ ვქმნით ახალ შესაძლებლობებს ადამიანებისა და კომპანიების წარმატებისთვის.\nსაუკეთესო თანამშრომლებით, ძლიერი ბრენდით, ინოვაციური შეთავაზებებითა და გამორჩეული ხარისხით, თიბისი არის საუკეთესო ბანკი საქართველოში.',
          en: 'თიბისი ბანკი წარმოადგენს ლიდერ კომპანიას საქართველოს ფინანსურ სექტორში. \nჩვენ ვქმნით ახალ შესაძლებლობებს ადამიანებისა და კომპანიების წარმატებისთვის.\nსაუკეთესო თანამშრომლებით, ძლიერი ბრენდით, ინოვაციური შეთავაზებებითა და გამორჩეული ხარისხით, თიბისი არის საუკეთესო ბანკი საქართველოში.',
          ru: 'თიბისი ბანკი წარმოადგენს ლიდერ კომპანიას საქართველოს ფინანსურ სექტორში. \nჩვენ ვქმნით ახალ შესაძლებლობებს ადამიანებისა და კომპანიების წარმატებისთვის.\nსაუკეთესო თანამშრომლებით, ძლიერი ბრენდით, ინოვაციური შეთავაზებებითა და გამორჩეული ხარისხით, თიბისი არის საუკეთესო ბანკი საქართველოში.'
        },
        socials: {
          facebook: '',
          twitter: '',
          youtube: '',
          pinterest: ''
        },
        filters: [
          'Discount Card',
          'Amex'
        ],
        tags: [
          'Women'
        ],
        _id: '5b9d4045d5c08e1752f7da05',
        logoUrl: 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/5ea8fdfb-eb15-40ae-a1eb-b949fccea814.jpeg',
        photoUrl: 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/c0bc8943-4918-49f5-b228-9641b63e2ebc.jpeg',
        categoryId: '5b9d3c8c62973c001fd2c69b',
        subcategoryId: '5b9d3fa4d5c08e1752f7da03',
        isApproved: true,
        createdBy: 'user',
        coverVideoLink: '',
        floor: '0',
        kaLogoUrl: 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/2bbef246-fa96-47a7-85f7-4ac1abd11078.jpeg',
        phone: '',
        showInAdsBlock: true,
        showInFeaturedSearch: true,
        showInSlider: true,
        websiteLink: ''
      }, {
        name: {
          ka: 'დეფაქტო',
          en: 'deacto',
          ru: 'defacto'
        },
        description: {
          ka: 'ქალის სამოსი და აქსესუარები, მამაკაცის სამოსი და აქსესუარები, ბავშვისა და ორსულის სამოსი, ფეხსაცმელი',
          en: 'ქალის სამოსი და აქსესუარები, მამაკაცის სამოსი და აქსესუარები, ბავშვისა და ორსულის სამოსი, ფეხსაცმელი',
          ru: 'ქალის სამოსი და აქსესუარები, მამაკაცის სამოსი და აქსესუარები, ბავშვისა და ორსულის სამოსი, ფეხსაცმელი'
        },
        socials: {
          facebook: '',
          twitter: '',
          youtube: '',
          pinterest: ''
        },
        filters: [
          'Tax free',
          'Gift Card'
        ],
        tags: [
          'Children'
        ],
        _id: '5b9d40a8d5c08e1752f7da06',
        logoUrl: 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/3e2930c2-ca60-463d-81a9-136b4fed87a3.jpeg',
        photoUrl: 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/90b28b9f-c9fb-4779-afef-d48b51cb2a3c.jpeg',
        categoryId: '5b9d3c1f62973c001fd2c698',
        subcategoryId: '5b9d3f02d5c08e1752f7d9ff',
        isApproved: true,
        createdBy: 'asd',
        coverVideoLink: '',
        floor: '0',
        kaLogoUrl: 'https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/5d55a2cd-c2fc-44f9-82f9-1d75196b2573.jpeg',
        phone: '',
        showInAdsBlock: false,
        showInFeaturedSearch: true,
        showInSlider: true,
        websiteLink: ''
      } ],
    sliderItems: sliderItems
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
    INITIAL_LOAD: (state, payload) => {
      state[payload.model] = payload.data
    },
    SET_LOADING_STATE: (state, payload) => {
      state.loading[ payload.model ] = payload.value
    },
    SET_USER: (state, payload) => {
      state.userToken = payload.token
      if (payload.remember) {
        localStorage.setItem('user', payload.token.toString())
      }
    },
    SET_HOME_ADS: (state, payload) => {
      state.homeAds = payload
    },
    SET_SLIDER_ITEMS: (state, payload) => {
      state.sliderItems = payload
    },
    SET_HOME_EVENTS: (state, payload) => {
      state.sliderItems = payload
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
        const id = request.id
        Axios.get(context.state.apiUrls.singleItemUrl(id))
          .then(function (response) {
            if (!response.data) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response.data)
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
            resolve(store[0])
          } else {
            context.dispatch('loadSingle', {
              id: request,
              model: 'store'
            }).then(function (response) {
              resolve(response.data)
            }).catch(function (error) {
              console.log(error)
            })
          }
        }
      })
    },
    fetchItems: function (context, request) {
      return new Promise((resolve, reject) => {
        Axios.get(request.api)
          .then(function (response) {
            if (response.data.length) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response)
              context.commit(request.setter, { data: response.data.data, model: request.model })
            }
          })
          .catch(function (error) {
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
        Axios.post(`${url}`, user)
          .then(function (response) {
            if (!response) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response)
              if (response.data.token) {
                const userCredentials = {
                  email: user.email,
                  token: response.data.token
                }
                context.dispatch('getUser', userCredentials).then(function (response) {
                  console.log(response)
                }).catch(function (error) {
                  console.log(error.response)
                })
                // context.commit('SET_USER', { token: response.data.token, remember: user.remember })
              }
            }
          })
          .catch(function (error) {
            reject(error)
          })
      })
    },
    register: function (context, payload) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.registerAPI
        const user = {
          name: payload.name,
          surname: payload.lastName,
          email: payload.email,
          mobile: `${payload.mobileIndex.val}${payload.mobile}`,
          birthDate: `${payload.day.val}/${payload.month.val}/${payload.year.val}`,
          sex: payload.gender.val,
          country: payload.country.val,
          city: payload.city.val,
          password: payload.password
        }
        Axios.post(`${url}`, user)
          .then(function (response) {
            if (!response) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response)
            }
          })
          .catch(function (error) {
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
        Axios.get(`${url}/${credentials.email}`, credentials)
          .then(function (response) {
            if (!response) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response)
            }
          })
          .catch(function (error) {
            reject(error)
          })
      })
    },
    logout: function (context, payload) {
      context.commit('SET_USER_TOKEN', { token: '', remember: true })
    },
    getSliderItems: function (context) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.getSliderItems
        Axios.get(`${url}`)
          .then(function (response) {
            if (response.data.length) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response)
              context.commit('SET_SLIDER_ITEMS', response.data)
            }
          })
          .catch(function (error) {
            reject(error)
          })
      })
    },
    getAdsItems: function (context) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.getAds
        Axios.get(`${url}`)
          .then(function (response) {
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
          })
          .catch(function (error) {
            reject(error)
          })
      })
    },
    getAboutPage: function (context, url) {
      return new Promise((resolve, reject) => {
        Axios.get(url)
          .then(function (response) {
            if (!response.data.aboutPage.length) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response.data.aboutPage)
            }
          })
          .catch(function (error) {
            reject(error)
          })
      })
    },
    getSocials: function (context) {
      return new Promise((resolve, reject) => {
        const url = context.state.apiUrls.socials
        Axios.get(url)
          .then(function (response) {
            if (!response.data.length) {
              resolve('RECORD NOT FOUND')
            } else {
              resolve(response.data)
            }
          })
          .catch(function (error) {
            reject(error)
          })
      })
    }
  }
})
