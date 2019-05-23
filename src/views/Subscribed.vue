<template>
  <div class="subscribed-list">
    <block-header-standard :title="t('subscribe_list_stores')"/>
    <div class="list-container-outer">
      <div class="list-wrapper" v-if="$store.getters.subscribed.length">
        <subscribed-list-component/>
      </div>
      <div class="no-record" v-else>
        <p>{{t('no_subscriptions')}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import SubscribedListComponent from '../components/page-components/user/SubscribedList'

export default {
  name: 'subscribed-page',
  components: { SubscribedListComponent, BlockHeaderStandard },
  mounted: function () {
    this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })

    if (!this.$store.getters.subscribed.length) {
      this.$store.dispatch('getSubscribed').catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>
<style lang="scss">
.subscribed-list {
  .list-container-outer{
    border-top: 1px solid #dcdcdc;
    .list-wrapper {
      width: 95%;
      max-width: 1364px;
      margin: 0 auto;
      padding-top: 2px;
    }
  }
}
.no-record{
  p{
    font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
    font-size: 2.1rem;
    opacity: 1;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
