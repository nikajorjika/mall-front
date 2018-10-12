<template>
  <div class="how-to-get">
    <block-header-standard :title="this.title"/>
    <map-with-directions/>
  </div>
</template>
<script>
import BlockHeaderStandard from './BlockHeader'
import MapWithDirections from './MapDirections'

export default {
  name: 'how-to-get',
  data: function () {
    return {
      title: 'HOW TO GET'
    }
  },
  components: {
    MapWithDirections,
    BlockHeaderStandard
  }
}
</script>
