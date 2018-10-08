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
  .event-home{
    width:100%;
    font-family: 'Muli', 'sans-serif';
    &.mini{
      img{
        height: 676px;
      }
    }
    .image-background{
      width:100%;
      position: relative;
      img{
        width:100%;
        max-height: 859px;
        object-fit: cover;
      }
      .event-item-content{
        position: absolute;
        bottom:77px;
        left: 90px;
        width: 698px;
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
          h3{
            font-size: 3.8rem;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            text-align: left;
            padding: 13px 0 14.5px;
            margin:0;
            line-height: 1.26;
            letter-spacing: 1px;
            display: inline-block;
            border-bottom: solid 1px #ffffff;
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
            margin: 14px 0 0;
          }
        }
      }
    }
  }
</style>
