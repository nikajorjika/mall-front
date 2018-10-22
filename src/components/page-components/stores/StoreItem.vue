<template>
  <div class="store-item">
    <div class="store-wrapper">
      <img :src="this.item.logoUrl" :alt="this.item.name">
    </div>
  </div>
</template>
<script>
export default {
  name: 'store-item',
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
.store-item {
  width: 100%;
  height: 100%;
  .store-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    img {
      margin: auto;
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
