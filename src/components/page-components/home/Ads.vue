<template>
  <div id="home-ads">
    <div class="col-2" v-for="(item, index) in $store.getters.homeAds" :key="index" v-if="index <= 1">
      <event-home place="ads" :item="item" :type="'mini'"/>
    </div>
  </div>
</template>
<script>
import EventHome from '../../partials/EventHome'

export default {
  name: 'home-ads',
  components: { EventHome },
  mounted: function () {
    this.$store.dispatch('getAdsItems').then((response) => {
      console.log(response)
    })
  }
}
</script>
<style lang="scss">
#home-ads {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    margin-top:0;
  }
  .col-2 {
    width: calc(50% - 8px);
    @media screen and (max-width: 760px) {
      width:100%;
      margin-top: 1px;
    }
  }
}
</style>
