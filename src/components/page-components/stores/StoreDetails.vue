<template>
  <div id="store-details">
    <loading-big v-show="loading"/>
    <div class="store-details-container" v-if="store">
      <div class="store-details-cover" v-if="store.photoUrl">
        <img :src="store.photoUrl" :alt="store.name[locale]">
      </div>
      <div class="store-details-body">
        <div class="store-details-content">
          <div class="logo-part-wrapper" v-if="$mq !== 'mobile'">
            <div class="logo-container">
              <img :src="store.logoUrl" :alt="store.name[locale]">
            </div>
            <div class="subscribe-button-container">
              <button class="subscribe-button" :class="{alreadySubscribed: isSubscribed}" @click="subscribe(store._id)">
                <span class="subscribe" v-if="!isSubscribed">
                  {{t('subscribe')}}
                </span>
                <span class="unsubscribe" v-else>
                  <span class="subscribed">
                     <img src="../../../assets/images/icons/pwichka.svg" height="6"
                          width="9"> <span>{{t('subscribed')}}</span>
                  </span>
                  <span class="hover">
                    {{t('unsubscribe')}}
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div class="content-wrapper">
            <div class="content">
              <div class="content-main">
                <div class="breadcrumb">
                  <div class="breadcrumb-item">
                    <router-link :to="{name: 'home', params:{locale: locale}}">{{t('home')}}
                    </router-link>
                  </div>
                  <div class="breadcrumb-item">
                    <router-link :to="{name: 'stores'}">{{t('stores')}}</router-link>
                  </div>
                  <div class="breadcrumb-item">
                    <router-link to=""> {{store.name[locale]}}</router-link>
                  </div>
                </div>
                <div class="title-container">
                  <h1 class="title">{{store.name[locale]}}</h1>
                </div>
                <div class="logo-part-wrapper" v-if="$mq === 'mobile'">
                  <div class="logo-container">
                    <img :src="store.logoUrl" :alt="store.name[locale]">
                  </div>
                  <div class="subscribe-button-container">
                    <button class="subscribe-button" :class="{alreadySubscribed: isSubscribed}"
                            @click="subscribe(store._id)">
                <span class="subscribe" v-if="!isSubscribed">
                  {{t('subscribe')}}
                </span>
                      <span class="unsubscribe" v-else>
                  <span class="subscribed">
                     <img src="../../../assets/images/icons/pwichka.svg" height="6"
                          width="9"> <span>{{t('subscribed')}}</span>
                  </span>
                  <span class="hover">
                    {{t('unsubscribe')}}
                  </span>
                </span>
                    </button>
                  </div>
                </div>
                <div class="p-container">
                  <p v-html="formatP(store.description[locale])"></p>
                </div>
              </div>
              <div class="content-socials">
                <div class="socials-wrapper">
                  <div class="socials-title">
                    <h4>{{t('socials')}}</h4>
                  </div>
                  <ul>
                    <li v-if="store.socials.facebook.length">
                      <a :href="store.socials.facebook" target="_blank">
                        <img src="../../../assets/images/icons/facebook.svg" height="15">
                      </a>
                    </li>
                    <li v-if="store.socials.twitter.length">
                      <a :href="store.socials.twitter" target="_blank">
                        <img src="../../../assets/images/icons/twitter.svg" height="12">
                      </a>
                    </li>
                    <li v-if="store.socials.youtube.length">
                      <a :href="store.socials.youtube" target="_blank">
                        <img src="../../../assets/images/icons/youtube.svg" height="10">
                      </a>
                    </li>
                    <li v-if="store.socials.pinterest.length">
                      <a :href="store.socials.pinterest" target="_blank">
                        <img src="../../../assets/images/icons/pinterest.svg" height="15">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="contact-info">
              <ul>
                <li v-if="store.phone">
                  <span class="icon store-phone">
                    <img src="../../../assets/images/icons/Phone.svg" alt="Phone icon">
                  </span>
                  <span class="info">
                    {{formatPhoneNumber(store.phone)}}
                  </span>
                </li>
                <li v-if="store.websiteLink">
                  <span class="icon store-link">
                    <img src="../../../assets/images/icons/Web.svg" alt="Web icon">
                  </span>
                  <span class="info">
                    <a :href="formatUrl(store.websiteLink)" target="_blank">
                      {{store.websiteLink}}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div class="content-socials bottom">
              <div class="socials-wrapper">
                <div class="socials-title">
                  <h4>{{t('socials')}}</h4>
                </div>
                <ul>
                  <li>
                    <a :href="store.socials.facebook" target="_blank">
                      <img src="../../../assets/images/icons/facebook.svg" height="15">
                    </a>
                  </li>
                  <li>
                    <a :href="store.socials.twitter" target="_blank">
                      <img src="../../../assets/images/icons/twitter.svg" height="12">
                    </a>
                  </li>
                  <li>
                    <a :href="store.socials.youtube" target="_blank">
                      <img src="../../../assets/images/icons/youtube.svg" height="10">
                    </a>
                  </li>
                  <li>
                    <a :href="store.socials.pinterest" target="_blank">
                      <img src="../../../assets/images/icons/pinterest.svg" height="15">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="store-map-promotion">
        <div class="store-map-wrapper">
          <div class="part-map" id="part-map">
            <div id="pi-widget" style="height:517px" ref="partMap">
            </div>
            <mall-map-js :x="store.x" :y="store.y" :zone="store.zone" :storeName="store.name.en"/>
          </div>
          <div class="part-promotions" v-if="storePromotions.length">
            <div class="slider-title">
              <h4>{{t('promotion')}}</h4>
            </div>
            <small-slider :items="storePromotions" logoOption="photoUrl" nameOption="name"
                          descriptionOption="shortDescription"/>
          </div>
        </div>
      </div>
      <div class="share-container">
        <div class="share-inner">
          <button class="share-button" @click="shareOnFacebook">
                <span class="icon-container">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/>
                </span>
            <span>{{t('share_on_facebook')}}</span>
          </button>
          <social-sharing :hashtags="formatFilters"
                          inline-template>
            <div class="share-tl">
              <network network="twitter">
                <button class="share-button">
                <span class="icon-container">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                </span>
                  <span>{{t('share_on_twitter')}}</span>
                </button>
              </network>
              <network network="linkedin">
                <button class="share-button">
                <span class="icon-container">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"/>
                </span>
                  <span>{{t('share_on_linkedin')}}</span>
                </button>
              </network>
            </div>
          </social-sharing>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoadingBig from '../../partials/LoadingBig'
