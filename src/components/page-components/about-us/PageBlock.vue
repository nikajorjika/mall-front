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
      return this.pageDataContent ? `<p>${this.pageDataContent[ this.locale + 'Description' ].replace(/\n/g, '<br />')}</p>` : ''
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
      this.$store.dispatch('getAboutPage', this.$store.state.apiUrls.about)
        .then((response) => {
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
