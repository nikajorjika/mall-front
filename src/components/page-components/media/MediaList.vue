<template>
  <div class="media-list-component">
    <div class="media-list-container">
      <div class="list-item" v-for="(media, index) in this.$store.getters.media" :key="index"
           v-if="filterBy === media.category || filterBy === 'all'">
        <media-print v-if="media.category === 'Online/Print'" :item="media"/>
        <media-video :item="media" v-else/>
      </div>
    </div>
  </div>
</template>
<script>
import MediaVideo from './MediaVideo'
import MediaPrint from './MediaPrint'

export default {
  name: 'media-list',
  components: { MediaPrint, MediaVideo },
  props: {
    filterBy: {
      type: String,
      default: 'all'
    }
  },
  mounted: function () {
    if (!this.$store.getters.media.length) {
      this.fetchItems()
    } else {
      this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
    }
  },
  methods: {
    fetchItems: function () {
      this.$store.dispatch('fetchItems', {
        model: 'media',
        api: this.$store.state.apiUrls.media,
        setter: 'INITIAL_LOAD'
      }).then(() => {
        this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
<style lang="scss">
.media-list-component {
  .media-list-container {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    border-bottom: 1px solid #eee;
    @media screen and (max-width: 1100px) {
      grid-template-columns: 50% 50%;
    }
    @media screen and (max-width: 760px) {
      grid-template-columns: 100%;
    }
    .list-item {
      width: 100%;
      border-right: 1px solid #dcdcdc;
      border-top: 1px solid #dcdcdc;
    }
  }
}
</style>
