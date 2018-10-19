<template>
  <div id="hamburger-menu">
    <div class="hamburger-container" @click="toggleHamburgerMenu">
      <default-icon class="nav-hamburger" :icon="`bars`"/>
    </div>
    <div class="content-container" v-if="showMenu">
      <div class="search-wrapper">
        <default-icon class="hamburger-close-button" :icon="`close`" @click="toggleHamburgerMenu"/>
        <search-container class="hamburger-search"/>
      </div>
      <div class="list-wrapper">
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

import DefaultIcon from './DefaultIcons'
import SearchContainer from './SearchField'

export default {
  name: 'hamburger-menu',
  data: function () {
    return {
      hamburgerData: this.$store.state.hamburgerData,
      showMenu: false
    }
  },
  methods: {
    toggleHamburgerMenu: function () {
      this.showMenu = !this.showMenu
      let noScroll = this.$store.getters.noScroll
      this.$store.commit('SET_NO_SCROLL', !noScroll)
    }
  },
  components: {
    SearchContainer,
    DefaultIcon
  },
  watch: {
    $route (to, from) {
      this.showMenu = false
      this.$store.commit('SET_NO_SCROLL', false)
    }
  }
}
</script>

<style lang="scss" scoped>
#hamburger-menu {
  height: 100%;
  .hamburger-container {
    height: 100%;
    display: flex;
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
    }
    .nav-hamburger {
      padding: 0 29px;
      margin: auto 0;
    }
  }
  .content-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffff;
    z-index: 3;
    padding: 20.5px 0;
    overflow-y: auto;
    .hamburger-close-button {
      margin: auto 0;
    }
    .hamburger-search {
      width: 90%;
      max-width: 1655px;
      margin: 0 auto;
    }
    .close {
      font-size: 14px;
    }
    .list-wrapper {
      margin-top: 117px;
    }
    .block-title {
      text-align: center;
      font-size: 4rem;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.25;
      letter-spacing: normal;
      color: #000000;
      margin: 30px 0 0;
      padding-bottom: 9.5px;
      border-bottom: solid 1px #eeeeee;
    }
    ul {
      li {
        font-family: Muli, sans-serif;
        font-size: 1.6rem;
        margin: 16.8px 0;
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
    .search-wrapper {
      display: flex;
      margin: 0 35.2px;
    }
  }
}
</style>
