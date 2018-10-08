<template>
  <div id="nav">
    <div class="header-wrapper">
      <div class="header-left">
        <hamburger-menu/>
        <ul class="navigation-menu">
          <li v-for="item in this.navigation" v-bind:key="item.url">
            <div class="nav-drop">
              <router-link :to="item.url" :class="item.children !== undefined ? 'has-child' : ''">
                <span>{{item.name}}</span>
                <font-awesome-icon icon="caret-down" class="open" v-if="item.children !== undefined"/>
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
            <h2 class="logo">TBILISI MALL</h2>
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
            <router-link to="#">
              <font-awesome-icon icon="search"/>
            </router-link>
          </li>
          <li>
            <router-link to="#">ENG</router-link>
          </li>
        </ul>
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
      flex: 8;
      .nav-drop {
        .has-child {
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
          letter-spacing:0.1rem;
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
            padding: 3.55rem 2.9rem;
            min-width: 8.5rem;
            box-sizing: border-box;
            display: inline-block;
            text-align: center;
            &:hover {
              background: #f1f1f1;
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
    > li {
      a {
        padding: 3.55rem 1.8rem;
        display: inline-block;
        &:hover {
          background: #f1f1f1;
        }
      }
      &:first-child {
        a {
          padding-left: 2.65rem;
        }
      }
      &:last-child {
        a {
          padding-right: 2.6rem;
        }
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
      font-size: 1.3rem;
      font-family: 'Muli SemiBold', 'sans-serif';
    }
  }
}
</style>