import SocialSharingNetwork from 'vue-social-sharing/src/social-sharing-network'
import ButtonStandard from '../../partials/StandardButton'
import SmallSlider from '../../partials/SmallSlider'
import MallMapJs from '../../partials/MallMapJs'
import metas from '../../../lang/meta/metas'

export default {
  name: 'store-details',
  components: { MallMapJs, SmallSlider, ButtonStandard, SocialSharingNetwork, LoadingBig },
  metaInfo: function () {
    return this.metaData
  },
  mounted: function () {
    this.loadStore()
    if (!this.$store.getters.fbLoaded) {
      this.initFacebook().then(() => {
        // eslint-disable-next-line
        FB.XFBML.parse()
      })
    } else {
      // eslint-disable-next-line
      FB.XFBML.parse()
    }

    if (this.$store.getters.user && !this.$store.getters.subscribed.length) {
      this.$store.dispatch('getSubscribed').catch((error) => {
        console.error(error)
      })
    }
    if (this.$route.params.store) {
      this.getPromotions()
    }
  },
  data: function () {
    return {
      store: null,
      loading: false,
      storePromotions: []
    }
  },
  watch: {
    $route: function () {
      this.loadStore()
      this.getPromotions()
    }
  },
  computed: {
    metaData: function () {
      let name = this.store ? this.store.name[ this.locale ] : 'loading'
      let description = this.store ? this.store.description[ this.locale ] : 'loading'
      let logoUrl = this.store ? this.store.logoUrl : 'loading'
      return metas.customPageMeta(name, description, logoUrl)
    },
    isSubscribed: function () {
      if (!this.$store.getters.user) {
        return false
      }
      const store = this.$store.getters.subscribed.filter(object => {
        if (object && object._id === this.store._id) {
          return object
        }
      })
      return store.length
    },
    formatFilters: function () {
      return this.store.filters.join(',')
    }
  },
  methods: {
    shareOnFacebook: function () {
      this.shareOverrideOGMeta(this.currentUrl, this.store.name[ this.locale ], this.store.description[ this.locale ], this.store.logoUrl)
    },
    getPromotions: function () {
      this.$http.get(this.$store.state.apiUrls.storePromotions(this.$route.params.store))
        .then((response) => {
          this.storePromotions = response.data.promotions
        })
        .catch((error) => {
          console.error(error)
        })
    },
    loadStore: function () {
      this.loading = true
      this.store = null
      this.$store.dispatch('findStore', this.$route.params.store).then((response) => {
        console.log(response)
        this.store = response
        this.loading = false
      })
    },
    subscribe: function (id) {
      const user = this.$store.getters.user
      if (!user) {
        this.$router.push({ name: 'login', params: { locale: this.locale }, query: { redirect: this.$route.fullPath } })
      } else {
        this.$http.post(this.$store.state.apiUrls.subscribe, {
          userToken: user.token,
          storeId: id
        }).then(() => {
          this.$notify({
            group: 'notify',
            type: 'success',
            title: this.t('subscribed_successfully')
          })
          if (!this.isSubscribed) {
            this.$store.dispatch('showPopup', {
              message: this.t('subscribed_successfully'),
              icon: 'success'
            })
          } else {
            this.$store.dispatch('showPopup', {
              message: this.t('unsubscribed_successfully'),
              icon: 'success'
            })
          }
          this.$store.dispatch('getSubscribed').catch((error) => {
            console.error(error)
          })
        }).catch((error) => {
          console.error(error)
          this.$notify({
            group: 'notify',
            type: 'error',
            title: 'Error',
            text: error
          })
        })
      }
    },
    getFacebookIcon: function () {
      return require('../../../assets/images/icons/facebook.svg')
    }
  }
}
</script>
<style lang="scss">
.breadcrumb {
  display: flex;
  @media screen and (max-width: 760px) {
    justify-content: center;
  }

  .breadcrumb-item {
    font-size: 1.1rem;
    line-height: 1.27;
    color: #848484;

    &:nth-child(n + 2) {
      &:before {
        content: '>';
        display: inline-block;
        margin: 0 5px;
      }
    }
  }
}

