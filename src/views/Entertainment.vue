<template>
  <div id="page-stores">
    <block-header-standard :title="this.title[locale]"/>
    <store-list-grid apiUrl="entertainment" model="entertainment" :categories="$store.getters.storeFilters" :categoryId="['5b9d3c7762973c001fd2c69a']"/>
  </div>
</template>

<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import StoreListGrid from '../components/page-components/stores/StoreListGrid'

export default {
  name: 'page-entertainment',
  data: function () {
    return {
      title: {
        en: 'entertainment',
        ka: 'გართობა'
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
#page-stores {

}
</style>
