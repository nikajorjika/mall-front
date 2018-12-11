<template>
  <div class="media-video-component" @click="showPopup = !showPopup">
    <div class="img-container">
      <img :src="item.photoUrl" :alt="description" :title="title">
    </div>
    <div class="content-container">
      <h2>{{title}}</h2>
      <p v-html="description"></p>
    </div>
    <div class="video-popup" v-if="showPopup">
      <youtube :video-id="parseYoutube(item.sourceUrl)" class="video-inner" player-width="100%" player-height="100%"></youtube>
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
  data: () => {
    return {
      showPopup: false
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
  .img-container {
    height: 417px;
    img {
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
  .video-popup {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.31);
    z-index: 9999;
    .video-inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 70%;
      width: 80%;
    }
  }
}
</style>
