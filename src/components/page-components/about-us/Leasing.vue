<template>
  <div class="page-block">
    <about-title :title="pageTitle"/>
    <about-content :content="pageDescription"/>
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
  name: 'leasing-block',
  components: {
    ServiceList,
    AboutContent,
    AboutTitle
  },
  mounted: function () {
    if (!this.$store.getters[this.model]) this.fetchPage()
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
      locale: this.$store.getters.locale.locale,
      model: 'leasing'
    }
  },
  computed: {
    pageDataContent: function () {
      return this.$store.getters[ this.model ] ? JSON.parse(this.$store.getters[ this.model ][0].data) : ''
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
    }
  },
  methods: {
    fetchPage: function () {
      this.$store.dispatch('getAboutPage', {url: this.$store.state.apiUrls.leasing, model: this.model})
        .then((response) => {
          console.log(response)
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
    display: flex;
    margin-top: 28px;
    .contact-info {
      background: #f9f9f9;
      padding: 14px 33px;
      margin-right: 16px;
      min-width: 398px;
      .contact-info-inner{
        p{
          font-size: 1.8rem;
          margin: 0;
          line-height: 1.28;
          &.bold{
            font-weight: 900;
            margin-bottom: 21px;
          }
        }
        a{
          color: #2d83e6;
          font-size: 1.6rem;
          margin: 0;
          line-height: 1.88;
        }

        &:nth-child(4){
          p{
            font-size: 1.6rem;
          }
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
