import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import VeeValidate from 'vee-validate'
import dictionary from './lang/messages/ka'
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
import { faFacebookF, faTwitter, faYoutube, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import './mixin/mixin'
import Vuebar from 'vuebar'
import VueAgile from 'vue-agile'
import VueSimpleSVG from 'vue-simple-svg'
const SocialSharing = require('vue-social-sharing')

Vue.use(SocialSharing)
Vue.use(VueSimpleSVG)
Vue.use(Vuebar)
Vue.use(VueAgile)
Vue.use(Notifications)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAcuJoeoWXCUeGGDIW8EWcunpDmjqWeZ9g',
    libraries: 'places'
  }
})
Vue.use(VeeValidate, {
  locale: store.state.locale.locale,
  dictionary: {
    ka: { attributes: dictionary.attributes, messages: dictionary.messages }
  }
})
Vue.use(VueMq, {
  breakpoints: {
    mobile: 760,
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
  render: h => h(App)
}).$mount('#app')
