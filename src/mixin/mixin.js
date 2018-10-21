import Vue from 'vue'
import messages from '../lang/lang'
import store from '../store'

Vue.mixin({
  methods: {
    t: function (index) {
      return messages[store.getters.locale.locale]['statics'][index]
    }
  }
})
