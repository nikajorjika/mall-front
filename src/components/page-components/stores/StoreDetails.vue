<template>
  <div id="store-details">
    <loading-big v-show="loading"/>
    <div class="store-details-container" v-if="store">
      <div class="store-details-cover">
        <img :src="store.photoUrl" :alt="store.name">
      </div>
      <div class="store-details-body">
        <div class="store-details-content">
          <div class="logo-part-wrapper">
            <div class="logo-container">
              <img :src="store.logoUrl" :alt="store.name[$store.getters.locale.locale]">
            </div>
            <div class="subscribe-button-container">
              <button class="subscribe-button" @click="subscribe(store._id)">
                {{t('subscribe')}}
              </button>
            </div>
          </div>
          <div class="content-wrapper">
            <div class="content">
              <div class="content-main">
                <div class="breadcrumb">
                  <div class="breadcrumb-item">
                    <router-link :to="{name: 'home', params:{locale: $store.getters.locale.locale}}">{{t('home')}}
                    </router-link>
                  </div>
                  <div class="breadcrumb-item">
                    <router-link :to="{name: 'stores'}">{{t('stores')}}</router-link>
                  </div>
                  <div class="breadcrumb-item">
                    <router-link to=""> {{store.name[$store.getters.locale.locale]}}</router-link>
                  </div>
                </div>
                <div class="title-container">
                  <h1 class="title">{{store.name[$store.getters.locale.locale]}}</h1>
                </div>
                <div class="p-container">
                  <p v-html="store.description[$store.getters.locale.locale]"></p>
                </div>
              </div>
              <div class="content-socials">
                <div class="socials-wrapper">
                  <div class="socials-title">
                    <h4>{{t('socials')}}</h4>
                  </div>
                  <ul>
                    <li class="">
                      <a href="https://facebook.com" target="_blank">
                        <img src="../../../assets/images/icons/facebook.svg" height="15">
                      </a>
                    </li>
                    <li class="">
                      <a href="https://facebook.com" target="_blank">
                        <img src="../../../assets/images/icons/twitter.svg" height="12">
                      </a>
                    </li>
                    <li class="">
                      <a href="https://facebook.com" target="_blank">
                        <img src="../../../assets/images/icons/youtube.svg" height="10">
                      </a>
                    </li>
                    <li class="">
                      <a href="https://facebook.com" target="_blank">
                        <img src="../../../assets/images/icons/pinterest.svg" height="15">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="contact-info">
              <ul>
                <li>
                  <span class="icon store-phone"></span>
                  <span class="info">
                    +995 322 204 333
                  </span>
                </li>
                <li>
                  <span class="icon store-link"></span>
                  <span class="info">
                    <a href="http://www.zara.com" target="_blank">
                      http://www.zara.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {{$store.getters.subscribed}}
      </div>
    </div>
  </div>
</template>
<script>
import LoadingBig from '../../partials/LoadingBig'

export default {
  name: 'store-details',
  components: { LoadingBig },
  mounted: function () {
    this.loadStore()
  },
  data: function () {
    return {
      store: null,
      loading: false
    }
  },
  methods: {
    loadStore: function () {
      this.loading = true
      this.$store.dispatch('findStore', this.$route.params.store).then((response) => {
        this.store = response
        this.loading = false
      })
    },
    subscribe: function (id) {
      const user = this.$store.getters.user
      if (!user) {
        this.$router.push({ name: 'login' })
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
    }
  }
}
</script>
<style lang="scss">
.breadcrumb {
  display: flex;
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

#store-details {
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
    .store-details-content {
      display: flex;
      margin-top: 21px;
      .logo-part-wrapper {
        margin-right: 52px;
        .logo-container {
          height: 244px;
          width: 244px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.5);
          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }
        .subscribe-button-container {
          width: 100%;
          margin-top: 10px;
          .subscribe-button {
            border: 1px solid #eead16;
            font-family: 'Muli', 'BPG Arial','sans-serif';
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
            &:before{
              content: '';
              position: absolute;
              height: 0;
              width: 100%;
              background: #eead16;
              z-index: -1;
              bottom:0;
              left: 0;
              transition: height 0.3s;
            }
            &:hover{
              color: #ffffff;
              &:before{
                height: 100%;
                transition: height 0.3s;
              }
            }
          }
        }
      }
      .content-wrapper {
        width: calc(100% - 296px);
        .content {
          display: flex;
          .content-main {
            width: 90%;
            max-width: 1050px;
            .title-container {
              .title {
                font-family: 'Muli SemiBold', 'BPG Nino Mtavruli', 'sans-serif';
                font-size: 3.5rem;
                margin: 15px 0 19px;
                font-weight: 600;
                line-height: 1.26;
                text-transform: uppercase;
              }
            }
            .p-container {
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
          .content-socials {
            width: 12%;
            max-width: 122px;
            display: flex;
            margin-left: auto;
            border-left: 1px solid #dcdcdc;
            border-right: 1px solid #dcdcdc;
            flex-direction: column;
            .socials-wrapper {
              margin: auto;
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
                li {
                  margin: 19px 0;
                  text-align: center;
                }
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
            li {
              display: flex;
              margin-right: 54px;
              font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
              font-size: 1.4rem;
              line-height: 1.29;
              > span {
                margin: auto 0;
              }
              .icon {
                height: 34px;
                width: 34px;
                margin-right: 25px;
                border: 1px solid #707070;
                border-radius: 50%;
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
  }
}
</style>
