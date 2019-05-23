<template>
  <div class="media-print-component">
    <div class="top-block-container">
      <div class="middle-block">
        <h2>{{title}}</h2>
        <p v-html="description"></p>
      </div>
      <div class="author">
        <span class="gray">16. 09. 18</span> Kviris Palitra
      </div>
    </div>
    <div class="button-container">
      <a :href="item.sourceUrl" target="_blank">
        <span>{{t('full_page')}}</span>
        <img src="../../../assets/images/icons/left-arrow-subscribe.svg" alt="See full page">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'media-print',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  computed: {
    title: function () {
      return this.item ? this.item[ `name${this.locale.toUpperCase()}` ] : ''
    },
    description: function () {
      let shortDescription = this.item[ `description${this.locale.toUpperCase()}` ]
      if (shortDescription.length > 120) {
        shortDescription = shortDescription.substr(0, 120) + '...'
      }
      return shortDescription
    }
  }
}
</script>
<style lang="scss">
.media-print-component{
  height: 100%;
  padding: 22px 30px 33px;
}
</style>
