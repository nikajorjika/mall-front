<template>
  <div id="nav">
    <div class="header-wrapper">
      <div class="header-left">
        <hamburger-menu/>
        <ul class="navigation-menu">
          <li v-for="(item, index) in $store.getters.navigation" v-bind:key="index">
            <div class="nav-drop">
              <router-link :to="item.url" :class="item.children !== undefined ? 'has-child' : ''">
                <span>{{item.name[$store.getters.locale.locale]}}</span>
                <span class="caret-down-icon" v-if="item.children !== undefined"><img src="../../assets/images/icons/carret-down.svg"></span>
              </router-link>
              <div v-if="item.children !== undefined" class="drop">
                  <ul>
                  <li v-for="(child, i) in item.children" v-bind:key="i">
                    <router-link :to="item.url + child.url">{{child.name[$store.getters.locale.locale]}}</router-link>
                  </li>
                </ul>
              </div>
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
            <router-link to="#">{{t('contact')}}</router-link>
          </li>
          <li>
            <router-link :to="{name: 'login'}">{{t('my_mall')}}</router-link>
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
import LanguageSwitcher from '../partials/LanguageSwitcher'

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
  border-top: solid 1px #f1f1f1;
  border-bottom: solid 1px #f1f1f1;
  .header-wrapper {
    display: flex;
    flex-wrap: wrap;
    position: relative;
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
            margin-right: 4.6px;
            display: inline-block;
          }
        }
        .drop {
          position: absolute;
          background: #fff;
          z-index: 999;
          width: auto;
          overflow: hidden;
          height: 0;
          ul {
            list-style-type: none;
            display: flex;
            background: #000;
            li{
              width:100%;
              position: relative;
              border-left: solid 1px #3a3838;
              &:first-child{
                border-left: none;
              }
              a{
                width:100%;
                padding: 22px 0;
                display: block;
                box-sizing: border-box;
                font-size: 12px;
                font-weight: 300;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.25;
                letter-spacing: normal;
                text-align: center;
                color: #848484;
                &:hover{
                  background: #ffffff;
                  color: #000;
                }
              }
            }
          }
        }
        &:hover {
          .drop {
            height: auto;
            width: 100%;
            left: 0;
            box-sizing: border-box;
          }
        }
      }
    }
    .header-center {
      margin: auto 0;
      flex: 1;
      min-width: 18rem;
      .mall-logo {
        font-family: 'Muli Bold','BPG Nino Mtavruli', 'sans-serif';
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
    text-transform: uppercase;
    font-size: 1.3rem;
    font-family: 'Muli SemiBold','BPG Nino Mtavruli', 'sans-serif';
  }
}
</style>
