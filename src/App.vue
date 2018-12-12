<template>
  <div id="app" :class="$store.getters.noScroll? 'open': ''">
    <div class="app-wrapper" ref="app" v-if="hasAuth">
      <nav-bar/>
      <router-view/>
      <footer-component/>
      <notifications group="notify"/>
    </div>
  </div>
</template>
<script>
import FooterComponent from './components/main/Footer'
import NavBar from './components/main/Header'

export default {
  components: {
    FooterComponent,
    NavBar
  },
  data: () => {
    return {
      hasAuth: false
    }
  },
  mounted: function () {
    (function (w, d) {
      console.log(123)
      w.pointinside = w.pointinside || []

      function pi () {
        w.pointinside.push(arguments)
      }

      let map = d.createElement('div')
      map.id = 'pi-widget'
      d.getElementById('part-map')

      pi('key', 'a3e316c14ac2c6c07bc7b2e5b1275e49')
      pi('account', '957b1ca0-9ffb-4c70-9054-70ce5ebb8045')
      pi('target', '#pi-widget')
      pi('domain', 'https://api-phoenix.pointinside.com')
      pi('venue', 'cad463e95dd631d8856b1f4223bf3477')
      let js
      let pjs = d.getElementsByTagName('script')[ 0 ]
      js = d.createElement('script')
      js.src = 'https://web-cdn.pointinside.com/embedded/piwidget.js'
      pjs.parentNode.insertBefore(js, pjs)
    })(window, document)
  },
  beforeMount: function () {
    const sessionToken = sessionStorage.getItem('websiteAuthToken')
    if (sessionToken === null || sessionToken === '' || sessionToken === undefined || sessionToken === 'undefined') {
      this.$http.post(this.$store.state.apiUrls.websiteAuthURL, {
        username: this.$store.state.apiCredentials.username,
        password: this.$store.state.apiCredentials.password
      }).then((response) => {
        sessionStorage.setItem('websiteAuthToken', response.data.token)
        this.$http.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + response.data.token
        this.hasAuth = true
      }).catch((error) => {
        console.log(error)
      })
    } else {
      this.$http.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + sessionToken
      this.hasAuth = true
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/app.scss";

#app {
  font-family: 'Muli', 'BPG Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  &.open {
    overflow-y: hidden;
    height: 100vh;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
