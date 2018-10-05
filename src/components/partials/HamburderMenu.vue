<template>
  <div id="hamburger-menu">
    <div class="hamburger-container">
      <font-awesome-icon icon="bars" class="open" @click="toggleHamburgerMenu"/>
      <div class="content-container" v-if="showMenu">
        <div class="search-wrapper">
          <font-awesome-icon icon="times" class="close" @click="toggleHamburgerMenu"/>
        </div>
        <div class="list-container" v-for="data in this.hamburgerData" v-bind:key="data.id">
          <h3 class="block-title">{{data.name}}</h3>
          <ul v-if="data.children !== undefined">
            <li v-for="child in data.children" v-bind:key="child.id">
              <router-link :to="child.url">
                {{child.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import store from '../../store'

export default {
  name: 'hamburger-menu',
  data: function () {
    return {
      hamburgerData: store.state.hamburgerData,
      showMenu: false
    }
  },
  methods: {
    toggleHamburgerMenu: function () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss" scoped>
#hamburger-menu{
  .hamburger-container{
    .content-container{
      position: fixed;
      top: 0;
      left:0;
      right: 0;
      bottom:0;
      background: #ffff;
      z-index: 3;
      padding: 3.5rem;
      .close{
        font-size:1.4rem;
      }
      .block-title{
        text-align: center;
        font-size: 4rem;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.25;
        letter-spacing: normal;
        color: #000000;
        margin: 2.5rem;
      }
      ul{
        li{
          font-family: Muli, sans-serif;
          font-size: 1.6rem;
          margin: 1.5rem;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: center;
          color: #848484;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
