<template>
  <div class="subscribed-list">
    <block-header-standard :title="t('subscribe_list_stores')"/>
    <div class="list-container-outer">
      <div class="list-wrapper">
        <subscribed-list-component/>
      </div>
    </div>
  </div>
</template>
<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import SubscribedListComponent from '../components/page-components/user/SubscribedList'

export default {
  name: 'subscribed-page',
  components: { SubscribedListComponent, BlockHeaderStandard }
}
</script>
<style lang="scss">
.subscribed-list {
  .list-container-outer{
    border-top: 1px solid #dcdcdc;
    .list-wrapper {
      width: 95%;
      max-width: 1364px;
      margin: 0 auto;
      padding-top: 2px;
    }
  }
}
</style>
