<template>
  <div id="hamburger-menu">
    <div class="hamburger-container" @click="toggleHamburgerMenu">
      <default-icon class="nav-hamburger" :icon="`bars`"/>
    </div>
    <transition name="fade">
      <div class="content-container" v-if="showMenu" @click="close">
        <div class="inner-content-container" @click.stop>
          <div class="close-icon" :class="{hideSmall: currentItem !== null}">
            <default-icon class="hamburger-close-button" :icon="`close`" @click="toggleHamburgerMenu"/>
            <!--<search-container class="hamburger-search"/>-->
          </div>
          <div class="right-container">
            <div class="right-inner-container">
              <div class="ham-logo-container" :class="{hideSmall: currentItem !== null}">
                <router-link to="/">
                  <img class="logo" src="../../assets/images/icons/TM_LOGO.svg">
                </router-link>
              </div>
              <div class="menu-container" :class="{hideSmall: currentItem !== null}">
                <transition name="fadeIn">
                  <div class="list-wrapper" v-if="currentItem === null">
                    <div class="list-container" v-for="(data, i) in $store.state.hamburgerData" v-bind:key="i">
                      <h3 class="parent-title">
                        <a class="title" @click="openChildren(data)">
                          {{data.name[locale]}}
                        </a>
                        <span v-if="data.children"
                              class="open-children" @click="openChildren(data)"><span class="icon-container"><font-awesome-icon
                          icon="caret-right"/></span></span>
                      </h3>
                    </div>
                  </div>
                </transition>
                <transition name="fadeSide">
                  <div class="child-list-wrapper" v-if="currentItem !== null">
                    <div class="list-parent-title">
                      <div class="back-icon-container" @click="closeChildren">
                        <div class="back-icon-inner">
                          <img src="../../assets/images/icons/arrow-left-dark.svg" alt="" height="15.5" width="8.5">
                        </div>
                      </div>
                      <h4>{{currentItem.name[locale]}}</h4>
                    </div>
                    <div class="children-list">
                      <ul v-if="currentItem.url === '/stores'">
                        <li v-for="(child, index) in getFilteredCategories('stores')" :key="index * 1">
                          <router-link :to="`/${locale}${currentItem.url}/${createSlug(child.translates.en)}`"
                                       class="child-menu-name">
                            {{child.translates[locale]}}
                          </router-link>
                        </li>
                        <li class="view-all">
                          <router-link :to="`/${locale}${currentItem.url}`"
                                       class="child-menu-name">
                            <span>{{t('viewAll')}}</span>
                            <span><img src="../../assets/images/icons/left-arrow-subscribe.svg" alt="arrow left"></span>
                          </router-link>
                        </li>
                      </ul>
                      <ul v-else-if="currentItem.url === '/entertainment'">
                        <li v-for="(child, index) in getFilteredCategories('entertainment')" :key="index * 10">
                          <router-link :to="`/${locale}${currentItem.url}/${createSlug(child.translates.en)}`"
                                       class="child-menu-name">
                            {{child.translates[locale]}}
                          </router-link>
                        </li>
                        <li class="view-all">
                          <router-link :to="`/${locale}${currentItem.url}`"
                                       class="child-menu-name">
                            <span>{{t('viewAll')}}</span>
                            <span><img src="../../assets/images/icons/left-arrow-subscribe.svg" alt="arrow left"></span>
                          </router-link>
                        </li>
                      </ul>
                      <ul v-else-if="currentItem.url === '/services'">
                        <li v-for="(child, index) in getFilteredCategories('services')" :key="index * 100">
                          <router-link :to="`/${locale}${currentItem.url}/${createSlug(child.translates.en)}`"
                                       class="child-menu-name">
                            {{child.translates[locale]}}
                          </router-link>
                        </li>
                        <li class="view-all">
                          <router-link :to="`/${locale}${currentItem.url}`"
                                       class="child-menu-name">
                            <span>{{t('viewAll')}}</span>
                            <span><img src="../../assets/images/icons/left-arrow-subscribe.svg" alt="arrow left"></span>
                          </router-link>
                        </li>
                      </ul>
                      <ul v-else>
                        <li v-for="(child, index) in currentItem.children" :key="index * 1000"
                            :class="{rightBorder: index % 2 === 0 }">
                          <router-link :to="`/${locale}${currentItem.url}${child.url}`"
                                       class="child-menu-name">
                            {{child.name[locale]}}
                          </router-link>
                        </li>
                        <li class="view-all">
                          <router-link :to="`/${locale}${currentItem.url}`"
                                       class="child-menu-name">
                            <span>{{t('viewAll')}}</span>
                            <span><img src="../../assets/images/icons/left-arrow-subscribe.svg" alt="arrow left"></span>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </div>
              <language-switcher class="language-switcher" v-if="$mq === 'mobile' && currentItem === null"/>
              <div class="mobile-socials" v-if="$mq === 'mobile' && currentItem === null">
                <ul>
                  <li class="" v-for="(social, index) in $store.getters.socials" :key="index">
                    <a :href="social.link" target="_blank">
                      <font-awesome-icon :icon="{ prefix: 'fab', iconName: getIconName(social.name) }"/>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="hamburger-info-block">
                <div class="additional-info-item">
                  <h4>{{t('working_hours')}}:</h4>
                  <p v-html="t('working_hours_content')"></p>
                </div>
                <div class="additional-info-item">
                  <h4>{{t('address')}}:</h4>
                  <p v-html="t('address_content')"></p>
                </div>
                <div class="additional-info-item">
                  <ul v-if="$mq !== 'mobile'">
                    <li class="" v-for="(social, index) in $store.getters.socials" :key="index">
                      <a :href="social.link" target="_blank">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: getIconName(social.name) }"/>
                      </a>
                    </li>
                  </ul>
                  <div class="email-wrapper">
                    <a href="mailto:info@tbilisimall.com">
                      info@tbilisimall.com
                    </a>
                  </div>
                  <div class="phone-wrapper">
                    <a href="tel:+995322505556">
                      +995 322 505 556
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import DefaultIcon from './DefaultIcons'
import LanguageSwitcher from './LanguageSwitcher'

