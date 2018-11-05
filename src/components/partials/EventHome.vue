<template>
  <div class="event-home" :class="this.type">
    <div class="image-background">
      <img src="https://placehold.it/1920x859" alt="Event Image">
      <div class="event-item-content">
        <div class="event-type">
          <span>OFFER</span>
        </div>
        <div class="event-name">
          <h3>FLASH OF COLOUR</h3>
        </div>
        <div class="event-description short">
          <p>Bright accent tones add a subtle touch of character to easy yet</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'event-home',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    emitClick: function () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.event-home {
  width: 100%;
  &.mini {
    .image-background {
      width: 100%;
      position: relative;
      padding-top: 71.7%;
      img {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        object-fit: cover;
      }
    }
  }
  .image-background {
    width: 100%;
    position: relative;
    padding-top: 45.14%;
    img {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      object-fit: cover;
    }
    .event-item-content {
      position: absolute;
      bottom: 77px;
      left: 90px;
      max-width: 698px;
      width: 100%;
      @media screen and (max-width: 1650px) {
        left: 63px;
        width: calc(100% - 63px);
      }
      .event-type {
        font-size: 1.8rem;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        line-height: 1.28;
        @media screen and (max-width: 1650px) {
          font-size: 1.2rem;
        }
      }
      .event-name {
        h3 {
          font-size: 3.8rem;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          text-align: left;
          padding: 13px 0 14.5px;
          margin: 0;
          line-height: 1.26;
          letter-spacing: 1px;
          display: inline-block;
          border-bottom: solid 1px #ffffff;
          color: #ffffff;
          @media screen and (max-width: 1650px) {
            font-size: 2.6rem;
          }
        }
      }
      .event-description {
        p {
          font-size: 2.4rem;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
          line-height: 1.25;
          margin: 14px 0 0;
          @media screen and (max-width: 1650px) {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
}
</style>
