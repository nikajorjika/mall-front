<template>
  <div id="nav" :class="{fixed: sticky}">
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
                  <ul :class="{twoCol: item.children.length > 10 }" v-if="item.url === '/stores'">
                    <li v-for="(child, i) in getFilteredCategories('stores')" v-bind:key="i">
                      <router-link :to="`/${locale}${item.url}/${createSlug(child.translates.en)}`">
                        {{child.translates[locale]}}
                      </router-link>
                    </li>
                  </ul>
                  <ul class="reorder" :class="{twoCol: item.children.length > 10 }"
                      v-else-if="item.url === '/entertainment'">
                    <li v-for="(child, i) in getFilteredCategories('entertainment')" v-bind:key="i">
                      <router-link :to="`/${locale}${item.url}/${createSlug(child.translates.en)}`">
                        {{child.translates[locale]}}
                      </router-link>
                    </li>
                  </ul>
                  <ul class="reorder" :class="{twoCol: item.children.length > 10 }"
                      v-else-if="item.url === '/services'">
                    <li v-for="(child, i) in getFilteredCategories('services')" v-bind:key="i">
                      <router-link :to="`/${locale}${item.url}/${createSlug(child.translates.en)}`">
                        {{child.translates[locale]}}
                      </router-link>
                    </li>
                  </ul>
                  <ul :class="{twoCol: item.children.length > 10 }" v-else>
                    <li v-for="(child, i) in item.children" v-bind:key="i">
                      <router-link :to="`/${locale}${item.url}${child.url}`">
                        {{child.name[locale]}}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </li>
        </ul>
      </div>
      <div class="header-center">
        <div class="mall-logo">
          <router-link :to="{name: 'home', params: {locale: locale }}">
            <img :src="getLogoImage()" />
            <!--<object :data="getLogoImage()" type="image/svg+xml" @click="goHome()"></object>-->
          </router-link>
        </div>
      </div>
      <div class="header-right">
        <ul v-if="$mq !== 'mobile'">
          <li>
            <router-link :to="`/${locale}/page/contact`">{{t('contact')}}</router-link>
          </li>
          <li>
            <a @click.stop.prevent="toggleActions()" v-if="$store.getters.user">
              {{$store.getters.user.name}}
            </a>
            <router-link v-else :to="`/${locale}/login`">{{t('my_mall')}}
            </router-link>
            <transition name="slideUp">
              <div class="user-action-block" v-if="showActions && $store.getters.user">
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
            </transition>
          </li>
          <li @click.prevent="toggleSearch()">
            <a class="text-center">
              <img src="../../assets/images/icons/search.svg" height="12.2px" width="11.8px">
            </a>
          </li>
          <li>
            <language-switcher/>
          </li>
        </ul>
        <ul v-else>
          <li>
            <div @click.prevent="toggleSearch()">
              <a class="text-center">
                <img src="../../assets/images/icons/search.svg" height="12.2px" width="11.8px">
              </a>
            </div>
          </li>
          <li>
            <a @click.stop.prevent="toggleActions()" v-if="$store.getters.user">
              <img src="../../assets/images/icons/user.svg" width="11px" height="11px">
            </a>
            <router-link v-else :to="`/${locale}/login`">
              <img src="../../assets/images/icons/user.svg" width="11px" height="11px">
            </router-link>
            <transition name="slideUp">
              <div class="user-action-block mobile-version" v-if="showActions && $store.getters.user">
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
            </transition>
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade">
      <div class="search-wrapper" v-if="showSearch">
        <search-container @close="toggleSearch()"/>
      </div>
    </transition>
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
      scrollY: 0,
      savedY: 0,
      showSearch: false,
      sticky: false,
      stores: [ '5b9d3c1f62973c001fd2c698', '5b9d3c6062973c001fd2c699' ],
      entertainment: [ '5b9d3c7762973c001fd2c69a' ],
      services: [ '5b9d3c8c62973c001fd2c69b' ]
    }
  },
  created: function () {
    document.addEventListener('click', this.documentClick)
  },
  mounted: function () {
    if (!this.$store.getters.categories.length) {
      this.$store.dispatch('getCategories').catch((error) => {
        console.error(error)
      })
    }
    window.addEventListener('scroll', (event) => {
      this.scrollY = Math.round(window.scrollY)
    })
  },
  components: {
    SearchContainer,
    LanguageSwitcher,
    HamburgerMenu,
    'hamburger-menu': HamburgerMenu
  },
  watch: {
    showSearch: function (value) {
      if (value) {
        document.addEventListener('keyup', (e) => {
          if (e.key === 'Escape') {
            this.closeSearch()
          }
        })
      } else {
        document.removeEventListener('keyup', this.closeSearch)
      }
    },
    $route: function (to, from) {
      if (this.showSearch) {
        this.closeSearch()
      }
    },
    scrollY: function (newValue) {
      this.sticky = newValue > 85
    }
  },
  methods: {
    toggleSearch: function () {
      if (!this.showSearch) {
        this.savedY = this.scrollY
        this.$store.commit('SET_NO_SCROLL', !this.$store.getters.noScroll)
        this.showSearch = !this.showSearch
        console.log('Saved Y location: ' + this.savedY)
      } else {
        this.$store.commit('SET_NO_SCROLL', !this.$store.getters.noScroll)
        this.showSearch = !this.showSearch
        console.log('Used Y location: ' + this.savedY)
        window.setTimeout(() => {
          window.scroll(0, this.savedY)
          this.savedY = 0
        }, 100)
      }
    },
    closeSearch: function () {
      this.$store.commit('SET_NO_SCROLL', false)
      this.showSearch = false
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
    },
    getLogoImage: function () {
      return require('../../assets/images/icons/tm_header_logo.svg')
    }
  }
}
</script>

