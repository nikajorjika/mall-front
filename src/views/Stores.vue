<template>
  <div id="page-stores">
    <block-header-standard :title="this.title[$store.getters.locale.locale]"/>
    <store-list-grid/>
  </div>
</template>

<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import StoreListGrid from '../components/page-components/stores/StoreListGrid'

export default {
  name: 'page-stores',
  data: function () {
    return {
      title: {
        en: 'STORES',
        ka: 'მაღაზიები'
      }
    }
  },
  components: {
    StoreListGrid,
    BlockHeaderStandard
  },
  methods: {
    loadMoreButton: function () {
      console.log('load more')
    }
  }
}
</script>
<style lang="scss">
#page-stores{

}
</style>
