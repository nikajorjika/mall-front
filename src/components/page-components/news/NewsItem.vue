<template>
  <div class="news-item">
    <div class="news-wrapper" v-if="!isOpen">
      <img :src="item.photoUrl" :alt="item.name">
    </div>
  </div>
</template>
<script>
import NewsSingle from './NewsSingle'

export default {
  name: 'news-item',
  components: { NewsSingle },
  props: {
    item: {
      type: Object,
      default: function () {
        return {
          image: '',
          id: '',
          name: ''
        }
      }
    }
  },
  data: () => {
    return {
      isOpen: false
    }
  }
}
</script>
<style lang="scss" scoped>
.news-item {
  width: 100%;
  height: 100%;
  .news-wrapper {
    display: flex;
    width: 100%;
    position: relative;
    padding-top: 113.2%;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
}
</style>
