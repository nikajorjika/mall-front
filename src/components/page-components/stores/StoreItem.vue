<template>
  <div class="store-item" :data-aos="animation">
    <div class="store-wrapper" :class="{loading: loading}">
      <v-lazy-image v-if="!loading"
        :src="locale === 'ka' ? item['kaLogoUrl'] : item.logoUrl"
        :alt="item.name[locale]"
      ></v-lazy-image>
    </div>
    <div class="store-flip"  v-if="!loading">
      <h3>{{item.name[locale]}}</h3>
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
    },
    animation: {
      type: String,
      default: 'fade-up'
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.store-item {
  width: 100%;
  height: 100%;
  position: relative;
  .store-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    &.loading{
      background: #f9f9f9;
    }
    img {
      margin: auto;
      max-height: calc(100% - 100px);
      max-width: calc(100% - 100px);
      object-fit: contain;
      object-position: center;
      @media screen and (max-width: 1500px) {
        max-height: calc(100% - 50px);
        max-width: calc(100% - 50px);
      }
    }
  }
  .store-flip {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #f9f9f9;
    display: flex;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
    }
    h3 {
      margin: auto;
      font-size: 18px;
      text-transform: uppercase;
      line-height: 1.28;
    }
  }
}
</style>
