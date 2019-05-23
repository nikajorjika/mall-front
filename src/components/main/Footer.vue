<template>
  <footer id="footer">
    <div class="desktop-footer">
      <section class="subscribe">
        <newsletter-subscribe/>
      </section>
      <div class="footer-content" v-if="$mq !== 'mobile'">
        <div class="menus-wrapper">
          <!--<div class="menu-item" v-for="item in this.menus" v-bind:key="item.title">-->
          <!--<footer-menu-item :title="item.title" :items="item"/>-->
          <!--</div>-->
          <div class="menu-item">
            <footer-menu-item :title="t('main')" :items="$store.getters.navigation"/>
          </div>
          <div class="menu-item">
            <footer-menu-item :title="t('information')" :items="$store.state.staticPages"/>
          </div>
          <div class="menu-item">
            <footer-socials-item :title="t('social')" :items="$store.state.socials"/>
          </div>
          <div class="menu-item">
            <footer-menu-item :title="t('working_hours')" :items="hours"/>
            <footer-menu-item :title="t('address')" :items="contactInfo"
                              class="mini"/>
          </div>
        </div>
      </div>
      <div class="footer-content footer-mobile-content" v-else>
        <div class="menus-wrapper">
          <div class="mobile-menu-item">
            <div class="menu-group">
              <div class="group-title" @click="toggleMenu('main')">
                <h5>{{t('main')}}</h5>
                <span class="dropdown-icon"><font-awesome-icon icon="caret-down"/></span>
              </div>
              <transition name="slideDown">
                <div class="group" v-if="menuOpen === 'main'">
                  <ul class="content-ul">
                    <li v-for="(child, index2) in $store.getters.navigation" :key="index2" class="content-li">
                      <router-link :to="`/${locale}${child.url}`">
                        <div class="item-wrapper">
                          {{child.name[locale]}}
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
          <div class="mobile-menu-item">
            <div class="menu-group">
              <div class="group-title" @click="toggleMenu('information')">
                <h5>{{t('information')}}</h5>
                <span class="dropdown-icon"><font-awesome-icon icon="caret-down"/></span>
              </div>
              <transition name="slideDown">
                <div class="group" v-if="menuOpen === 'information'">
                  <ul class="content-ul">
                    <li v-for="(child, index2) in $store.state.staticPages" :key="index2" class="content-li">
                      <router-link :to="`/${locale}${child.url}`">
                        <div class="item-wrapper">
                          {{child.name[locale]}}
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
          <div class="mobile-menu-item">
            <div class="menu-group">
              <div class="group-title" @click="toggleMenu('socials')">
                <h5>{{t('socials')}}</h5>
                <span class="dropdown-icon"><font-awesome-icon icon="caret-down"/></span>
              </div>
              <transition name="slideDown">
                <div class="group" v-if="menuOpen === 'socials'">
                  <ul class="content-ul">
                    <li v-for="(child, index2) in $store.state.socials" :key="index2" class="content-li">
                      <a :href="child.link" target="_blank">
                        <div class="item-wrapper">
                          {{child.name}}
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
          <div class="menu-item bottom-menu-part">
            <footer-menu-item :title="t('working_hours')" :items="hours"/>
            <footer-menu-item :title="t('address')" :items="contactInfo"
                              class="mini"/>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p class="copyright-content">Copyright © <span class="strong">Tbilisi Mall</span> - All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import NewsletterSubscribe from '../partials/NewsLetters'
import FooterMenuItem from '../partials/FooterMenuItem'
import FooterSocialsItem from '../partials/FooterSocials'

export default {
  name: 'footer-component',
  components: {
    FooterSocialsItem,
    FooterMenuItem,
    NewsletterSubscribe
  },
  data: function () {
    return {
      menuOpen: null,
      hours: [ {
        name: {
          en: 'Every Day from 10:00 to 22:00',
          ka: 'ყოველ დღე 10:00-დან 22:00-მდე'
        },
        url: '#'
      } ],
      contactInfo: [
        {
          name: {
            en: '16 km Agmashenebeli Avenue, <br> 0131 Tbilisi, Georgia',
            ka: '16 კმ აღმაშენებლის გამზირი, <br> 0131 თბილისი, საქართველო'
          },
          url: '#'
        },
        {
          name: {
            en: '<span class="no-capitalize">info@tbilisimall.com</span>',
            ka: '<span class="no-capitalize">info@tbilisimall.com</span>'
          },
          url: ''
        },
        {
          name: {
            en: '+995 322 505 556',
            ka: '+995 322 505 556'
          },
          url: ''
        } ]
    }
  },
  methods: {
    toggleMenu: function (item) {
      this.menuOpen = this.menuOpen === item ? null : item
    }
  }
}
</script>
<style lang="scss">
#footer {
  .footer-content {
    padding: 84px 0;
    background-color: #f9f9f9;
    border-top: 1px solid #dcdcdc;
    border-bottom: solid 0.5px #eeeeee;
    @media screen and (max-width: 760px) {
      padding: 0;
    }
  }
  @media screen and (max-width: 760px) {
    .item-wrapper {
      font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 1.29;
      color: #3a3838;
      text-transform: capitalize;
      &:hover {
        color: #999;
      }
    }
  }
  .menus-wrapper {
    display: flex;
    width: 85%;
    margin: 0 auto;
    @media screen and (max-width: 760px) {
      flex-direction: column;
    }

    .menu-item {
      width: 25%;
      @media screen and (max-width: 760px) {
        width: 100%;
      }
    }
  }

  .footer-mobile-content {
    .menus-wrapper {
      width: 100%;
      .menu-group {
        .group-title {
          display: flex;
          padding: 25px 36px;
          background: #ffffff;
          border-bottom: 1px solid #dcdcdc;

          h5 {
            font-size: 1.8rem;
            margin: 0;
            text-transform: uppercase;
          }

          .dropdown-icon {
            margin: auto 0 auto auto;
          }
        }

        .group {
          ul {
            display: flex;
            flex-direction: column;

            li {
              margin: 10px 36px;
            }
          }
        }
      }
      .bottom-menu-part {
        margin: 60px 36px;
        width: calc(100% - 72px);
      }
    }
  }

  .copyright {
    .copyright-content {
      padding: 10.5px;
      text-align: center;
      font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
      font-size: 1.1rem;
      line-height: 1.27;
      color: #848484;
      opacity: 1;
      margin: 0;

      .strong {
        color: #000;
      }
    }
  }
}
</style>
