<template>
  <div class="page-block">
    <about-title :title="t('mall_map')"/>
    <div id="pi-widget" style="height:517px">
    </div>
    <mall-map-js/>
  </div>
</template>
<script>

import MallMapJs from '../../partials/MallMapJs'
import AboutTitle from './AboutPageTitle'
export default {
  name: 'tbilisi-mall-map',
  components: { AboutTitle, MallMapJs }
}
</script>
<style lang="scss" scoped>
.page-block {
  padding-right: 16px;
}
</style>
