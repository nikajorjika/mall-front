<template>
  <div class="standard-carousel">
    <block-header-standard :title="this.title"/>
    <carousel :perPage="this.perPage" :scrollPerPage="false" :navigationEnabled="true" :paginationEnabled="false"
              :navigationPrevLabel="this.printPrevIcon()" :navigationNextLabel="this.printNextIcon()">
      <slide v-for="item in items" v-bind:key="item.id">
        <div class="slide-container">
          <img src="https://placehold.it/220x30" alt="">
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import EventItem from './EventView'
import BlockHeaderStandard from './BlockHeader'
import { Carousel, Slide } from 'vue-carousel'

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
      return '<'
    },
    printNextIcon: function () {
      return '>'
    }
  }
}
</script>

<style lang="scss" scoped>
.standard-carousel {
  padding: 0 200px;
  .slide-container {
    height: 326px;
    width: 326px;
    display: flex;
    img {
      max-width: 67%;
      margin: auto;
    }
  }
  .VueCarousel-navigation {
    button {
      width: 33px;
      height: 81.3px;
      opacity: 0.5;
      color: #dcdcdc;
    }
  }
}
</style>
