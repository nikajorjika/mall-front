<template>
  <div class="media-video-component">
    <div class="img-container">
      <img :src="item.photoUrl" :alt="description" :title="title">
    </div>
    {{item.sourceUrl}}
    <div class="content-container">
      <h2>{{title}}</h2>
      <p v-html="description"></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'media-video',
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
.media-video-component {
  padding: 22px 30px 33px;
  .img-container{
    height: 417px;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .content-container {
    h2 {
      margin: 43px 0 17px;
      font-size: 2.4rem;
      line-height: 1.25;
      text-align: center;
    }
    p {
      font-size: 1.7rem;
      text-align: center;
      color: #000;
      opacity: 0.6;
      margin: 0;
    }
  }
}
</style>
