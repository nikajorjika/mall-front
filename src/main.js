import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import VeeValidate from 'vee-validate'
import dictionary from './lang/messages/ka'
import dictionaryEn from './lang/messages/en'
import Notifications from 'vue-notification'
import VueMq from 'vue-mq'
import {
  faCaretDown,
  faCaretRight,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faThLarge,
  faList,
  faLink,
  faBookmark
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import './mixin/mixin'
import Vuebar from 'vuebar'
import VueAgile from 'vue-agile'
import VueSimpleSVG from 'vue-simple-svg'
import VueYouTubeEmbed from 'vue-youtube-embed'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { VLazyImagePlugin } from 'v-lazy-image'
import Meta from 'vue-meta'

const SocialSharing = require('vue-social-sharing')
const VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)
Vue.use(Meta, {
  tagIDKeyName: 'vmid'
})
Vue.use(VLazyImagePlugin)
Vue.use(VueYouTubeEmbed)
Vue.use(SocialSharing)
Vue.use(VueSimpleSVG)
Vue.use(Vuebar)
Vue.use(VueAgile)
Vue.use(Notifications)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAcuJoeoWXCUeGGDIW8EWcunpDmjqWeZ9g',
    libraries: 'places,drawing'
  }
})
Vue.use(VeeValidate, {
  locale: store.state.locale.locale,
  dictionary: {
    ka: { attributes: dictionary.attributes, messages: dictionary.messages },
    en: { attributes: dictionaryEn.attributes, messages: dictionaryEn.messages }
  }
})
Vue.use(VueMq, {
  breakpoints: {
    mobile: 761,
    tablet: 1060,
    laptop: 1366,
    desktop: Infinity
  }
})

library.add(faCaretDown)
library.add(faCaretRight)
library.add(faSearch)
library.add(faLinkedinIn)
library.add(faAngleLeft)
library.add(faBookmark)
library.add(faAngleRight)
library.add(faFacebookF)
library.add(faInstagram)
library.add(faTwitter)
library.add(faLink)
library.add(faYoutube)
library.add(faPinterest)
library.add(faThLarge)
library.add(faList)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$http = Axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  created: function () {
    AOS.init()
    this.initFacebook()
  }
}).$mount('#app')
