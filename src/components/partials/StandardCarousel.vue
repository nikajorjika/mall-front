<template>
  <div class="standard-carousel">
    <block-header-standard :title="this.title"/>
    <div class="carousel-big" v-if="$mq !== 'mobile'">
      <carousel :perPage="this.perPage" :scrollPerPage="false" :navigationEnabled="true" :paginationEnabled="false"
                :navigationPrevLabel="this.printPrevIcon()" :perPageCustom="[[0, 1],[480, 2],[760, 3], [1024, 4]]" :navigationNextLabel="this.printNextIcon()">
        <slide v-for="item in items" v-bind:key="item._id">
          <div class="slide-container">
            <img :src="item.logoUrl" :alt="item.name[locale]">
          </div>
        </slide>
      </carousel>
    </div>
    <div class="carousel-small" v-else>
      <small-slider :items="$store.getters.stores" logoOption="logoUrl"/>
    </div>
  </div>
</template>

<script>
import EventItem from './EventView'
import BlockHeaderStandard from './BlockHeader'
import {
  Carousel,
  Slide
} from 'vue-carousel'
import SmallSlider from './SmallSlider'

export default {
  name: 'standard-carousel',
  components: {
    SmallSlider,
    BlockHeaderStandard,
    EventItem,
    Carousel,
    Slide
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    perPage: {
      type: Number,
      default: 4
    }
  },
  computed: {
    leftArrow () {
      return require('../../assets/images/icons/arrow-left-2.svg')
    },
    rightArrow () {
      return require('../../assets/images/icons/arrow-right-2.svg')
    }
  },
  methods: {
    printPrevIcon: function () {
      return `<span class="arrow arrow-left"><img src="${this.leftArrow}"></span>`
    },
    printNextIcon: function () {
      return `<span class="arrow arrow-right"><img src="${this.rightArrow}"></span>`
    }
  }
}
</script>

<style lang="scss" >
.standard-carousel {
  .carousel-big{
    padding: 0 138px;
    @media screen and (max-width: 1366px){
      padding: 0 230px;
    }
    @media screen and (max-width: 1060px){
      padding: 0 120px;
    }
    .slide-container {
      padding-top: 100%;
      position: relative;
      display: flex;
      border: solid 1px #dcdcdc;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: contain;
        margin: auto;
      }
    }
    .VueCarousel-navigation-prev{
      left: -100px;
      @media screen and (max-width: 1366px){
        left: -70px;
      }
    }
    .VueCarousel-navigation-next{
      right: -78px;
      @media screen and (max-width: 1366px){
        right: -70px;
      }
    }
    .arrow {
      position: relative;
      width: 33px;
      height: 81.3px;
      display: block;
      @media screen and (max-width: 1366px){
        width: 21.9px;
        height: 53.9px;
      }
    }
  }
  .carousel-small{
    width: 216px;
    margin: 0 auto;
  }
}
</style>
