<template>
  <div class="news-single" :id="item._id">
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
            <img src="../../../assets/images/icons/bookmark.svg" alt="Bookmark" v-show="!bookmarked.length">
            <img src="../../../assets/images/icons/bookmarked.svg" alt="Bookmark" v-show="bookmarked.length">
          </div>
        </div>
        <div class="title-container">
          <h2 class="title">{{item.name[locale]}}</h2>
          <h4 class="sub-title" v-if="store.length">
            {{store[0].name[locale]}}
          </h4>
        </div>
        <div class="description-container">
          <p v-html="item.description[locale]">
          </p>
        </div>
        <div class="socials-container">
          <div class="promotion">
            <div class="promotion-button">
              <span>{{t('promotion')}}</span>
            </div>
          </div>
          <social-sharing :url="currentFullUrl"
                          class="share-inner"
                          :title="item.name[locale]"
                          :description="item.description[locale]"
                          inline-template>
            <div class="socials-inner-container">
              <network network="facebook">
                <div class="social-item">
                  <span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/></span>
                  <span class="label">share</span>
                </div>
              </network>
              <network network="twitter">
                <div class="social-item">
                  <span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></span>
                  <span class="label">tweet</span>
                </div>
              </network>
              <network network="linkedin">
                <div class="social-item">
                  <span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"/></span>
                  <span class="label">share</span>
                </div>
              </network>
              <div class="social-item" @click="copyUrl('news-item-current-url')">
                <input id="news-item-current-url" :value="currentFullUrl" type="hidden">
                <span class="icon"><font-awesome-icon icon="link"/></span>
                <span class="label">{{t('copyLink')}}</span>
              </div>
            </div>
          </social-sharing>
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
        this.$router.push({ name: 'login' })
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
    .half-col {
      width: calc(50% - 52px);
      &.single-left {
        margin: 0 22px 0 30px;
        overflow: hidden;
        @media screen and (max-width: 1236px) {
          width: 100%;
        }
      }
      &.single-right {
        margin: 0 30px 0 22px;
        display: flex;
        flex-direction: column;
        min-width: 566px;
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
            left: 0;
            color: #848484;
            font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
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
          position: absolute;
          top: 0;
          left: 0;
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
            .icon {
              width: 50%;
              font-size: 1.4rem;
              display: flex;
              svg {
                margin: auto;
              }
            }
            .label {
              margin: auto 0;
            }
          }
        }
      }
    }
  }
}
</style>
