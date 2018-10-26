<template>
  <div id="app" :class="this.$store.getters.noScroll? 'open': ''">
    <div class="app-wrapper" ref="app">
      <nav-bar/>
      <router-view/>
      <footer-component/>
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
  beforeMount: function () {
    const sessionToken = sessionStorage.getItem('websiteAuthToken')
    const _this = this
    if (sessionToken === null || sessionToken === '' || sessionToken === undefined || sessionToken === 'undefined') {
      this.$http.post(this.$store.state.apiUrls.websiteAuthURL, {
        username: this.$store.state.apiCredentials.username,
        password: this.$store.state.apiCredentials.password
      }).then(function (response) {
        sessionStorage.setItem('websiteAuthToken', response.data.token)
        _this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
      }).catch(function (error) {
        console.log(error)
      })
    } else {
      _this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionToken
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/app.scss";

#app {
  font-family: 'Muli', Helvetica, Arial, sans-serif;
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
