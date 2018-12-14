<template>
  <div class="page-block">
    <about-title :title="pageTitle"/>
    <about-content :content="pageDescription"/>
    <div class="additional-info">
      <div class="additional-info-item">
        <h4>{{workingHoursTitle}}</h4>
        <p v-html="workingHours"></p>
      </div>
      <div class="additional-info-item">
        <h4>{{carrefourTitle}}</h4>
        <p v-html="carrefourWorkingHours"></p>
      </div>
    </div>
  </div>
</template>
<script>
import AboutContent from './AboutPageContent'
import AboutTitle from './AboutPageTitle'

export default {
  name: 'page-block',
  components: {
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
      model: 'aboutUs'
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
    workingHoursTitle: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'WorkingHoursTitle' ] : ''
    },
    workingHours: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'WorkingHours' ] : ''
    },
    carrefourTitle: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'CarrefourTitle' ] : ''
    },
    carrefourWorkingHours: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'CarrefourWorkingHours' ] : ''
    }
  },
  methods: {
    fetchPage: function () {
      this.$store.dispatch('getAboutPage', {
        url: this.$store.state.apiUrls.about,
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
    margin-top: 85px;
    margin-bottom: 74.5px;
    display: flex;
    @media screen and (max-width: 550px) {
      background: #f9f9f9;
      border-top: 1px solid #dcdcdc;
      border-bottom: 1px solid #dcdcdc;
      flex-direction: column;
      padding: 40px 36px;
    }
    .additional-info-item {
      max-width: 320px;
      width: 100%;
      margin-right: 12px;
      h4 {
        font-size: 2.4rem;
        margin: 21px 0;
      }
      p {
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