export default {
  name: 'hamburger-menu',
  mounted: function () {
    if (!this.$store.getters.socials.length) this.getSocials()
  },
  data: function () {
    return {
      showMenu: false,
      savedY: 0,
      currentItem: null
    }
  },
  methods: {
    toggleHamburgerMenu: function () {
      this.showMenu = !this.showMenu
      this.savedY = window.scrollY
      this.$store.commit('SET_NO_SCROLL', !this.$store.getters.noScroll)
      this.currentItem = null
    },
    openChildren: function (data) {
      this.currentItem = data
    },
    closeChildren: function () {
      this.currentItem = null
    },
    close: function () {
      this.showMenu = false
      this.currentItem = null
      this.$store.commit('SET_NO_SCROLL', false)
      window.setTimeout(() => {
        window.scroll(0, this.savedY)
        this.savedY = 0
      }, 100)
    },
    getSocials: function () {
      this.$store.dispatch('getSocials').catch(function (error) {
        console.error(error.message)
      })
    }
  },
  watch: {
    showMenu: function (value) {
      if (value) {
        document.addEventListener('keyup', (e) => {
          if (e.key === 'Escape') {
            this.close()
          }
        })
      } else {
        document.removeEventListener('keyup', this.close)
      }
    },
    $route: function (to, from) {
      if (this.showMenu === true) {
        this.close()
      }
    }
  },
  components: {
    LanguageSwitcher,
    DefaultIcon
  }
}
</script>

