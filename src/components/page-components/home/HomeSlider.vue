<template>
  <div id="home-slider">
    <carousel :perPage="perPage" :scrollPerPage="false" :navigationEnabled="true" :paginationEnabled="false"
              :navigationPrevLabel="this.printPrevIcon()" :navigationNextLabel="this.printNextIcon()">
      <slide v-for="(item, index) in $store.getters.sliderItems" v-bind:key="index">
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
    // this.$store.dispatch('getSliderItems').then((response) => {
    //   console.log(response)
    // })
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
    }
  }
}
</script>
<style lang="scss">
#home-slider{
  .VueCarousel-navigation-prev{
    left: 40px;
    margin:0;
    transform: translate(0, -50%);
  }
  .VueCarousel-navigation-next{
    right: 40px;
    transform: translate(0, -50%);
  }
  .arrow {
    position: relative;
    width: 33px;
    height: 81.3px;
    display: block;
  }
}
</style>
