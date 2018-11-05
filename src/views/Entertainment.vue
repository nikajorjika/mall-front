<template>
  <div id="page-stores">
    <block-header-standard :title="this.title[$store.getters.locale.locale]"/>
    <store-list-grid :grouped="grouped" :stores="$store.getters.entertainment" :storesList="$store.getters.entertainmentList" :categories="$store.getters.storeFilters"/>
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
    }
  },
  computed: {
    grouped: function () {
      return this.groupByAlphabet(this.$store.getters.storesList)
    }
  }
}
</script>
<style lang="scss">
#page-stores{

}
</style>
