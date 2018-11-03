import Vue from 'vue'
import Vuex from 'vuex'
import events from 'modules/events'
import stores from 'modules/stores'
import hamburgerData from 'modules/hamburgerData'
import navigation from 'modules/navigation'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    events,
    navigation,
    stores,
    hamburgerData
  },
  strict: debug
})
