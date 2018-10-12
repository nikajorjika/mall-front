<template>
  <div class="standard-carousel">
    <block-header-standard :title="this.title"/>
    <carousel :perPage="this.perPage" :scrollPerPage="false" :navigationEnabled="true" :paginationEnabled="false"
              :navigationPrevLabel="this.printPrevIcon()" :navigationNextLabel="this.printNextIcon()">
      <slide v-for="item in items" v-bind:key="item._id">
        <div class="slide-container">
          <img :src="item.logoUrl" alt="">
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import EventItem from './EventView'
import BlockHeaderStandard from './BlockHeader'
import {
  Carousel,
  Slide
} from 'vue-carousel'

export default {
  name: 'standard-carousel',
  components: {
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
  methods: {
    printPrevIcon: function () {
      return '<span class="arrow arrow-left"></span>'
    },
    printNextIcon: function () {
      return '<span class="arrow arrow-right"></span>'
    }
  }
}
</script>

<style lang="scss" >
.standard-carousel {
  padding: 0 138px;
  .slide-container {
    max-height: 326px;
    display: flex;
    border: solid 0.5px #dcdcdc;
    margin-right: 20px;
    img {
      max-width: 67%;
      max-height: 70%;
      object-fit: contain;
      margin: auto;
    }
  }
  .VueCarousel-navigation-prev{
    left: -100px;
  }
  .VueCarousel-navigation-next{
    right: -78px;
  }
  .arrow {
    position: relative;
    width: 33px;
    height: 81.3px;
    display: block;
    &:after,
    &:before {
      content: '';
      height: 48px;
      width: 2px;
      background: #dcdcdc;
      position: absolute;
    }
    &.arrow-left{
      &:after{
        transform: rotate(45deg);
      }
      &:before{
        transform: rotate(-45deg);
        bottom:0;
      }
    }
    &.arrow-right{
      &:after{
        transform: rotate(-45deg);
      }
      &:before{
        transform: rotate(45deg);
        bottom:0;
      }
    }
  }
}
</style>
