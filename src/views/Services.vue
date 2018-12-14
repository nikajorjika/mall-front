
<template>
  <div id="page-stores">
    <block-header-standard :title="this.title[locale]"/>
    <store-list-grid apiUrl="services" model="services" :categories="$store.getters.storeFilters" :categoryId="['5b9d3c8c62973c001fd2c69b']"/>
  </div>
</template>

<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import StoreListGrid from '../components/page-components/stores/StoreListGrid'

export default {
  name: 'page-services',
  data: function () {
    return {
      title: {
        en: 'Services',
        ka: 'სერვისები'
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
    },
    fetchItems: function () {
      console.log('load more')
    }
  }
}
</script>
<style lang="scss">
#page-stores {

}
</style>
