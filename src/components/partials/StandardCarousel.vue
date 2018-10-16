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
  }
}
</style>
