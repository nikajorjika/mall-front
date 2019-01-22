<template>
  <div class="how-to-get">
    <block-header-standard :title="t('HowToGet')"/>
    <map-with-directions/>
  </div>
</template>
<script>
import BlockHeaderStandard from './BlockHeader'
import MapWithDirections from './MapDirections'

export default {
  name: 'how-to-get',
  components: {
    MapWithDirections,
    BlockHeaderStandard
  }
}
</script>
