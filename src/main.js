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
import { faFacebookF, faTwitter, faYoutube, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
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
const SocialSharing = require('vue-social-sharing')

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
    libraries: 'places'
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
    window.fbAsyncInit = function () {
      // eslint-disable-next-line
      FB.init({
        appId: '917084738680946',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.10'
      })
      // eslint-disable-next-line
      FB.AppEvents.logPageView()
    };

    (function (d, s, id) {
      let js
      let fjs = d.getElementsByTagName(s)[ 0 ]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }
}).$mount('#app')
