<template>
  <div class="about-company-container container">
    <about-title :title="pageTitle"/>
    <div class="subtitle">
      <h3>{{subtitle}}</h3>
    </div>
    <about-content :content="pageDescription"/>
  </div>
</template>
<script>
import AboutTitle from '../about-us/AboutPageTitle'
import AboutContent from '../about-us/AboutPageContent'

export default {
  name: 'about-company',
  components: { AboutContent, AboutTitle },
  mounted: function () {
    if (!this.$store.getters[ this.model ]) {
      this.fetchPage()
    }
  },
  data: () => {
    return {
      model: 'aboutCompany'
    }
  },
  computed: {
    pageDataContent: function () {
      return this.$store.getters[ this.model ] ? JSON.parse(this.$store.getters[ this.model ][ 0 ].data) : ''
    },
    pageTitle: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'Title' ] : ''
    },
    pageDescription: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'Description' ] : ''
    },
    subtitle: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'Subtitle' ] : ''
    }
  },
  methods: {
    fetchPage: function () {
      this.$store.dispatch('getAboutPage', {
        url: this.$store.state.apiUrls.aboutCompany,
        model: this.model
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>
<style lang="scss">
.about-company-container {
  @media screen and (max-width: 1380px) and (min-width: 550px) {
    padding: 0 15px;
  }
  .subtitle {
    h3 {
      font-size: 1.6rem;
      font-family: 'Muli Bold', 'BPG Arial', 'sans-serif';
      font-weight: bold;
    }
  }
}
</style>
