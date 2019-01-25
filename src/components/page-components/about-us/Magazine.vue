<template>
  <div class="page-block">
    <about-title :title="t('magazine')"/>
    <div class="magazines-container">
      <div class="magazine-item" v-for="(item, index) in $store.getters.magazines" :key="index">
        <div class="magazine-image-container">
          <img :src="item.photoUrl" :alt="item.photoUrl[locale]">
        </div>
        <div class="magazine-date">
          <div class="name-wrapper">
            <h4>{{item[`name${locale.toUpperCase()}`]}}</h4>
          </div>
        </div>
        <div class="download-button">
          <a :href="item.fileUrl" target="_blank">
            <button><span class="download-text">{{t('open')}}</span>
              <!--<img src="../../../assets/images/icons/download-black.svg" class="download-icon black"-->
                   <!--alt="Download Icon">-->
              <!--<img src="../../../assets/images/icons/download-white.svg" class="download-icon white"-->
                   <!--alt="Download Icon">-->
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AboutContent from './AboutPageContent'
import AboutTitle from './AboutPageTitle'
import ServiceList from './ServiceList'

export default {
  name: 'leasing-block',
  components: {
    ServiceList,
    AboutContent,
    AboutTitle
  },
  mounted: function () {
    if (!this.$store.getters[ this.model ]) {
      this.fetchPage()
    } else {
      this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    additionals: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      pageData: null,
      model: 'magazine',
      magSetter: 'SET_MAGAZINES'
    }
  },
  computed: {
    pageDataContent: function () {
      return this.$store.getters[ this.model ] ? JSON.parse(this.$store.getters[ this.model ][ 0 ].data) : ''
    },
    pageTitle: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'Title' ] : ''
    }
  },
  methods: {
    fetchPage: function () {
      this.$store.dispatch('fetchItems', {
        api: this.$store.state.apiUrls.magazine,
        model: this.model,
        setter: this.magSetter
      }).then(() => {
        this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
      }).catch((error) => {
        console.error(error)
      })
    },
    formatData: function (date) {
      const ts = new Date(date)
      return `${ts.getDay()} . ${ts.getMonth()} . ${ts.getFullYear()}`
    }
  }
}
</script>
<style lang="scss" scoped>
.page-block {
  padding-right: 2px;
  .magazines-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-right: 12px;
    @media screen and (max-width: 1020px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 550px){
      grid-template-columns: 1fr;
      padding: 0 36px;
    }
    .magazine-item {
      /*width: calc(50% - 15.5px);*/
      /*margin-right: 15.5px;*/
      border: 1px solid #dcdcdc;
      @media screen and (max-width: 550px){
        width: 100%;
        margin-bottom: 15px;
        margin-right: 0;
      }
      .magazine-image-container {
        padding-top: 100%;
        position: relative;
        border-bottom:1px solid #dcdcdc;
        img {
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          object-fit: cover;
          object-position: center;
        }
      }

      .magazine-date {
        padding: 15px;
        .name-wrapper {
          h4 {
            text-align: center;
            font-size: 1.4rem;
            line-height: 1.25;
            margin: 0 0 0 9px;
          }
        }
      }

      .download-button {
        button {
          width: 100%;
          border-radius: 0;
          border: none;
          border-top: 1px solid #dcdcdc;
          padding: 7px 0;
          background-color: transparent;
          font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
          font-size: 1.8rem;
          text-transform: uppercase;
          display: flex;
          justify-content: center;
          position: relative;
          cursor: pointer;
          @media screen and (max-width: 1000px){
            padding: 35px 0 44px 0;
          }
          &:before {
            content: '';
            background: #000000;
            position: absolute;
            height: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 0;
            transition: height .3s;
          }
          .download-text {
            z-index: 1;
          }
          &:hover {
            .download-text {
              color: #ffffff;
            }
            &:before {
              height: 100%;
            }
            .download-icon {
              z-index: 1;
              &.black {
                display: none;
              }

              &.white {
                display: block;
              }
            }
          }

          .download-icon {
            width: 12.3px;
            height: 17.6px;
            margin: auto 0 auto 15px;

            &.white {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
