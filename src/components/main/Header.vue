<template>
  <div id="nav">
    <div class="header-wrapper">
      <div class="header-left">
        <hamburger-menu/>
        <ul class="navigation-menu">
          <li v-for="item in $store.getters.navigation[this.$store.getters.locale.locale]" v-bind:key="item.url">
            <div class="nav-drop">
              <router-link :to="item.url" :class="item.children !== undefined ? 'has-child' : ''">
                <span>{{item.name}}</span>
                <span class="caret-down-icon"><img src="../../assets/images/icons/carret-down.svg"></span>
              </router-link>
              <!--<div v-if="this.item.children !== undefined" class="drop">-->
              <!--<ul>-->
              <!--<li v-for="child in this.item.children" v-bind:key="child.url">-->
              <!--<router-link :to="item.url">{{child.name}}</router-link>-->
              <!--</li>-->
              <!--</ul>-->
              <!--</div>-->
            </div>
          </li>
        </ul>
      </div>
      <div class="header-center">
        <div class="mall-logo">
          <router-link to="/">
            <img class="logo" src="../../assets/images/icons/TM_LOGO.svg">
          </router-link>
        </div>
      </div>
      <div class="header-right">
        <ul>
          <li>
            <router-link to="#">CONTACT</router-link>
          </li>
          <li>
            <router-link to="#">MY MALL</router-link>
          </li>
          <li>
            <router-link to="#" class="text-center">
              <img src="../../assets/images/icons/search.svg" height="12.2px" width="11.8px">
            </router-link>
          </li>
          <li>
            <language-switcher/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import drop from '../partials/DropDown'
import HamburgerMenu from '../partials/HamburgerMenu'
import LanguageSwitcher from '../parts/LanguageSwitcher'

export default {
  name: 'nav-bar',
  data: function () {
    return {}
  },
  components: {
    LanguageSwitcher,
    HamburgerMenu,
    'nav-drop': drop,
    'hamburger-menu': HamburgerMenu
  },
  methods: {}
}
</script>

<style lang="scss">
#nav {
  background-color: #ffffff;
  border: solid 1px #f1f1f1;
  .header-wrapper {
    display: flex;
    flex-wrap: wrap;
    .header-left {
      display: flex;
      flex-wrap: wrap;
      flex: 8;
      .nav-drop {
        .has-child {
          display: flex;
          .caret-down-icon {
            margin: auto 0;
            height: 3.3px;
            width: 7.3px;
            display: inline-block;
            img {
              height: 100%;
              width: 100%;
              display: block;
              object-fit: contain;
            }
          }
          span {
            margin-right: 0.46rem;
            display: inline-block;
          }
        }
        .drop {
          position: absolute;
          ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
    .header-center {
      margin: auto 0;
      flex: 1;
      min-width: 18rem;
      .mall-logo {
        font-family: 'Muli Bold', 'sans-serif';
        .logo {
          font-size: 2.3rem;
          letter-spacing: 0.1rem;
          margin: 0;
          text-align: center;
        }
      }
    }
    .header-right {
      flex: 8;
      align-self: flex-end;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          border-left: solid 1px #f1f1f1;
          a {
            padding: 35.5px 29px;
            min-width: 85px;
            box-sizing: border-box;
            display: flex;
            text-align: center;
            &.text-center {
              display: flex;
              img {
                margin: auto;
              }
            }
            &:hover {
              background: #f1f1f1;
            }
            img {
              margin: auto 0;
            }
          }
          &:first-child {
            margin-left: auto;
          }
        }
      }
    }
  }
  #hamburger-menu {
    margin: auto 0;
  }
  .navigation-menu {
    border-left: solid 1px #f1f1f1;
    border-right: solid 1px #f1f1f1;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    > li {
      a {
        padding: 35.5px 18px;
        display: inline-block;
        &:hover {
          background: #f1f1f1;
        }
      }
      &:first-child {
        a {
          padding-left: 26.5px;
        }
      }
      &:last-child {
        a {
          padding-right: 26px;
        }
      }
    }
  }
  li {
    position: relative;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-family: 'Muli SemiBold', 'sans-serif';
  }
}
</style>
