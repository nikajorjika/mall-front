<template>
  <div class="bookmarks-list">
    <block-header-standard :title="t('bookmarks')"/>
    <div class="list-container-outer">
      <div class="list-wrapper" v-if="$store.getters.bookmarked.length">
        <bookmarks-list-component/>
      </div>
      <div class="no-record" v-else>
        <p>{{t('no_bookmarks')}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import BookmarksListComponent from '../components/page-components/user/BookmarksList'

export default {
  name: 'bookmarks-page',
  components: { BookmarksListComponent, BlockHeaderStandard },
  mounted: function () {
    this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
  }
}
</script>
<style lang="scss">
.bookmarks-list {
  .list-container-outer {
    border-top: 1px solid #dcdcdc;
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
