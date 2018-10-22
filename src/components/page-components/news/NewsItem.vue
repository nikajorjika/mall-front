<template>
  <div class="news-item">
    <div class="news-wrapper">
      <img src="https://placehold.it/579x649" :alt="this.item.name">
      <!--<img :src="this.item.logoUrl" :alt="this.item.name">-->
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
