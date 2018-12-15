<template>
  <div class="page-block">
    <about-title :title="pageTitle"/>
    <about-content :content="pageDescription"/>
    <service-list :list="list"/>
    <about-content :content="secondaryDescription"/>
    <div class="additional-info">
      <div class="additional-info-item">
        <h4>{{contactInfoTitle}}</h4>
        <p>
          <span class="color-grey">{{contactInfoFirst}}</span>
          <br>
          <br>
          <span class="color-grey">{{contactInfoSecond}}</span>
        </p>
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
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'ContactInfoFirst' ] : ''
    },
    contactInfoSecond: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'ContactInfoSecond' ] : ''
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
  p {
    color: #000;
    opacity: 1;
  }
  .additional-info {
    margin-top: 85px;
    margin-bottom: 74.5px;
    display: flex;
    @media screen and (max-width: 550px) {
      padding: 0 36px;
    }
    .additional-info-item {
      max-width: 376px;
      width: 100%;
      margin-right: 12px;
      h4 {
        font-size: 2.4rem;
        margin: 21px 0;
        line-height: 1.25;
        font-weight: bold;
        font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';
        @media screen and (max-width: 550px) {
          font-size: 1.7rem;

        }
      }
      p {
        max-width: 246px;
        @media screen and (max-width: 550px) {
          font-size: 1.2rem;
        }
        .color-grey {
          color: #848484;
        }
      }
    }
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
