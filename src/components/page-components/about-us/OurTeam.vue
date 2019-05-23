<template>
  <div class="staff-carousel" v-if="$store.getters.team.length">
    <div class="title-container">
      <h3>{{this.title}}</h3>
    </div>
    <div class="staff-container">
      <carousel class="staff-wrapper" :perPage="this.perPage" :scrollPerPage="false" :navigationEnabled="true"
                :paginationEnabled="false" :perPageCustom="[[320, 1], [480, 2], [760, 3]]"
                :navigationPrevLabel="this.printPrevIcon()" :navigationNextLabel="this.printNextIcon()">
        <slide v-for="(item, index) in $store.getters.team" :key="index">
          <div class="staff-item">
            <div class="img-container">
              <img :src="item.photoUrl" :alt="item['name'+ locale.toUpperCase()]">
            </div>
            <div class="name-wrapper">
              <h3>{{item['name'+ locale.toUpperCase()]}}</h3>
              <p>{{item['position'+ locale.toUpperCase()]}}</p>
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
  mounted: function () {
    if (!this.$store.getters.team.length) {
      this.fetchData()
    }
  },
  props: {
    title: {
      type: String,
      default: 'OUR TEAM'
    },
    perPage: {
      type: Number,
      default: 3
    }
  },
  computed: {
    leftArrow: function () {
      return require('../../../assets/images/icons/arrow-left-2.svg')
    },
    rightArrow: function () {
      return require('../../../assets/images/icons/arrow-right-2.svg')
    }
  },
  methods: {
    printPrevIcon: function () {
      return `<span class="arrow arrow-left"><img src="${this.leftArrow}"></span>`
    },
    printNextIcon: function () {
      return `<span class="arrow arrow-right"><img src="${this.rightArrow}"></span>`
    },
    fetchData: function () {
      this.$store.dispatch('getTeam')
        .then((response) => {
          if (response !== 'RECORD NOT FOUND') {
            this.$store.commit('SET_TEAM', response)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
<style lang="scss">
.staff-carousel {
  .title-container {
    h3 {
      margin: 74px 0 0;
      font-size: 4rem;
      color: #000;
      text-align: center;
      text-transform: uppercase;
    }
  }
  .staff-wrapper {
    max-width: 812px;
    width:95%;
    margin: 54px auto 111px;
    @media screen and (max-width: 760px){
      width: 68%;
    }
    .staff-item {
      .img-container {
        overflow: hidden;
        border-radius: 50%;
        height: 139px;
        width: 139px;
        margin: 0 auto;
        img{
          height: 100%;
          width:100%;
          object-fit: cover;
        }
      }
      h3 {
        font-size: 1.6rem;
        color: #000;
        margin: 21px 0 8px;
        text-align: center;
      }
      p {
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
