<template>
  <div id="home-slider">
    <carousel :perPage="perPage" :scrollPerPage="false" paginationActiveColor="#ffffff" paginationColor="#ffffff"
              :paginationPadding="8" :navigationEnabled="true" :paginationEnabled="true"
              :navigationPrevLabel="this.printPrevIcon()" :navigationNextLabel="this.printNextIcon()">
      <slide v-for="(item, index) in this.$store.getters.sliderItems" v-bind:key="index">
        <div class="slide-container">
          <event-home :item="item" :txtLimit="40"/>
        </div>
      </slide>
    </carousel>
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
  data: () => {
    return {
      perPage: 1
    }
  },
  mounted: function () {
    this.$store.dispatch('getSliderItems').then((response) => {
      console.log(response)
    })
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
  .VueCarousel-pagination {
    display: none;
    position: absolute;
    bottom: 14px;
    @media screen and (max-width: 760px) {
      display: block;
    }
    .VueCarousel-dot--active {
      .VueCarousel-dot-button {
        opacity: 0.6;
        background-color: #ffffff;
      }
    }
    .VueCarousel-dot-button {
      opacity: 0.3;
      background-color: #ffffff;
    }
  }
  .VueCarousel-navigation {
    @media screen and (max-width: 760px) {
      display: none;
    }
    .VueCarousel-navigation-prev {
      left: 40px;
      margin: 0;
      transform: translate(0, -50%);
    }
    .VueCarousel-navigation-next {
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
</style>
