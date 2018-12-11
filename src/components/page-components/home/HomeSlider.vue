<template>
  <div id="home-slider">
    <div class="slider-wrapper">
      <agile :options="options" v-if="showSlider" :prevArrow="printPrevIcon()" :nextArrow="printNextIcon()">
        <div class="slide" v-for="(item, index) in this.$store.getters.sliderItems" :key="index">
          <div class="slide-container">
            <event-home place="slider" :item="item" :txtLimit="40"/>
          </div>
        </div>
      </agile>
    </div>
  </div>
</template>
<script>
import EventHome from '../../partials/EventHome'
import {
  Carousel,
  Slide
} from 'vue-carousel'

export default {
  name: 'home-slider',
  components: {
    EventHome,
    Carousel,
    Slide
  },
  data: function () {
    return {
      perPage: 1,
      showSlider: false,
      options: {
        arrows: true,
        dots: true,
        autoplay: true
      }
    }
  },
  mounted: function () {
    if (!this.$store.getters.sliderItems.length) {
      this.$store.dispatch('getSliderItems').then(() => {
        this.showSlider = true
      })
    } else {
      this.showSlider = true
    }
  },
  methods: {
    printPrevIcon: function () {
      return `<span class="arrow arrow-left"><img width="33" height="81" src="${this.leftArrow}"></span>`
    },
    printNextIcon: function () {
      return `<span class="arrow arrow-right"><img width="33" height="81" src="${this.rightArrow}"></span>`
    }
  },
  computed: {
    leftArrow: function () {
      return require('../../../assets/images/icons/arrow-left-2.svg')
    },
    rightArrow: function () {
      return require('../../../assets/images/icons/arrow-right-2.svg')
    },
    pagination: function () {
      return this.$store.getters.sliderItems.length !== 0
    }
  }
}
</script>
<style lang="scss">
#home-slider {
  .slider-wrapper {
    position: relative;

    .agile__dots {
      display: none;
      position: absolute;
      bottom: 14px;
      left: 50%;
      transform: translateX(-50%);
      @media screen and (max-width: 760px) {
        display: flex;
      }
      .agile__dot {
        opacity: 0.3;
        border-right: none;
        margin-left: 16px;
        &.agile__dot--current {
          opacity: 0.6;
        }
        button {
          border: none;
          padding: 0;
          width: 7px;
          height: 7px;
          background-color: #ffffff;
          border-radius: 50%;
        }
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

    .arrow {
      position: relative;
      width: 33px;
      height: 81.3px;
      display: block;
    }
  }
}
</style>
