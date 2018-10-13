import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Nav from './components/main/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyABserBqL7VFOHlWx4wrtgHKtTGzD0k90A',
    libraries: 'places'
  }
})

library.add(faCaretDown)
library.add(faSearch)
library.add(faAngleLeft)
library.add(faAngleRight)
library.add(faFacebookF)
library.add(faTwitter)
library.add(faYoutube)
library.add(faPinterest)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$http = Axios
Vue.config.productionTip = false
Vue.component('nav-bar', Nav)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
