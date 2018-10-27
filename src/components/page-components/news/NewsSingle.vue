<template>
  <div id="news-single">
    <div class="single-wrapper">
      <div class="half-col single-left">
        <div class="image-container">
          <img :src="item.photoUrl" :alt="item.name">
        </div>
      </div>
      <div class="half-col single-right">
        <div class="close-button">
          <router-link to="/whats-new" class="close-button-a">
            <default-icon class="hamburger-close-button" :icon="`close`" @click="closeEvent"/>
          </router-link>
        </div>
        <div class="bookmark">
          <font-awesome-icon icon="bookmark"/>
        </div>
        <div class="title-container">
          <h2 class="title">{{item.name[$store.getters.locale.locale]}}</h2>
          <h4 class="sub-title">
            SUPER
          </h4>
        </div>
        <div class="description-container">
          <p v-html="item.description[$store.getters.locale.locale]">
          </p>
        </div>
        <div class="socials-container">
          <div class="promotion">
            <div class="promotion-button">
              <span>{{t('promotion')}}</span>
            </div>
          </div>
          <social-sharing url="" inline-template>
            <div class="socials-inner-container">
              <network network="facebook">
                <div class="social-item">
                  <span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/></span>
                  <span class="label">{{t('share')}}</span>
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
                  <span class="label">{{t('share')}}</span>
                </div>
              </network>
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
    }
  },
  methods: {
    closeEvent: function () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
#news-single {
  .single-wrapper {
    animation: fadeIn 1s;
    overflow: hidden;
    display: flex;
    .half-col {
      width: calc(50% - 52px);
      &.single-left {
        margin: 0 22px 0 30px;
      }
      &.single-right {
        margin: 0 30px 0 22px;
        display: flex;
        flex-direction: column;
        .close-button {
          display: flex;
          .close-button-a{
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
        }
        .title-container {
          .title {
            font-family: 'Muli', 'sans-serif';
            font-size: 2.4rem;
            line-height: 1.25;
            margin: 0;
          }
          .sub-title {
            font-family: 'Muli', 'sans-serif';
            font-size: 1.2rem;
            line-height: 1.25;
            color: #dcdcdc;
            margin: 4.6px 0 0 0;
          }
        }
        .description-container {
          margin: 31px 80px 0 0;
          p {
            margin: 0;
            color: #848484;
            font-family: 'Muli Light', 'sans-serif';
          }
        }
      }
      .image-container {
        height: 100%;
        width: 100%;
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
            font-family: 'Muli Light', 'sans-serif';
            text-transform: uppercase;
          }
        }
        .socials-inner-container {
          display: flex;
          margin-left: auto;
          >span:last-child{
            .social-item{
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
              svg{
                margin: auto;
              }
            }
            .label{
              margin:auto 0;
            }
          }
        }
      }
    }
  }
}
</style>
