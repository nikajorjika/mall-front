<template>
  <div class="event-home">
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
    isSmall: {
      type: Boolean,
      default: false
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
  .event-home{
    width:100%;
    font-family: 'Muli', 'sans-serif';
    .image-background{
      width:100%;
      position: relative;
      img{
        width:100%;
        max-height: 85.9rem;
        object-fit: cover;
      }
      .event-item-content{
        position: absolute;
        bottom:7.7rem;
        left: 9rem;
        .event-type{
          font-size: 1.8rem;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
          line-height: 1.28;
        }
        .event-name{
          border-bottom: solid 1px #ffffff;
          h3{
            font-size: 3.8rem;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            text-align: left;
            margin: 1.3rem 0 1.45rem;
            line-height: 1.26;
            letter-spacing: 1px;
            color: #ffffff;
          }
        }
        .event-description{
          p{
            font-size: 2.4rem;
            font-weight: 300;
            font-style: normal;
            font-stretch: normal;
            letter-spacing: normal;
            text-align: left;
            color: #ffffff;
            line-height: 1.25;
            margin: 1.4rem 0 0;
          }
        }
      }
    }
  }
</style>
