<template>
  <div class="news-single-mobile" :id="item._id">
    <div class="single-wrapper">
      <div class="close-button"  @click="closeEvent">
        <router-link :to="closeUrl()" class="close-button-a" v-if="redirect">
          <default-icon class="hamburger-close-button" :icon="`close`"/>
        </router-link>
        <a class="close-button-a" v-else>
          <default-icon class="hamburger-close-button" :icon="`close`"/>
        </a>
      </div>
      <div class="full-col">
        <div class="image-container">
          <img :src="item.photoUrl" :alt="item.name">
        </div>
      </div>
      <div class="full-col">
        <div class="bookmarks-promotions">
          <div class="bookmark">
            <img src="../../../assets/images/icons/bookmark.svg" alt="Bookmark" v-show="!bookmarked.length">
            <img src="../../../assets/images/icons/bookmarked.svg" alt="Bookmark" v-show="bookmarked.length">
          </div>
          <div class="promotion">
            <div class="promotion-button">
              <span>{{t('promotion')}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="full-col">
        <div class="title-container">
          <h2 class="title">{{item.name[locale]}}</h2>
          <h4 class="sub-title">
            SUPER
          </h4>
        </div>
        <div class="description-container">
          <p v-html="item.description[locale]">
          </p>
        </div>
        <div class="socials-container">
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
  name: 'news-single-mobile',
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
  computed: {
    bookmarked: function () {
      return this.$store.getters.bookmarked.filter(object => {
        if (object) {
          return object._id === this.item._id
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
.news-single-mobile {
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: #fff;
  .single-wrapper {
    animation: fadeIn 1s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
    .close-button {
      display: flex;
      border-bottom: 1px solid #dcdcdc;
      .close-button-a {
        margin: auto;
        padding: 22px 0;
      }
      .icon-container {
        .icon-close-container {
          width: 13px;
          height: 13px;
          .icon-close {
            width: 13px;
            height: 13px;
            display: inline-block;
            cursor: pointer;
            &:after,
            &:before {
              content: ' ';
              position: absolute;
              left: 6px;
              height: 14px;
              width: 1px;
              background-color: #000;
              top: -1px;
            }
          }
        }
      }
    }
    .full-col {
      width: 100%;
      margin: 0;
      .bookmarks-promotions {
        display: flex;
        background: #f9f9f9;
        border-top: 1px solid #dcdcdc;
        border-bottom: 1px solid #dcdcdc;
        .bookmark {
          font-size: 25px;
          width: 100%;
          padding: 22px 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #dcdcdc;
          img {
            width: 18.4px;
            height: 25.9px;
            margin: auto;
          }
        }
        .promotion {
          display: flex;
          width: 100%;
          cursor: pointer;
          padding: 22px 0;
          .promotion-button {
            margin: auto;
            border: 1px solid #000;
            padding: 4px 7px;
            font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
            text-transform: uppercase;
          }
        }
      }
      .title-container {
        padding: 0 36px;
        margin-top: 28px;
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
        padding: 0 36px;
        p {
          margin-bottom: 40px;
          color: #000000;
          opacity: 1;
          font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
        }
      }
      .image-container {
        position: relative;
        width: 100%;
        height: auto;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          display: block;
        }
      }
      .socials-container {
        display: flex;
        padding-top: 25px;
        border-top: solid 1px #dcdcdc;
        margin:0 36px;
        .socials-inner-container {
          display: grid;
          width: 100%;
          grid-template-columns: 50% 50%;
          grid-row-gap: 20px;
          column-gap: 10px;
          margin-left: auto;
          .social-item {
            height: 100%;
            width: 100%;
            border: 1px solid #000;
            margin-right: 12.8px;
            display: flex;
            cursor: pointer;
            padding: 10px 0;
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