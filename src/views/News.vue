<template>
  <div id="page-stores">
    <block-header-standard :title="this.title[locale]"/>
    <news-list :categories="$store.state.newsFilters"/>
  </div>
</template>

<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import NewsList from '../components/page-components/news/NewsList'

export default {
  name: 'page-stores',
  data: function () {
    return {
      title: {
        en: 'What\'s New',
        ka: 'სიახლეები'
      }
    }
  },
  components: {
    NewsList,
    BlockHeaderStandard
  },
  methods: {
    loadMoreButton: function () {
    }
  }
}
</script>
<style lang="scss">
#page-stores{

}
</style>
