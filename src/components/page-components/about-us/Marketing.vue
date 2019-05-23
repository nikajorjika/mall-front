<template>
  <div class="page-block">
    <about-title :title="pageTitle"/>
    <about-content :content="pageDescription"/>
    <service-list :list="list"/>
    <about-content :content="secondaryDescription"/>
    <div class="additional-info">
      <div class="contact-info">
        <div class="contact-info-inner" v-for="(item, index) in contactInfoFirst" :key="index">
          <p :class="{bold: index === 1}" v-if="index !== 2">
            {{item}}
          </p>
          <a :href="`mailto:${item}`" v-else>
            {{item}}
          </a>
        </div>
      </div>
      <div class="contact-info">
        <div class="contact-info-inner" v-for="(item, index) in contactInfoSecond" :key="index">
          <p :class="{bold: index === 1}" v-if="index !== 2">
            {{item}}
          </p>
          <a :href="`mailto:${item}`" v-else>
            {{item}}
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
  name: 'page-block',
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
      model: 'marketing'
    }
  },
  computed: {
    pageDataContent: function () {
      return this.$store.getters[ this.model ] ? this.parsePageData(this.$store.getters[ this.model ][ 0 ].data) : ''
    },
    pageTitle: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'Title' ] : ''
    },
    pageDescription: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'Description' ] : ''
    },
    contactInfoTitle: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'ContactInfoTitle' ] : ''
    },
    contactInfoFirst: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'FirstContact' ] : ''
    },
    contactInfoSecond: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'SecondContact' ] : ''
    },
    secondaryDescription: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'SecondaryDescription' ] : ''
    },
    list: function () {
      let result = []
      if (this.pageDataContent) {
        const data = this.pageDataContent[ this.locale + 'Additional' ]
        for (let i = 0; i < data.length; i++) {
          result.push({
            title: data[ i ],
            content: data[ i + 1 ]
          })
          i++
        }
      }
      return result
    }
  },
  methods: {
    fetchPage: function () {
      this.$store.dispatch('getAboutPage', {
        url: this.$store.state.apiUrls.marketing,
        model: this.model
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page-block {
  .additional-info {
    display: flex;
    margin-top: 28px;
    @media screen and (max-width: 1000px){
      flex-direction: column;
    }
    @media screen and (max-width: 550px){
      padding: 0 36px;
    }
    .contact-info {
      background: #f9f9f9;
      padding: 14px 33px;
      margin-right: 16px;
      min-width: 398px;
      @media screen and (max-width: 1366px){
        min-width: 302px;
      }
      @media screen and (max-width: 1000px){
        margin-bottom: 12px;
      }
      @media screen and (max-width: 550px){
        min-width: 0;
      }
      .contact-info-inner {
        p {
          font-size: 1.8rem;
          margin: 0;
          line-height: 1.28;
          @media screen and (max-width: 550px){
            font-size: 1.3rem;
          }
          &.bold {
            font-weight: 900;
            margin-bottom: 21px;
          }
        }
        a {
          color: #2d83e6;
          font-size: 1.6rem;
          margin: 0;
          line-height: 1.88;
          @media screen and (max-width: 550px){
            font-size: 1.3rem;
          }
        }

        &:nth-child(4) {
          p {
            font-size: 1.6rem;
            @media screen and (max-width: 550px){
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
  p {
    color: #000;
    opacity: 1;
  }
}
</style>

<style lang="scss">
.page-block {
  .additional-info {
    .additional-info-item {
      p {
        .color-grey {
          color: #848484;
        }
      }
    }
  }
}
</style>
