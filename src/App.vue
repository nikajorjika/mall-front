<template>
  <div id="app" :class="$store.getters.noScroll? 'open': ''">
    <page-loading/>
    <div class="app-wrapper" ref="app" v-if="hasAuth">
      <nav-bar/>
      <router-view/>
      <footer-component/>
      <!--<notifications group="notify"/>-->
      <custom-popup/>
    </div>
  </div>
</template>
<script>
import FooterComponent from './components/main/Footer'
import NavBar from './components/main/Header'
import CustomPopup from './components/partials/Popup'
import PageLoading from './components/partials/PageLoading'
import metas from './lang/meta/metas'

export default {
  components: {
    PageLoading,
    CustomPopup,
    FooterComponent,
    NavBar
  },
  metaInfo: function () {
    return metas.defaultMetas[this.locale]
  },
  data: () => {
    return {
      hasAuth: false
    }
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
        console.error(error)
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