.small-slider .small-slider-container .slide {
  margin-bottom: 12px;
}

.share-container {
  .share-button {
    border: 1px solid #dcdcdc;
    display: flex;
    background: transparent;
    width: 293px;
    margin: 20px 5px 10px;
    padding: 0;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      height: 0;
      width: 100%;
      left: 0;
      bottom: 0;
      position: absolute;
      background: #000;
      z-index: 0;
      transition: height .3s;
    }

    &:hover {
      &:before {
        height: 100%;
      }

      span {
        &:first-child {
          svg {
            filter: invert(1);
          }
        }

        &:last-child {
          color: #ffffff;
        }
      }
    }

    span {
      margin: auto 0;
      z-index: 1;

      &:first-child {
        width: 46px;
        padding: 15px 0;
        border-right: 1px solid #dcdcdc;
        font-size: 1.5rem;
      }

      &:last-child {
        width: 100%;
        margin: auto;
        font-family: 'Muli SemiBold', 'BPG Nino Mtavruli', 'sans-serif';
        font-size: 12px;
        line-height: 1.25;
        text-transform: uppercase;
      }
    }
  }
  .share-inner {
    display: flex;
    justify-content: center;
    padding: 5px 0;
    border-top: 1px solid #dcdcdc;
    flex-wrap: wrap;
    .share-tl {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}

#store-details {
  .store-map-promotion {
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;

    .store-map-wrapper {
      width: 95%;
      margin: 0 auto;
      max-width: 1640px;
      display: flex;
      @media screen and (max-width: 927px) {
        flex-direction: column;
      }
      @media screen and (max-width: 760px) {
        width: 100%;
      }

      .part-promotions {
        width: 430px;
        padding: 28px 16px 0;
        border-left: 1px solid #dcdcdc;
        border-right: 1px solid #dcdcdc;
        @media screen and (max-width: 927px) {
          margin: 0 auto;
          padding-top: 25px;
          border: none;
        }
        @media screen and (max-width: 600px) {
          width: calc(100% - 72px);
          padding: 0;
        }

        .slider-title {
          h4 {
            font-size: 1.6rem;
            font-weight: 300;
            text-align: center;
            margin: 0 0 22px 0;
            text-transform: uppercase;
            font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
          }
        }

        .small-slider .small-slider-container .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .part-map {
        padding: 75px 39px 75px 26px;
        width: calc(100% - 430px);
        @media screen and (max-width: 927px) {
          width: 100%;
          padding: 36px 0;
        }
      }
    }
  }

  .store-details-cover {
    width: 100%;
    padding-top: 39.584%;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .store-details-body {
    width: 100%;
    max-width: 1640px;
    margin: 0 auto;
    padding-bottom: 17px;
    @media screen and (max-width: 1660px) {
      width: calc(100% - 40px);
      margin: 0 20px;
    }
    @media screen and (max-width: 760px) {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .store-details-content {
      display: flex;
      margin-top: 21px;

      .logo-part-wrapper {
        margin-right: 52px;
        @media screen and (max-width: 760px) {
          width: 145px;
          margin: 0 auto;
        }

        .logo-container {
          height: 244px;
          width: 244px;
          background: white;
          display: flex;
          border: 1px solid rgba(0, 0, 0, 0.5);
          @media screen and (max-width: 760px) {
            width: 145px;
            height: 145px;
            margin: 0 auto;
          }

          img {
            height: calc(100% - 100px);
            width: calc(100% - 100px);
            margin: auto;
            object-fit: contain;
            @media screen and (max-width: 760px) {
              height: calc(100% - 35px);
              width: calc(100% - 35px);
            }
          }
        }

        .subscribe-button-container {
          width: 100%;
          margin-top: 10px;

          .subscribe-button {
            border: 1px solid #eead16;
            font-family: 'Muli', 'BPG Arial', 'sans-serif';
            width: 100%;
            padding: 12px 0 16px 0;
            background: transparent;
            font-size: 1.3rem;
            text-transform: capitalize;
            line-height: 1.23;
            text-align: center;
            color: #eead16;
            cursor: pointer;
            position: relative;

            &.alreadySubscribed {
              border: 1px solid #000000;
              color: #000000;
            }

            .hover {
              display: none;
            }

            .subscribed {
              img {
                margin-right: 5px;
              }
            }

            &:hover {
              .subscribed {
                display: none;
              }

              .hover {
                display: block;
              }
            }

            &:before {
              content: '';
              position: absolute;
              height: 0;
              width: 100%;
              background: #eead16;
              z-index: -1;
              bottom: 0;
              left: 0;
              transition: height 0.3s;
            }

            &.active,
            &:hover {
              color: #ffffff;

              &:before {
                height: 100%;
                transition: height 0.3s;
              }
            }

            &.alreadySubscribed {
              &:before {
                background: #000;
              }
            }
          }
        }
      }

      .content-wrapper {
        width: calc(100% - 296px);
        @media screen and (max-width: 760px) {
          max-width: 100%;
          width: 100%;
        }

        .content {
          display: flex;

          .content-main {
            width: 90%;
            max-width: 1050px;
            @media screen and (max-width: 760px) {
              max-width: 100%;
              width: 100%;
            }

            .title-container {
              .title {
                font-family: 'Muli SemiBold', 'BPG Nino Mtavruli', 'sans-serif';
                font-size: 3.5rem;
                margin: 15px 0 19px;
                font-weight: 600;
                line-height: 1.26;
                text-transform: uppercase;
                @media screen and (max-width: 760px) {
                  text-align: center;
                  border-bottom: 1px solid #dcdcdc;
                  padding-bottom: 30px;
                }
              }
            }

            .p-container {
              @media screen and (max-width: 760px) {
                padding: 0 36px;
              }

              p {
                font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
                font-size: 1.8rem;
                font-weight: 300;
                line-height: 1.28;
                color: #000;
                opacity: 1;
              }
            }
          }
        }

        .contact-info {
          margin-top: 21px;

          ul {
            width: 90%;
            max-width: 1050px;
            padding: 21px 0 17px;
            border-top: solid 1px #dcdcdc;
            display: flex;
            @media screen and (max-width: 1100px) {
              width: 100%;
            }
            @media screen and (max-width: 760px) {
              padding: 20px 36px;
              flex-wrap: wrap;
              justify-content: space-between;
            }

            li {
              display: flex;
              margin-right: 54px;
              font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
              font-size: 1.4rem;
              line-height: 1.29;
              @media screen and (max-width: 760px) {
                margin: 12px 0;
              }

              > span {
                margin: auto 0;
              }

              .icon {
                height: 34px;
                width: 34px;
                margin-right: 25px;
                /*border: 1px solid #707070;*/
                /*border-radius: 50%;*/
                img {
                  height: 100%;
                  width: 100%;
                }
              }

              .info {
                color: #848484;

                a {
                  color: #2d83e6;
                  font-size: inherit;
                  line-height: inherit;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
      }
    }

    .content-socials {
      width: 12%;
      max-width: 122px;
      display: flex;
      margin-left: auto;
      border-left: 1px solid #dcdcdc;
      border-right: 1px solid #dcdcdc;
      flex-direction: column;
      @media screen and (max-width: 1100px) {
        display: none;
      }

      &.bottom {
        display: none;
        @media screen and (max-width: 1100px) {
          display: block;
          width: 100%;
          max-width: 100%;
          border: none;
        }
      }

      .socials-wrapper {
        margin: auto;
        @media screen and (max-width: 1100px) {
          display: flex;
          padding: 12px 0;
          border-top: 1px solid #dcdcdc;
        }
        @media screen and (max-width: 760px) {
          padding: 20px 36px;
        }

        .socials-title {
          h4 {
            font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
            font-size: 1.4rem;
            font-weight: 300;
            text-transform: uppercase;
            line-height: 1.29;
            margin: 0;
          }
        }

        ul {
          @media screen and (max-width: 1100px) {
            display: flex;
            justify-content: space-around;
            flex: 1;
          }

          li {
            margin: 19px 0;
            text-align: center;
            @media screen and (max-width: 1100px) {
              margin: auto 0;
            }
          }
        }
      }
    }
  }
}
</style>
