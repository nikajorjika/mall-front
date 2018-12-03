<template>
  <div class="small-slider">
    <div class="small-slider-container">
      <agile :options="options" :next-arrow="getArrow()" :prev-arrow="getArrow()">
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
  },
  computed: {
    arrowIcon: function () {
      return require('../../assets/images/icons/arrow-carret.png')
    }
  },
  methods: {
    getArrow: function () {
      return `<img src="${this.arrowIcon}"/>`
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
      margin-bottom: 37px;
      img {
        width: 216px;
        height: 216px;
        object-fit: contain;
      }
    }

    .agile {
      display: flex;
      flex-wrap: wrap;
      .agile__list {
        order: 1;
      }
      .agile__dots {
        order: 3;
        @media screen and (max-width: 760px) {
          display: flex;
        }
        .agile__dot {
          border-right: none;
          margin:auto 2px;
          &:first-child {
            margin-left: auto;
          }
          &:last-child {
            margin-right: auto;
          }
          &.agile__dot--current {
            button {
              border: 1px solid #dcdcdc;
              background-color: #f1f1f1;
              width: 8px;
              height: 8px;
            }
          }
          button {
            padding: 0;
            width: 7px;
            height: 7px;
            background-color: #ffffff;
            border: 1px solid #dcdcdc;
            border-radius: 50%;
          }
        }
      }
      .agile__arrow {
        background-color: transparent;
        border: none;
        cursor: pointer;
        svg {
          color: #f8f8f8;
        }
        &.agile__arrow--prev {
          left: 40px;
          order: 2;
          margin-left: auto;
        }

        &.agile__arrow--next {
          right: 40px;
          transform: rotate(180deg);
          order: 4;
          margin-right: auto;
        }
      }
    }
  }
}
</style>
