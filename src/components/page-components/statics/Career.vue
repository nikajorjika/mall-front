<template>
  <div class="about-company-container container">
    <about-title :title="pageTitle"/>
    <about-content :content="pageDescription"/>
    <div class="list-title">
      <h3>{{pageSubtitle}}</h3>
    </div>
    <service-list :list="list"/>
    <about-content :content="pageDescriptionLast"/>
  </div>
</template>
<script>
import AboutTitle from '../about-us/AboutPageTitle'
import AboutContent from '../about-us/AboutPageContent'
import ServiceList from '../about-us/ServiceList'

export default {
  name: 'about-company',
  components: { ServiceList, AboutContent, AboutTitle },
  mounted: function () {
    if (!this.$store.getters[ this.model ]) {
      this.fetchPage()
    }
  },
  data: () => {
    return {
      model: 'career'
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
    pageDescriptionLast: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'Last' ] : ''
    },
    pageSubtitle: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'Subtitle' ] : ''
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
        url: this.$store.state.apiUrls.career,
        model: this.model
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>
<style lang="scss">
.service-list {
  padding-left: 8px;
}
</style>

<style lang="scss" scoped>
.list-title {
  h3 {
    font-size: 1.6rem;
    font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';
    font-weight: bold;
  }
}
</style>