<style lang="scss">
#nav {
  border-top: solid 1px #f1f1f1;

  &.fixed {
    padding-top: 84px;

    .header-wrapper {
      position: fixed;
      animation: slideDown 0.3s;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 4;
      background-color: #ffffff;
    }
  }

  .header-wrapper {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    border-bottom: solid 1px #f1f1f1;

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
              width: 520px;
              display: flex;
              flex-wrap: wrap;

              li {
                width: 260px;
                margin-right: 0;
              }
            }
            &.reorder {
              flex-direction: column;
              display: flex;
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
      width: 185px;
      transform: translate(-50%, -50%);
      @media screen and (max-width: 910px) {
        width: 129px;
      }
      @media screen and (max-width: 760px) {
        width: 100px;
      }
      @media screen and (max-width: 370px) {
        left: 45%;
      }

      .mall-logo {
        font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';
        img{
          width: 100%;
        }
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

          &:before {
            content: '';
            height: 0;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 0;
            position: absolute;
            background: #000;
            transition: height 0.3s;
          }

          &:hover {
            > div > a,
            > a {
              color: #fff;

              img {
                filter: invert(1);
              }
            }

            .language-switcher {
              .lang-wrapper {
                > a {
                  color: #fff;

                  img {
                    filter: invert(1);
                  }
                }
              }
            }

            &:before {
              height: 100%;
              top: auto;
              bottom: 0;
            }
          }

          a {
            padding: 35.5px 29px;
            min-width: 85px;
            box-sizing: border-box;
            display: flex;
            text-align: center;
            cursor: pointer;
            z-index: 1;
            position: relative;
            @media screen and (max-width: 1060px) {
              padding: 23px 18px;
              min-width: 0;
            }
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
            top: calc(100% - 11px);
            left: -42px;
            padding: 32px;
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.13);

            &.mobile-version {
              right: 2px;
              top: calc(100% - 5px);
              left: auto;
            }

            &.slideUp-enter-active {
              animation: subMenuEnter .4s;
            }

            &.slideUp-leave-active {
              animation: subMenuLeave .2s;
            }

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

  #hamburger-menu {
    margin: auto 0;
  }

  .navigation-menu {
    border-left: solid 1px #f1f1f1;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1350px) {
      display: none;
    }

    > li {
      @media screen and (max-width: 1550px) {
        &:last-child {
          display: none;
        }
      }

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
