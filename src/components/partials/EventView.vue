<template>
  <div class="event-item">
    <div class="wrapper" v-if="event">
      <div class="img-wrapper">
        <v-lazy-image
          :src="event.photoUrl"
          :alt="event.name[locale]"
        ></v-lazy-image>
      </div>
      <div class="content-container">
        <div class="title">
          <h3>{{event.name[locale]}}</h3>
        </div>
        <div class="description">
          <p>{{event.description[locale]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-item',
  mounted: function () {
    console.log(this.event)
  },
  props: {
    event: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.event-item {
  width: 100%;
  .img-wrapper {
    width: 100%;
    padding-top: 112%;
    position: relative;
    border: 1px solid #dcdcdc;
    @media screen and (max-width: 760px) {
      padding-top: 114%;
    }
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
  .content-container {
    .title {
      h3 {
        font-size: 2.4rem;
        line-height: 1.25;
        text-align: center;
        color: #000000;
        margin: 32px 0 19px;
        @media screen and (max-width: 1650px) {
          font-size: 1.6rem;
          margin: 24px 0 13px;
        }
      }
    }
    .description {
      p {
        opacity: 0.6;
        font-size: 1.7rem;
        font-weight: 300;
        line-height: 1.24;
        text-align: center;
        color: #000000;
        margin: 0 0 15px 0;
        height: 66px;
        overflow: hidden;
      }
    }
  }
}
</style>
