<template>
  <div id="nav">
    <div class="header-wrapper">
      <div class="header-left">
        <hamburger-menu/>
        <ul class="navigation-menu">
          <li v-for="item in this.navigation" v-bind:key="item.url">
            <nav-drop :item="item"/>
          </li>
        </ul>
      </div>
      <div class="header-center">
        <div class="mall-logo">
          <h2 class="logo">TBILISI MALL</h2>
        </div>
      </div>
      <div class="header-right">
        ul.
      </div>
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
#nav {
  background-color: #ffffff;
  border: solid 1px #f1f1f1;
  .header-wrapper {
    display: flex;
    flex-wrap: wrap;
    .header-left {
      display: flex;
      flex-wrap: wrap;
      flex:8;
    }
    .header-center {
      margin: auto 0;
      flex:1;

      .mall-logo {
        font-family: 'Muli Bold', 'sans-serif';
        .logo {
          font-size: 1.7rem;
          margin:0;
          text-align: center;
        }
      }
    }
    .header-right{
      flex:8;
    }
  }
  #hamburger-menu {
    margin: auto 0;
  }
  .navigation-menu {
    border-left: solid 1px #f1f1f1;
    border-right: solid 1px #f1f1f1;
    > li {
      padding: 3.55rem 1.8rem;
      &:first-child {
        padding-left: 2.65rem;
      }
      &:last-child {
        padding-right: 2.6rem;
      }
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    li {
      position: relative;
      text-transform: uppercase;
      font-size: 1.6rem;
    }
  }
}
</style>
