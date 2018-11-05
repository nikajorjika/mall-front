<template>
  <div class="socials-container-big">
    <block-header-standard :title="this.title"/>
    <div class="socials-container-outer">
      <div class="socials-container">
        <div class="social" v-for="item in this.socialsList" v-bind:key="item.name">
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
      title: 'SOCIALS',
      socialsList: this.$store.getters.socials
    }
  }
}
</script>

<style lang="scss">

.socials-container-big {
  .socials-container-outer{
    border-top: solid 1px #dcdcdc;
  }
  .socials-container {
    display: flex;
    width: 85%;
    margin: 0 auto;
    padding: 56px 0 64px;
    @media screen and (max-width: 1650px) {
      width: 100%;
      max-width:1087px;
      margin-right: auto;
    }
    .social {
      margin-right: 16px;
      width: 398px;
      @media screen and (max-width: 1650px) {
        width: 264px;
        margin-right: auto;
      }
    }
  }
}
</style>
