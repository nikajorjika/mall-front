<template>
  <div class="news-item">
    <div class="news-wrapper">
      <img :src="item.photoUrl" :alt="item.name">
    </div>
  </div>
</template>
<script>
export default {
  name: 'news-item',
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
    height: 100%;
    img {
      width:100%;
      height: 100%;
      object-fit: cover ;
    }
  }
}
</style>
