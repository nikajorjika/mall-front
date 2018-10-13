<template>
  <div class="socials-container-big">
    <block-header-standard :title="this.title"/>
    <div class="socials-container">
      <div class="social-item-outer" v-for="item in this.socialsList" v-bind:key="item.name">
        <social-item :item="item"/>
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

<style lang="scss" scoped>

.socials-container-big{
  .socials-container{
    display: flex;
    width: 85%;
    margin: 0 auto;
    padding: 70px 0 92px;
    border-top: solid 1px #dcdcdc;
    .social-item-outer{
      margin-right: 16px;
      width: 25%;
    }
  }
}
</style>
