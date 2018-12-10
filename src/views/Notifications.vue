<template>
  <div class="notifications-page">
    <block-header-standard :title="t('notifications')"/>
    <div class="list-container-outer">
      <div class="list-wrapper">
        <notifications-component/>
      </div>
    </div>
  </div>
</template>
<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import SubscribedListComponent from '../components/page-components/user/SubscribedList'
import NotificationsComponent from '../components/page-components/user/NotificationsList'

export default {
  name: 'notifications-page',
  components: { NotificationsComponent, SubscribedListComponent, BlockHeaderStandard }
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
