<template>
  <div class="mall-mal-js-comp"></div>
</template>
<script>
export default {
  name: 'mall-map-js',
  props: {
    storeName: ''
  },
  mounted: function () {
    (function (w, d, t) {
      w.pointinside = w.pointinside || []

      function pi () {
        w.pointinside.push(arguments)
      }

      pi('key', 'a3e316c14ac2c6c07bc7b2e5b1275e49')
      pi('account', '957b1ca0-9ffb-4c70-9054-70ce5ebb8045')
      pi('target', '#pi-widget')
      pi('domain', 'https://api-phoenix.pointinside.com')
      pi('venue', 'cad463e95dd631d8856b1f4223bf3477')
      if (t.storeName) {
        pi('search', t.storeName)
      }
      let js
      let pjs = d.getElementsByTagName('script')[ 0 ]
      js = d.createElement('script')
      js.src = 'https://web-cdn.pointinside.com/embedded/piwidget.js'
      pjs.parentNode.insertBefore(js, pjs)
    })(window, document, this)
  }
}
</script>
