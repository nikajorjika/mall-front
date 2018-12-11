<template>
  <div id="page-stores">
    <block-header-standard :title="this.title[locale]"/>
    <store-list-grid :grouped="grouped" apiUrl="entertainment" model="entertainment" :categories="$store.getters.storeFilters"/>
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
  },
  computed: {
    grouped: function () {
      return this.groupByAlphabet(this.$store.getters.entertainmentList)
    }
  }
}
</script>
<style lang="scss">
#page-stores {

}
</style>
