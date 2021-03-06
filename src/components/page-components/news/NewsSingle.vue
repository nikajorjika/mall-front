<template>
  <div class="news-single" :id="`event_${item._id}`" ref="singleEvent">
    <div class="single-wrapper">
      <div class="half-col single-left">
        <div class="image-container">
          <img :src="item.photoUrl" :alt="item.name">
        </div>
      </div>
      <div class="half-col single-right">
        <div class="close-button">
          <router-link :to="closeUrl()" class="close-button-a" v-if="redirect">
            <default-icon class="hamburger-close-button" :icon="`close`" @click="closeEvent"/>
          </router-link>
          <a class="close-button-a" v-else>
            <default-icon class="hamburger-close-button" :icon="`close`" @click="closeEvent"/>
          </a>
        </div>
        <div class="bookmark">
          <div @click="bookmark(item._id)">
            <!--<font-awesome-icon icon="bookmark"/>-->
            <div class="do_bookmark">
              <img src="../../../assets/images/icons/bookmark.svg" alt="Bookmark">
              <span>+</span>
            </div>
            <div class="un_bookmark" :class="{bookmarked: bookmarked.length}">
              <img src="../../../assets/images/icons/bookmarked.svg" alt="Bookmark">
              <span>-</span>
            </div>
          </div>
        </div>
        <div class="title-container">
          <h2 class="title">{{item.name[locale]}}</h2>
          <h4 class="sub-title" v-if="store.length">
            <router-link :to="`/${locale}/store/${createSlug(store[0].name['en'])}/${store[0]._id}`">
              {{store[0].name[locale]}}
            </router-link>
          </h4>
        </div>
        <div class="description-container">
          <p v-html="item.description[locale]">
          </p>
        </div>
        <div class="socials-container">
          <div class="socials-inner-container">
            <div class="social-item" @click="shareOnFacebook(item)">
              <span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/></span>
              <span class="label">share</span>
            </div>
            <a class="social-item"
               :href="`https://twitter.com/intent/tweet?text=${item.name[locale]}&url=${currentUrl}`"
               target="_blank">
              <span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></span>
              <span class="label">tweet</span>
            </a>
            <a class="social-item"
               :href="`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${item.name[locale]}e&summary=${item.description[locale]}`"
               target="_blank">
              <span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"/></span>
              <span class="label">share</span>
            </a>
            <div class="social-item" @click="copyUrl('news-item-current-url')">
              <input id="news-item-current-url" :value="currentFullUrl" type="hidden">
              <span class="icon"><font-awesome-icon icon="link"/></span>
              <span class="label">{{t('copyLink')}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultIcon from '../../partials/DefaultIcons'

export default {
  name: 'news-single',
  components: { DefaultIcon },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    redirect: {
      type: Boolean,
      default: true
    }
  },
  mounted: function () {
    const VueScrollTo = require('vue-scrollto')

    const options = {
      easing: 'ease-in',
      force: true,
      offset: -100,
      cancelable: true,
      x: false,
      y: true
    }
    if (this.redirect) {
      window.setTimeout(() => {
        VueScrollTo.scrollTo(`#event_${this.item._id}`, 500, options)
      }, 300)
    }
    if (!this.$store.getters.storesList.length) {
      this.$store.dispatch('fetchItems', {
        model: `storesList`,
        api: this.$store.state.apiUrls[ `storesList` ],
        setter: 'SET_STORE_LIST'
      }).catch((error) => {
        console.error(error)
      })
    }
  },
  computed: {
    bookmarked: function () {
      return this.$store.getters.bookmarked.filter(object => {
        if (object) {
          return object._id === this.item._id
        }
      })
    },
    store: function () {
      return this.$store.getters.storesList.filter(store => {
        if (store._id === this.item.entityId) {
          return true
        }
      })
    }
  },
  methods: {
    shareOnFacebook: function (item) {
      this.shareOverrideOGMeta(this.currentUrl, item.name[ this.locale ], item.description[ this.locale ], item.photoUrl)
    },
    closeEvent: function () {
      this.$emit('close')
    },
    closeUrl: function () {
      const subCat = this.$route.params.cat !== 'single' ? this.$route.params.cat : ''
      return `/${this.locale}/whats-new/${subCat}`
    },
    bookmark: function (id) {
      const user = this.$store.getters.user
      if (!user) {
        this.$router.push({ name: 'login', params: { locale: this.locale }, query: { redirect: this.$route.fullPath } })
      } else {
        this.$http.post(this.$store.state.apiUrls.bookmark, {
          userToken: user.token,
          itemId: id
        }).then(() => {
          this.$notify({
            group: 'notify',
            type: 'success',
            title: this.t('bookmarked_successfully')
          })
          this.$store.dispatch('getBookmarks').catch((error) => {
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
    }
  }
}
</script>
<style lang="scss">
.news-single {
  .single-wrapper {
    animation: fadeIn 1s;
    overflow: hidden;
    display: flex;
    padding-bottom: 32px;
    .share-inner {
      display: flex;
    }
    .half-col {
      width: calc(50% - 52px);
      @media screen and (max-width: 1025px) {
        width: calc(50% - 20px);
      }
      &.single-left {
        margin: 0 22px 0 30px;
        overflow: hidden;
        @media screen and (max-width: 1025px) {
          margin: 0 10px;
        }
      }
      &.single-right {
        margin: 0 30px 0 22px;
        display: flex;
        @media screen and (max-width: 1025px) {
          margin: 0 10px;
        }
        flex-direction: column;
        .close-button {
          display: flex;
          .close-button-a {
            margin-left: auto;
          }
          .icon-container {
            .icon-close-container {
              width: 25.5px;
              height: 25.5px;
              .icon-close {
                width: 25.5px;
                height: 25.5px;
                display: inline-block;
                cursor: pointer;
                &:after,
                &:before {
                  content: ' ';
                  position: absolute;
                  left: 12px;
                  height: 31px;
                  width: 1px;
                  background-color: #000;
                  top: -3px;
                }
              }
            }
          }
        }
        .bookmark {
          margin: 14px 0;
          font-size: 25px;
          cursor: pointer;
          > div {
            max-height: 28.89px;
            position: relative;
          }
          .un_bookmark,
          .do_bookmark {
            position: relative;
            display: inline-block;
            &:hover span {
              opacity: 1;
            }
            span {
              position: absolute;
              opacity: 0;
              transition: opacity 0.05s;
              top: 36%;
              left: 50%;
              font-size: 19px;
              font-weight: 800;
              transform: translate(-50%, -50%);
            }
          }
          .do_bookmark {
            span {
              color: #3a3838;
            }
          }
          .un_bookmark {
            overflow: hidden;
            height: 0;
            transition: height 0.1s;
            transition-timing-function:  cubic-bezier(0.98, 1.75, 0.91, 0.83);
            position: absolute;
            left: 0;
            top: 0;
            &.bookmarked {
              height: 100%;
            }
            span {
              color: #f9f9f9;
            }
          }
          img {
            width: 18.4px;
            height: 25.9px;
          }
        }
        .title-container {
          .title {
            font-size: 2.4rem;
            line-height: 1.25;
            margin: 0;
          }
          .sub-title {
            font-size: 1.2rem;
            line-height: 1.25;
            color: #dcdcdc;
            margin: 4.6px 0 0 0;
          }
        }
        .description-container {
          margin-top: 31px;
          height: 460px;
          position: relative;
          overflow-y: auto;
          @media screen and (max-width: 1366px) {
            padding-top: 50%;
          }
          p {
            margin: 0 80px 0 0;
            position: absolute;
            top: 0;
            text-align: justify;
            left: 0;
            color: #848484;
            font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
            @media screen and (max-width: 1250px) {
              margin-right: 5px;
            }
          }
        }
      }
      .image-container {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 650px;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .socials-container {
        margin-top: auto;
        display: flex;
        padding-top: 25px;
        border-top: solid 1px #dcdcdc;
        .promotion {
          width: 115px;
          border: 1px solid #000;
          display: flex;
          cursor: pointer;
          .promotion-button {
            margin: auto;
            font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
            text-transform: uppercase;
          }
        }
        .socials-inner-container {
          display: flex;
          margin-left: auto;
          > span:last-child {
            .social-item {
              margin-right: 0;
            }
          }
          .social-item {
            height: 32px;
            width: 97px;
            border: 1px solid #000;
            margin-right: 12.8px;
            display: flex;
            cursor: pointer;
            position: relative;
            @media screen and (max-width: 940px) {
              width: 38px;
            }
            .icon {
              @media screen and (max-width: 940px) {
                width: 100%;
              }
            }
            &:before {
              content: '';
              height: 0;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              background: #000;
              z-index: 0;
              transition: height 0.3s;
            }
            &:hover {
              &:before {
                height: 100%;
              }
              .icon {
                filter: invert(1);
                position: relative;
              }
              .label {
                color: #ffffff;
                position: relative;
              }
            }
            .icon {
              width: 40%;
              font-size: 1.4rem;
              display: flex;
              z-index: 1;
              @media screen and (max-width: 940px) {
                width: 100%;
              }
              svg {
                margin: auto;
              }
            }
            .label {
              margin: auto 0;

              @media screen and (max-width: 940px) {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
