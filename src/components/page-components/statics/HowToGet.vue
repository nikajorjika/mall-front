<template>
  <div class="how-to-get-page">
    <div class="container">
      <about-title :title="t('HowToGet')"/>
    </div>
    <map-with-directions/>
  </div>
</template>
<script>
import MapWithDirections from '../../partials/MapDirections'
import AboutTitle from '../about-us/AboutPageTitle'
export default {
  components: { AboutTitle, MapWithDirections },
  mounted: function () {
    this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
  }
}
</script>
