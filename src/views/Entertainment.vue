<template>
  <div id="page-stores">
    <block-header-standard :title="this.title[locale]"/>
    <store-list-grid apiUrl="entertainment" model="entertainment" :categories="$store.getters.storeFilters"/>
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
