<template>
  <div id="page-stores">
    <block-header-standard :title="this.title[locale]"/>
    <store-list-grid :categories="$store.getters.storeFilters" :categoryId="['5b9d3c6062973c001fd2c699','5b9d3c1f62973c001fd2c698']"/>
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
  }
}
</script>
<style lang="scss">
#page-stores{

}
</style>
