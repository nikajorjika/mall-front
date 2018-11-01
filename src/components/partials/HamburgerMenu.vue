<template>
  <div id="hamburger-menu">
    <div class="hamburger-container" @click="toggleHamburgerMenu">
      <default-icon class="nav-hamburger" :icon="`bars`"/>
    </div>
    <div class="content-container" v-if="showMenu">
      <div class="inner-content-container">
        <div class="close-icon">
          <default-icon class="hamburger-close-button" :icon="`close`" @click="toggleHamburgerMenu"/>
          <!--<search-container class="hamburger-search"/>-->
        </div>
        <div class="right-container">
          <div class="ham-logo-container">
            <router-link to="/">
              <img class="logo" src="../../assets/images/icons/TM_LOGO.svg">
            </router-link>
          </div>
          <div class="list-wrapper">
            <div class="list-container" v-for="data in $store.state.hamburgerData" v-bind:key="data.id">
              <h3 class="parent-title">{{data.name[$store.getters.locale.locale]}}</h3>
              <ul v-if="data.children !== undefined && 0">
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
    $route(to, from) {
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
      padding: 0 25px;
      margin: auto 0;
    }
  }
  .content-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      filter: blur(4px);
    }
    .inner-content-container {
      display: flex;
      max-width: 1366px;
      background: #ffff;
      overflow-y: auto;
      height: 100%;
      z-index: 4;
      position: relative;
      .close {
        font-size: 14px;
      }
      .right-container {
        width: 100%;
        .ham-logo-container {
          width: 155.8px;
          margin: 35.6px auto;
        }
        .list-wrapper {
          margin-top: 117px;
          .list-container {
            .parent-title {
              font-size: 1.8rem;
              font-family: 'Muli SemiBold','BPG Nino Mtavruli', 'sans-serif';
              font-weight: 600;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.28;
              color: #000000;
              text-transform: uppercase;
              cursor: pointer;
              width: 100%;
              margin:0;
              padding: 25.5px 54.5px;
              border-bottom: solid 1px #dcdcdc;
            }
            &:first-child {
              .parent-title{
                border-top: solid 1px #dcdcdc;
                }
            }
            ul {
              li {
                font-family: Muli,'BPG Nino Mtavruli', sans-serif;
                font-size: 1.6rem;
                margin: 16.8px 0;
                font-weight: 300;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.25;
                letter-spacing: normal;
                text-align: center;
                color: #848484;
                text-transform: uppercase;
              }
            }
          }
        }
      }
      .close-icon {
        display: flex;
        padding: 34.3px 33.8px;
        border-right: solid 1px #dcdcdc;
        box-sizing: border-box;
      }
    }
    .hamburger-search {
      width: 90%;
      max-width: 1655px;
      margin: 0 auto;
    }
  }
}
</style>
