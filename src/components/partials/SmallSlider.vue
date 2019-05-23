<template>
  <div class="small-slider">
    <div class="small-slider-container">
      <agile :options="options" :next-arrow="getArrow()" :prev-arrow="getArrow()">
        <div class="slide" v-for="(item, index) in items" :key="index">
          <div class="small-slide-container">
            <img :src="item[logoOption]" :alt="item.name[locale]">
          </div>
          <div class="content-container" v-if="nameOption || descriptionOption">
            <div class="title-container" v-if="nameOption">
                <h3>{{item[nameOption][locale]}}</h3>
            </div>
            <div class="description-container" v-if="descriptionOption">
              <p v-html="item[descriptionOption][locale]"></p>
            </div>
          </div>
        </div>
      </agile>
    </div>
  </div>
</template>
<script>
export default {
  name: 'small-slider',
  props: {
    items: {
      type: Array
    },
    logoOption: {
      type: String
    },
    descriptionOption: {
      type: String,
      default: ''
    },
    nameOption: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      options: {
        arrows: true,
        dots: true
      }
    }
  },
  computed: {
    arrowIcon: function () {
      return require('../../assets/images/icons/arrow-carret.png')
    }
  },
  methods: {
    getArrow: function () {
      return `<img src="${this.arrowIcon}"/>`
    }
  }
}
</script>
<style lang="scss">
.small-slider {
  width:100%;
  margin: 0 auto;
  .title-container{
    h3{
      text-align: center;
      font-size: 1.8rem;
      margin: 0 0 12px 0;
      font-family: 'Muli','BPG Arial','sans-serif';
    }
  }
  .description-container{
    p{
      text-align: center;
      font-size: 1.4rem;
      margin:0 0 52px;
      font-family: 'Muli Light','BPG Arial','sans-serif';
    }
  }
  .small-slider-container {
    .slide {
      border: 1px solid #dcdcdc;
      overflow: hidden;
      margin-bottom: 37px;
      img {
        width: 216px;
        height: 216px;
        object-fit: contain;
      }
    }

    .agile {
      display: flex;
      flex-wrap: wrap;
      .agile__list {
        order: 1;
      }
      .agile__dots {
        order: 3;
        @media screen and (max-width: 760px) {
          display: flex;
        }
        .agile__dot {
          border-right: none;
          margin: auto 2px;
          &:first-child {
            margin-left: auto;
          }
          &:last-child {
            margin-right: auto;
          }
          &.agile__dot--current {
            button {
              border: 1px solid #dcdcdc;
              background-color: #f1f1f1;
              width: 8px;
              height: 8px;
            }
          }
          button {
            padding: 0;
            width: 7px;
            height: 7px;
            background-color: #ffffff;
            border: 1px solid #dcdcdc;
            border-radius: 50%;
          }
        }
      }
      .agile__arrow {
        background-color: transparent;
        border: none;
        cursor: pointer;
        svg {
          color: #f8f8f8;
        }
        &.agile__arrow--prev {
          left: 40px;
          order: 2;
          margin-left: auto;
        }

        &.agile__arrow--next {
          right: 40px;
          transform: rotate(180deg);
          order: 4;
          margin-right: auto;
        }
      }
    }
  }
}
</style>
