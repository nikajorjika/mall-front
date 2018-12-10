<template>
  <div id="nav">
    <div class="header-wrapper">
      <div class="header-left">
        <hamburger-menu/>
        <ul class="navigation-menu">
          <li v-for="(item, index) in $store.getters.navigation" v-bind:key="index">
            <div class="nav-drop" @mouseover="showChild = item" @mouseout="showChild = null">
              <router-link :to="`/${locale}${item.url}`"
                           :class="item.children !== undefined ? 'has-child' : ''">
                <span>{{item.name[locale]}}</span>
                <span class="caret-down-icon" v-if="item.children !== undefined"><img
                  src="../../assets/images/icons/carret-down.svg" alt="caret down"></span>
              </router-link>
              <transition name="slideUp">
                <div v-if="item.children !== undefined && showChild === item" class="drop">
                  <ul :class="{twoCol: item.children.length > 10 }">
                    <li v-for="(child, i) in item.children" v-bind:key="i">
                      <router-link :to="`/${locale}${item.url}${child.url}`">
                        {{child.name[locale]}}
                      </router-link>
                    </li>
                  </ul>
                  <div class="drop-image">
                    <img src="../../assets/images/statics/tbm.jpg" alt="Tbilisi mall">
                  </div>
                </div>
              </transition>
            </div>
          </li>
        </ul>
      </div>
      <div class="header-center">
        <div class="mall-logo">
          <router-link to="/">
            <img class="logo" src="../../assets/images/icons/TM_LOGO.svg" alt="Tbilisi Mall Logo">
          </router-link>
        </div>
      </div>
      <div class="header-right">
        <ul v-if="$mq !== 'tablet' && $mq !== 'mobile'">
          <li>
            <router-link :to="`/${locale}/page/contact`">{{t('contact')}}</router-link>
          </li>
          <li>
            <a @click.stop.prevent="toggleActions()" v-if="$store.getters.user">
              {{$store.getters.user.name}}
            </a>
            <router-link v-else :to="`/${locale}/login`">{{t('my_mall')}}
            </router-link>
            <div class="user-action-block" v-show="showActions && $store.getters.user">
              <ul>
                <li :class="{active: $store.getters.user ? $store.getters.user.hasNewNotification : false}"><span
                  class="action-label"><router-link
                  :to="`/${locale}/user/notifications`">{{t('notifications')}}</router-link></span>
                </li>
                <li><span class="action-label"><router-link
                  :to="`/${locale}/user/subscribed`">{{t('subscribe_list')}}</router-link></span>
                </li>
                <li><span class="action-label"><router-link
                  :to="`/${locale}/user/bookmarks`">{{t('bookmarks')}}</router-link></span>
                </li>
                <li><span class="action-label"><router-link
                  :to="`/${locale}/user/settings`">{{t('settings')}}</router-link></span>
                </li>
                <li><span class="action-label" @click="logOut">{{t('log_out')}}</span></li>
              </ul>
            </div>
          </li>
          <li>
            <div @click.prevent="toggleSearch()">
              <router-link to="#" class="text-center">
                <img src="../../assets/images/icons/search.svg" height="12.2px" width="11.8px">
              </router-link>
            </div>
            <transition name="fade">
              <div class="search-wrapper" v-if="showSearch">
                <search-container @close="toggleSearch()"/>
              </div>
            </transition>
          </li>
          <li>
            <language-switcher/>
          </li>
        </ul>
        <ul v-else>
          <li>
            <div @click.prevent="toggleSearch()">
              <router-link to="#" class="text-center">
                <img src="../../assets/images/icons/search.svg" height="12.2px" width="11.8px">
              </router-link>
            </div>
            <transition name="fade">
              <div class="search-wrapper" v-if="showSearch">
                <search-container @close="toggleSearch()"/>
              </div>
            </transition>
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

import HamburgerMenu from '../partials/HamburgerMenu'
import LanguageSwitcher from '../partials/LanguageSwitcher'
import SearchContainer from '../partials/SearchField'

