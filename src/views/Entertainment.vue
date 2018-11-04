<template>
  <div id="page-stores">
    <block-header-standard :title="this.title[$store.getters.locale.locale]"/>
    <entertainment-list-grid/>
  </div>
</template>

<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import EntertainmentListGrid from '../components/page-components/entertainment/EntertainmentList'

export default {
  name: 'page-entertainment',
  data: function () {
    return {
      title: {
        en: 'STORES',
        ka: 'მაღაზიები'
      }
    }
  },
  components: {
    EntertainmentListGrid,
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
