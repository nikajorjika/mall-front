<template>
  <div class="staff-carousel">
    <div class="title-container">
      <h3>{{this.title}}</h3>
    </div>
    <div class="staff-container">
      <carousel class="staff-wrapper" :perPage="this.perPage" :scrollPerPage="false" :navigationEnabled="true" :paginationEnabled="false"
                :navigationPrevLabel="this.printPrevIcon()" :navigationNextLabel="this.printNextIcon()">
        <slide  v-for="item in this.staff" :key="item.id">
          <div class="staff-item">
            <div class="img-container">
              <img :src="item.image" :alt="item.name">
            </div>
            <div class="name-wrapper">
              <h3>{{item.name}}</h3>
              <p>{{item.position}}</p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import {
  Carousel,
  Slide
} from 'vue-carousel'

export default {
  name: 'staff-carousel',
  components: {
    Carousel,
    Slide
  },
  props: {
    title: {
      type: String,
      default: 'OUR TEAM'
    },
    staff: {
      type: Array,
      default: function () {
        return []
      }
    },
    perPage: {
      type: Number,
      default: 3
    }
  },
  computed: {
    leftArrow: function () {
      return require('../../assets/images/icons/arrow-left-2.svg')
    },
    rightArrow: function () {
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
<style lang="scss">
.staff-carousel{
  .title-container{
    h3{
      margin: 74px 0 0;
      font-size: 4rem;
      color: #000;
      text-align: center;
    }
  }
  .staff-wrapper{
    width: 812px;
    margin: 54px auto 111px;
    .staff-item{
      .img-container{
        overflow: hidden;
        border-radius: 50%;
        height: 139px;
        width:139px;
        margin:0 auto;
      }
      h3{
        font-size: 1.6rem;
        color: #000;
        margin: 21px 0 8px;
        text-align: center;
      }
      p{
        font-family: 'Muli Light', 'sans-serif';
        margin: 8px 0;
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.29;
        color: #000;
        text-align: center;
      }
    }
  }
  .arrow {
    position: relative;
    width: 16px;
    height: 39.4px;
    display: block;
  }
}
</style>
