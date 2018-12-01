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
          {{contactInfoFirst}}
          <br>
          <br>
          {{contactInfoSecond}}
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
  name: 'leasing-block',
  components: {
    ServiceList,
    AboutContent,
    AboutTitle
  },
  mounted: function () {
    if (!this.pageDataContent.length) this.fetchPage()
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
      locale: this.$store.getters.locale.locale
    }
  },
  computed: {
    pageDataContent: function () {
      return this.pageData ? JSON.parse(this.pageData.data) : ''
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
      this.$store.dispatch('getAboutPage', this.$store.state.apiUrls.magazine)
        .then((response) => {
          console.log(response)
          if (Array.isArray(response)) {
            this.pageData = response[ 0 ]
          }
        })
        .catch((error) => {
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
    .additional-info-item {
      width: 376px;
      margin-right: 12px;
      h4 {
        font-size: 2.4rem;
        margin: 21px 0;
        line-height: 1.25;
        font-weight: bold;
        font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';
      }
      p {
        max-width: 246px;
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
