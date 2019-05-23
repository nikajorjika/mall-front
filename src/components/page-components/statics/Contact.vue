<template>
  <div class="contact-page-container">
    <section class="section-item">
      <div class="container parts-wrapper">
        <div class="part part-left">
          <about-title :title="pageTitle"/>
          <about-content :content="pageDescription"/>
          <div class="contact-page-list">
            <div class="list-item" v-for="(item, index) in boxes" :key="index">
              <h3>{{item[0] ? item[0] : ''}}</h3>
              <p>{{item[1] ? item[1] : ''}}</p>
              <div>{{item[2] ? item[2] : ''}}</div>
              <a :href="`mailto:${item[3] ? item[3] : ''}`">{{item[3] ? item[3] : ''}}</a>
              <div class="address">{{item[4] ? item[4] : ''}}</div>
              <div class="stick-bottom">{{item[5] ? item[5] : ''}}</div>
            </div>
          </div>
        </div>
        <div class="part part-right">
          <div class="contact-form-container">
            <contact-form/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AboutTitle from '../about-us/AboutPageTitle'
import AboutContent from '../about-us/AboutPageContent'
import ContactForm from '../../partials/ContactForm'

export default {
  components: { ContactForm, AboutContent, AboutTitle },
  mounted: function () {
    if (!this.$store.getters.contact) {
      this.fetchData()
    }
    this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
  },
  data: function () {
    return {
      model: 'contactPage'
    }
  },
  methods: {
    fetchData: function () {
      this.$store.dispatch('getAboutPage', {
        url: this.$store.state.apiUrls.contactPage,
        model: this.model
      }).then((response) => {
      }).catch((error) => console.error(error))
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
    boxes: function () {
      const result = []
      if (this.pageDataContent) {
        if (this.pageDataContent[ `${this.locale}Box1` ] && this.pageDataContent[ `${this.locale}Box1` ].length) {
          result.push(this.pageDataContent[ `${this.locale}Box1` ])
        }
        if (this.pageDataContent[ `${this.locale}Box2` ] && this.pageDataContent[ `${this.locale}Box2` ].length) {
          result.push(this.pageDataContent[ `${this.locale}Box2` ])
        }
        if (this.pageDataContent[ `${this.locale}Box3` ] && this.pageDataContent[ `${this.locale}Box3` ].length) {
          result.push(this.pageDataContent[ `${this.locale}Box3` ])
        }
        if (this.pageDataContent[ `${this.locale}Box4` ] && this.pageDataContent[ `${this.locale}Box4` ].length) {
          result.push(this.pageDataContent[ `${this.locale}Box4` ])
        }
      }
      return result
    }
  }
}
</script>

<style lang="scss">
.contact-page-container {
  .section-item {
    @media screen and (max-width: 1380px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 760px) {
      padding: 0;
    }

    .parts-wrapper {
      display: flex;
      @media screen and (max-width: 760px) {
        flex-direction: column;
      }
    }
  }

  .part {
    border-right: 1px solid #dcdcdc;
    @media screen and (max-width: 760px) {
      width: 100%;
      border-right: none;
    }

    &.part-left {
      padding-right: 154px;
      flex: 1;
      @media screen and (max-width: 1380px) {
        padding-right: 20px;
      }
      @media screen and (max-width: 760px) {
        padding: 0 15px;
      }
      @media screen and (max-width: 550px) {
        padding: 0;
      }
    }

    &.part-right {
      width: 398px;
      padding: 0 30px;
      @media screen and (max-width: 956px) {
        width: 320px;
      }
      @media screen and (max-width: 760px) {
        width: 100%;
        padding: 0;
        border-top: 1px solid #dcdcdc;
      }

      .contact-form-container {
        margin-top: 122px;
        @media screen and (max-width: 760px) {
          margin-top: 0;
          padding: 45px 15px 0;
        }
        @media screen and (max-width: 550px) {
          margin-top: 0;
          padding: 45px 36px 0;
        }
      }
    }
  }

  .contact-page-list {
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 550px) {
      padding: 0 36px;
    }

    .list-item {
      width: calc(50% - 8px);
      background-color: #f9f9f9;
      margin: 8px 16px 8px 0;
      padding: 16px 19px;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 956px) {
        width: calc(100% - 15px);
      }

      @media screen and (max-width: 760px) {
        width: 100%;
        margin: 0;
      }

      &:nth-child(2n + 2) {
        margin-right: 0;
      }

      h3 {
        font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';
        font-size: 1.8rem;
        font-weight: bold;
        line-height: 1.28;
        text-transform: uppercase;
        margin: 0;
      }

      p {
        margin: 0 0 13px;
        opacity: 1;
      }

      > div {
        font-size: 1.6rem;
        font-family: 'Muli', 'BPG Arial', 'sans-serif';
        line-height: 1.88;
        margin: 0;
      }

      a {
        font-size: 1.6rem;
        font-family: 'Muli', 'BPG Arial', 'sans-serif';
        line-height: 1.88;
        color: #2d83e6;
      }
    }
  }
}
</style>
