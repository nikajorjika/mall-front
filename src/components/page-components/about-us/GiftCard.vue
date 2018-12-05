<template>
  <div class="page-block">
    <div class="content-container">
      <div class="part-left">
        <about-title :title="pageTitle"/>
        <about-content :content="pageDescription"/>
      </div>
      <div class="part-right">
        <img :src="imageUrl" alt="Gift Card">
      </div>
    </div>
    <div class="list-label">
      <p>{{t('see_the_list_below')}}</p>
    </div>
    <gift-stores/>
  </div>
</template>
<script>
import AboutContent from './AboutPageContent'
import AboutTitle from './AboutPageTitle'
import ServiceList from './ServiceList'
import GiftStores from './GiftStores'

export default {
  name: 'gift-card',
  components: {
    GiftStores,
    ServiceList,
    AboutContent,
    AboutTitle
  },
  mounted: function () {
    if (!this.$store.getters.giftCard) this.fetchPage()
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
      model: 'giftCard'
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
    imageUrl: function () {
      return this.$store.getters[ this.model ] ? this.$store.getters[ this.model ][0].photoUrl : ''
    }
  },
  methods: {
    fetchPage: function () {
      this.$store.dispatch('getAboutPage', { url: this.$store.state.apiUrls.gift, model: this.model })
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
  padding-right: 18px;
  p {
    color: #000;
    opacity: 1;
  }
  .content-container{
    display: flex;
    .part-left{
      width:100%;
    }
    .part-right{
      margin: 0 90px;
    }
  }
  .list-label{
    font-size: 1.8rem;
    line-height: 1.28;
    font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';
    margin: 34px 0;
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
