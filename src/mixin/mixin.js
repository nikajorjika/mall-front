import Vue from 'vue'
import messages from '../lang/lang'
import store from '../store'

Vue.mixin({
  methods: {
    t: function (index) {
      return messages[ store.getters.locale.locale ][ 'statics' ][ index ] ? messages[ store.getters.locale.locale ][ 'statics' ][ index ] : index
    },
    groupByAlphabet: function (stores) {
      // const alphabet = store.state.alphabet[ store.getters.locale.locale ]
      let storesList = {}
      stores.forEach(function (value) {
        if (storesList[ value.name[ store.getters.locale.locale ].charAt(0) ] === undefined) {
          storesList[ value.name[ store.getters.locale.locale ].charAt(0) ] = []
        }
        storesList[ value.name[ store.getters.locale.locale ].charAt(0).toUpperCase() ].push(value)
      })
      return storesList
    },
    getUser: function () {
      let user = ''
      if (localStorage.getItem('user')) {
        user = sessionStorage.getItem('user')
      } else if (localStorage.getItem('user')) {
        user = localStorage.getItem('user')
      }
      return user
    },
    getIconName: (index) => {
      const icons = {
        'TM Twitter': 'twitter',
        'TM Facebook': 'facebook-f',
        'TM Pinterest': 'pinterest',
        'TM LinkedIn': 'linkedin-in',
        'TM YouTube': 'youtube'
      }
      return icons[ index ]
    }
  }
})