<style lang="scss">
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
    z-index: 99;
    background: rgba(0, 0, 0, 0.4);
    &.fade-leave-active {
      animation: fadeOut .5s;
    }
    &.fade-enter-active {
      animation: fadeIn .5s;
    }
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
      min-width: 887px;
      width: 71%;
      background: #ffff;
      z-index: 4;
      position: relative;
      height: 100%;
      @media screen and (max-width: 887px) {
        width: 100%;
        min-width: 100%;
      }
      @media screen and (max-width: 760px) {
        flex-direction: column;
      }
      .close {
        font-size: 14px;
      }
      .right-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        .right-inner-container {
          overflow-y: auto;
          height: 100%;
          position: absolute;
          width: calc(100% + 17px);
        }
        .ham-logo-container {
          width: 155.8px;
          margin: 35.6px auto;
          @media screen and (max-width: 760px) {
            display: none;
          }
        }
        .menu-container {
          position: relative;
          margin-top: 117px;
          @media screen and (max-width: 760px) {
            margin-top: 0;
          }
          .list-wrapper {
            &.fadeIn-enter-to {
              animation: fadeIn .7s;
            }
            .list-container {
              .parent-title {
                font-size: 1.8rem;
                font-family: 'Muli SemiBold', 'BPG Nino Mtavruli', 'sans-serif';
                font-weight: 600;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.28;
                color: #000000;
                text-transform: uppercase;
                cursor: pointer;
                width: 100%;
                margin: 0;
                border-bottom: solid 1px #dcdcdc;
                display: flex;
                @media screen and (max-width: 1366px) {
                  font-size: 1.4rem;
                }
                .title {
                  padding: 25.5px 54px;
                  width: calc(100% - 80px);
                  @media screen and (max-width: 1366px) {
                    padding: 20px 36px;
                  }
                }
                .open-children {
                  margin-left: auto;
                  font-size: 17px;
                  width: 80px;
                  display: flex;
                  .icon-container {
                    margin: auto;
                    font-size: 1rem;
                  }
                }
              }
              &:first-child {
                .parent-title {
                  border-top: solid 1px #dcdcdc;
                }
              }
              ul {
                li {
                  font-family: Muli, 'BPG Nino Mtavruli', sans-serif;
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
          .child-list-wrapper {
            position: absolute;
            top: 0;
            width: 100%;
            background: #ffffff;
            &.fadeSide-leave-active {
              animation: fadeOutToLeft .5s;
            }
            &.fadeSide-enter-active {
              animation: fadeInFromLeft .5s;
            }
            .list-parent-title {
              display: flex;
              margin: 0 0 121px;
              @media screen and (max-width: 760px) {
                margin: 46px 0 49px 0;
              }
              .back-icon-container {
                width: 64px;
                font-size: 15px;
                text-align: right;
                display: flex;
                margin-left: 32px;
                cursor: pointer;
                .back-icon-inner {
                  margin: auto;
                }
              }
              h4 {
                width: calc(100% - 96px);
                font-size: 4rem;
                text-transform: uppercase;
                margin: 0 96px 0 0;
                text-align: center;
                @media screen and (max-width: 760px) {
                  font-size: 2.4rem;
                }
              }
            }
            .children-list {
              ul {
                display: flex;
                flex-wrap: wrap;
                li {
                  width: 50%;
                  border-right: 1px solid #dcdcdc;
                  border-bottom: 1px solid #dcdcdc;
                  .child-menu-name {
                    font-size: 1.3rem;
                    font-family: 'Muli SemiBold', 'BPG Nino Mtavruli', 'sans-serif';
                    font-weight: 600;
                    line-height: 1.23;
                    color: #000000;
                    display: block;
                    padding: 27px 54px;
                    @media screen and (max-width: 760px) {
                      padding: 36px 10px 36px 36px;
                      font-size: 1.1rem;
                    }
                  }
                  &.view-all {
                    a {
                      display: flex;
                      span:last-of-type {
                        margin-left: auto;
                        img {
                          width: 20.2px;
                          height: 9.7px;
                        }
                      }
                    }
                  }
                  &:nth-child(1) {
                    border-top: 1px solid #dcdcdc;
                  }
                  &:nth-child(2) {
                    border-top: 1px solid #dcdcdc;
                  }
                  &:nth-child(2n + 2) {
                    border-right: none;
                  }
                  &:last-child {
                    &.rightBorder {
                      border-right: 1px solid #dcdcdc;
                    }
                  }
                }
              }
            }
          }
        }
        .hamburger-info-block {
          display: flex;
          flex-wrap: wrap;
          margin: 108px 0 125px 0;
          padding-left: 55px;
          @media screen and (max-width: 760px) {
            flex-direction: column;
            margin: 0;
            padding: 16px 36px 60px;
            background: #f9f9f9;
          }
          .additional-info-item {
            width: 33%;
            display: flex;
            flex-direction: column;
            @media screen and (max-width: 760px) {
              width: 100%;
            }
            h4 {
              font-family: 'Muli SemiBold', 'BPG Nino Mtavruli', 'sans-serif';
              font-size: 2.4rem;
              text-transform: uppercase;
              color: #000;
              margin: 0;
              line-height: 1.25;
              @media screen and (max-width: 760px) {
                margin: 44px 0 13px;
              }
            }
            p {
              font-size: 1.4rem;
              font-family: 'Muli', 'BPG Arial', 'sans-serif';
              color: #848484;
              opacity: 1;
              margin: auto 0 0;
              @media screen and (max-width: 760px) {
                margin-bottom: 13px;
              }
            }
            ul {
              display: flex;
              width: 128px;
              justify-content: space-between;
              li {
                margin: auto 0;
              }
            }
            .email-wrapper {
              width: 128px;
              margin-top: auto;
              a {
                font-size: 1.4rem;
                font-family: 'Muli', 'BPG Arial', 'sans-serif';
                color: #2d83e6;
                line-height: 1.29;
              }
            }
            .phone-wrapper {
              width: 128px;
              margin-top: auto;
              a {
                font-size: 1.4rem;
                font-family: 'Muli', 'BPG Arial', 'sans-serif';
                color: #848484;
                line-height: 1.29;
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
        @media screen and (max-width: 760px) {
          &.hideSmall {
            display: none;
          }
        }
      }
    }
    .hamburger-search {
      width: 90%;
      max-width: 1655px;
      margin: 0 auto;
    }
    .mobile-socials {
      padding-right: 17px;
      ul {
        display: flex;
        li {
          flex: 1;
          border-right: 1px solid #dcdcdc;
          border-bottom: 1px solid #dcdcdc;
          &:last-child {
            border-right: none;
          }
          a {
            display: block;
            padding-top: 100%;
            position: relative;
            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              height: 14px;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
    .language-switcher {
      padding: 20px;
      border-bottom: 1px solid #dcdcdc;
      .lang-wrapper {
        text-align: center;
        font-size: 1.6rem;
        text-transform: uppercase;
        font-family: 'Muli SemiBold', 'BPG Nino Mtavruli', 'sans-serif';
      }
    }
  }
}
</style>
