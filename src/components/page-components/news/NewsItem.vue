<template>
  <div class="news-item">
    <div class="news-wrapper" :class="{loading: loading}" v-if="!isOpen">
      <v-lazy-image
        :src="item.photoUrl"
        v-if="!loading"
        :alt="item.name[locale]"
      ></v-lazy-image>
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
    },
    loading: {
      type: Boolean,
      default: false
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
    overflow: hidden;
    &.loading{
      background: #f9f9f9;
    }
    &:hover{
      img{
        transform: scale(1.1);
      }
    }
    img {
      transition: all 0.3s;
      width: 100%;
      height: 100%;
      transform: scale(1);
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
}
</style>
