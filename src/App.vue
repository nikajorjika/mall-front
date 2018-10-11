<template>
  <div id="app" :class="this.$store.getters.noScroll? 'open': ''">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
export default {
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
      // _this.$http.get('https://smartfinders.herokuapp.com/api/v1/website/entities')
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
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
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
