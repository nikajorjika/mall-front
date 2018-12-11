<template>
  <div class="media-page">
    <block-header-standard :title="title[locale]"/>
    <media-filters @filtered="filtered"/>
    <media-list :filterBy="filter"/>
  </div>
</template>
<script>

import BlockHeaderStandard from '../components/partials/BlockHeader'
import MediaFilters from '../components/page-components/media/MediaFilter'
import MediaList from '../components/page-components/media/MediaList'

export default {
  name: 'media',
  components: { MediaList, MediaFilters, BlockHeaderStandard },
  data: () => {
    return {
      title: {
        en: 'Media',
        ka: 'მედია'
      },
      filter: 'all'
    }
  },
  methods: {
    filtered: function (value) {
      this.filter = value
    }
  }
}
</script>