export default {
  name: 'nav-bar',
  data: function () {
    return {
      showActions: false,
      showChild: null,
      showSearch: false
    }
  },
  created: function () {
    document.addEventListener('click', this.documentClick)
  },
  components: {
    SearchContainer,
    LanguageSwitcher,
    HamburgerMenu,
    'hamburger-menu': HamburgerMenu
  },
  methods: {
    toggleSearch: function () {
      this.showSearch = !this.showSearch
      this.$store.commit('SET_NO_SCROLL', this.showSearch)
    },
    toggleActions: function () {
      this.showActions = !this.showActions
    },
    showChildren: function (item) {
      this.showChild = item
    },
    logOut: function () {
      this.$store.dispatch('logout').then(() => {
        this.showActions = false
        if (this.$route.fullPath.indexOf('/user') !== -1) {
          this.$router.push({ name: 'home', params: { locale: this.locale } })
        }
      }).catch((error) => {
        console.error(error)
      })
    },
    documentClick: function () {
      this.showActions = false
    }
  }
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
        position: relative;

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
          overflow: hidden;
          left: 0;
          top: calc(100% - 11px);
          box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.13);
          display: flex;
          padding-right: 182px;

          &.slideUp-enter-active {
            animation: subMenuEnter .4s;
          }

          &.slideUp-leave-active {
            animation: subMenuLeave .2s;
          }

          ul {
            list-style-type: none;
            padding: 24px 0;

            &.twoCol {
              width: 472px;
              display: flex;
              flex-wrap: wrap;

              li {
                width: 236px;
                margin-right: 0;
              }
            }

            li {
              width: 100%;
              position: relative;
              white-space: nowrap;
              margin-right: 90px;

              &:first-child {
                border-left: none;
              }

              a {
                width: 100%;
                padding: 7.5px 28px;
                display: block;
                box-sizing: border-box;
                font-size: 12px;
                font-weight: 300;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.25;
                letter-spacing: normal;
                color: #848484;

                &:hover {
                  background: #ffffff;
                  color: #000;
                }
              }
            }
          }

          .drop-image {
            position: absolute;
            height: 100%;
            width: 182px;
            right: 0;

            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }
        }

        &:hover {
          .drop {
            height: auto;
            box-sizing: border-box;
          }
        }
      }
    }

    .header-center {
      margin: auto 0;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 156px;
      transform: translate(-50%, -50%);
      @media screen and (max-width: 760px) {
        width: 100px;
      }

      .mall-logo {
        font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';

        .logo {
          font-size: 2.3rem;
          letter-spacing: 0.1rem;
          margin: 0;
          text-align: center;
          @media screen and (max-width: 1366px) {
            height: 17px;
          }
          @media screen and (max-width: 760px) {
            height: 11.4px;
          }
        }
      }
    }

    .header-right {
      flex: 8;
      align-self: flex-end;

      > ul {
        display: flex;
        flex-wrap: wrap;

        > li {
          border-left: solid 1px #f1f1f1;
          position: relative;

          a {
            padding: 35.5px 29px;
            min-width: 85px;
            box-sizing: border-box;
            display: flex;
            text-align: center;
            cursor: pointer;
            @media screen and (max-width: 760px) {
              padding: 23px;
              min-width: 0;
            }

            &.text-center {
              display: flex;
              text-align: center;

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

          .user-action-block {
            position: absolute;
            background: #ffffff;
            z-index: 999;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -11px);
            padding: 32px;
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.13);

            ul {
              li {
                margin-bottom: 14px;
                display: flex;

                &.active {
                  &:after {
                    content: '';
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #e62d2d;
                    margin: auto 0 auto 10px;
                  }
                }

                .action-label {
                  cursor: pointer;
                  font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
                  white-space: nowrap;

                  a {
                    padding: 0;

                    &:hover {
                      background: transparent;
                    }
                  }
                }

                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
        }
      }
    }

    .search-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      z-index: 999;
      overflow-y: auto;
      &.fade-leave-active {
        animation: fadeOut .2s;
      }

      &.fade-enter-active {
        animation: fadeIn .2s;
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
    @media screen and (max-width: 1520px) {
      display: none;
    }

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
    font-family: 'Muli SemiBold', 'BPG Nino Mtavruli', 'sans-serif';
  }
}
</style>
