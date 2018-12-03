<template>
  <div class="small-slider">
    <div class="small-slider-container">
      <agile :options="options">
        <div class="slide" v-for="(item, index) in this.$store.getters.stores" :key="index">
          <div class="small-slide-container">
            <img :src="item.logoUrl" :alt="item.name[$store.getters.locale.locale]">
          </div>
        </div>
      </agile>
    </div>
  </div>
</template>
<script>
export default {
  name: 'small-slider',
  data: () => {
    return {
      options: {
        arrows: true,
        dots: true
      }
    }
  }
}
</script>
<style lang="scss">
.small-slider {
  width: 216px;
  margin: 0 auto;

  .small-slider-container {
    .slide {
      border: 1px solid #dcdcdc;
      overflow: hidden;
      margin-bottom:37px;
      img {
        width: 216px;
        height: 216px;
        object-fit: contain;
      }
    }

    .agile {
      .agile__dots {
        @media screen and (max-width: 760px) {
          display: flex;
        }
        .agile__dot {
          border-right: none;
          margin-left: 5px;

          &:first-child{
            margin-left: auto;
          }
          &:last-child{
            margin-right: auto;
          }
          &.agile__dot--current {
            button {
              background-color: #f1f1f1;
            }
          }
          button {
            padding: 0;
            width: 7px;
            height: 7px;
            background-color: #ffffff;
            border-color: #dcdcdc;
            border-radius: 50%;
          }
        }

        .agile__arrow {
          background-color: transparent;
          border: none;
          position: absolute;
          top: 50%;
          cursor: pointer;
          @media screen and (max-width: 760px) {
            display: none;
          }

          &.agile__arrow--prev {
            left: 40px;
            margin: 0;
            transform: translate(0, -50%);
          }

          &.agile__arrow--next {
            right: 40px;
            transform: translate(0, -50%);
          }
        }
      }
    }
  }
}
</style>
