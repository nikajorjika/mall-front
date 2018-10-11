import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Nav from './components/main/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Axios from 'axios'

library.add(faCaretDown)
library.add(faSearch)
library.add(faAngleLeft)
library.add(faAngleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$http = Axios
Vue.config.productionTip = false
Vue.component('nav-bar', Nav)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
