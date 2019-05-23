<template>
  <div class="socials-container-big">
    <block-header-standard :title="title[locale]"/>
    <div class="socials-container-outer">
      <div class="socials-container">
        <div class="social" v-for="(item, index) in $store.getters.socials" v-bind:key="index">
          <social-item :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import SocialItem from '../main/SocialItem'
import BlockHeaderStandard from '../partials/BlockHeader'

export default {
  name: 'social-list-big',
  components: {
    SocialItem,
    BlockHeaderStandard
  },
  data: function () {
    return {
      title: {
        en: 'social media',
        ka: 'სოციალური ქსელი'
      }
    }
  }
}
</script>

<style lang="scss">
.socials-container-big {
  .socials-container-outer {
    border-top: solid 1px #dcdcdc;
  }
  .socials-container {
    display: flex;
    width: 85%;
    margin: 0 auto;
    padding: 56px 0 64px;
    @media screen and (max-width: 825px) {
      flex-direction: column;
    }
    @media screen and (max-width: 1650px) {
      width: 100%;
      max-width: 1087px;
      margin-right: auto;
    }
    @media screen and (max-width: 960px) {
      flex-wrap: wrap;
    }
    .social {
      margin-right: 16px;
      width: 398px;
      @media screen and (max-width: 1650px) {
        width: 264px;
        margin-right: auto;
      }
      @media screen and (max-width: 1060px) {
        width: 225px;
        margin: auto;
      }
      @media screen and (max-width: 960px) {
        margin: 0 auto 12px;
        width: 40%;
      }
      @media screen and (max-width: 825px) {
        width: 90%;
        max-width: 398px;
      }
    }
  }
}
</style>
