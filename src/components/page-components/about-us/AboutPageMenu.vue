<template>
  <div class="about-page-menu">
    <div class="menu-wrapper-outer" v-if="$mq !== 'mobile'" :class="{fixedHeight: $route.name === 'about'}">
      <ul class="menu-wrapper">
        <li class="menu-item" v-for="(item, index) in items" :key="index">
          <router-link :to="`/${locale}${item.url}`" class="name">
            {{t(item.name)}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="menu-carousel" v-else>
      <div class="carousel-wrapper">
        <div class="arrow arrow-left" @click="previous">
          <img src="../../../assets/images/icons/arrow-left-dark.svg" alt="">
        </div>
        <transition-group
          class='carousel'
          tag="div">
          <div class="menu-item" v-for="(item, index) in slides" :key="item.id" @click.prevent="onStateChange(index)">
            <router-link :to="`/${locale}${item.url}`" class="name">
              {{t(item.name)}}
            </router-link>
          </div>
        </transition-group>
        <div class="arrow arrow-right" @click="next">
          <img src="../../../assets/images/icons/arrow-left-dark.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Carousel,
  Slide
} from 'vue-carousel'

export default {
  name: 'about-us-menu',
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    active: {
      type: String,
      default: ''
    }
  },
  components: {
    Carousel,
    Slide
  },
  data: function () {
    return {
      prevItem: null,
      activeMenuItem: null,
      nextItem: null,
      slides: this.items
    }
  },
  methods: {
    onStateChange: function (index) {
      if (index === 0) {
        this.previous()
      } else if (index === 2) {
        this.next()
      }
    },
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [ last ].concat(this.slides)
    }
  }
}
</script>
<style lang="scss">
.about-page-menu {
  height: 100%;
  .menu-wrapper-outer {
    height: 100%;
    border-left: solid 1px #dcdcdc;
    border-right: solid 1px #dcdcdc;
    display: flex;
    @media screen and (max-width: 760px) {
      order: 1;
      border: none;
      background: #f9f9f9;
      border-bottom: 1px solid #dcdcdc;
    }
    &.fixedHeight {
      height: 698px;
      @media screen and (max-width: 760px) {
        height: auto;
      }
    }
    .menu-wrapper {
      margin: 135px 0 auto 73px;
      @media screen and (max-width: 760px) {
        margin: 0;
        display: flex;
      }
      .menu-item {
        a {
          font-family: 'Muli', 'BPG Arial', 'sans-serif';
          font-size: 1.6rem;
          padding: 12px 0;
          display: block;
          line-height: 1.25;
          color: #00000099;
          text-transform: uppercase;
          &:hover {
            color: #000000d1;
          }
          &.router-link-exact-active {
            color: #000000;
          }
        }
      }
    }
  }
  .menu-carousel {
    background: #f9f9f9;
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 46px;
    .carousel-wrapper {
      width: 100%;
      overflow: hidden;
      display: flex;
      .arrow {
        width: 5.5px;
        height: 10px;
        margin: auto 16px;
        @media screen and (max-width: 360px){
          margin: auto 6px;
        }
        &.arrow-right {
          transform: rotate(180deg);
        }
      }
      .carousel {
        display: flex;
        width: 100%;
        overflow: hidden;
        .menu-item {
          width: 33.33%;
          flex: 1 0 33.33%;
          align-items: center;
          transition: transform 0.3s ease-in-out;
          &:nth-child(3) {
            opacity: 0.5;
          }
          &:first-of-type {
            opacity: 0.5;
          }
          &:last-of-type {
            opacity: 0;
          }
          a {
            text-align: center;
            display: block;
            padding: 23px 0;
            font-family: 'Muli Bold', 'BPG Nino Mtavruli', sans-serif;
            font-size: 1.2rem;
            font-weight: bold;
            line-height: 1.25;
            text-transform: uppercase;
          }
        }
      }
    }
  }
}
</style>
