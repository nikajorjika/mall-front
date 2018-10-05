<template>
  <div id="nav">
    <div class="header-wrapper">
      <hamburger-menu/>
      <ul>
        <li v-for="item in this.navigation" v-bind:key="item.url">
          <nav-drop :item="item"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import store from '../../store'
import drop from '../partials/dropdown'
import HamburgerMenu from '../partials/HamburderMenu'

export default {
  name: 'nav-bar',
  data: function () {
    return {
      navigation: store.state.navigation
    }
  },
  components: {
    HamburgerMenu,
    'nav-drop': drop,
    'hamburger-menu': HamburgerMenu
  }
}
</script>

<style lang="scss" scoped>
  #nav{
    .header-wrapper{
      display: flex;
      flex-wrap: wrap;
    }
    ul{
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      li{
        position: relative;
        text-transform: uppercase;
        font-size: 1.6rem;
      }
    }
  }
</style>
