<template>
  <div class="bookmarks-list">
    <block-header-standard :title="t('bookmarks')"/>
    <div class="list-container-outer">
      <div class="list-wrapper">
        <bookmarks-list-component/>
      </div>
    </div>
  </div>
</template>
<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import BookmarksListComponent from '../components/page-components/user/BookmarksList'

export default {
  name: 'bookmarks-page',
  components: { BookmarksListComponent, BlockHeaderStandard }
}
</script>
<style lang="scss">
.bookmarks-list {
  .list-container-outer{
    border-top: 1px solid #dcdcdc;
  }
}
</style>
