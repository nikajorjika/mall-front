<template>
  <div class="page-block">
    <about-title :title="pageTitle"/>
    <about-content :content="pageDescription"/>
    <div class="taxi-additional">
      <div class="block-left">
        <p v-html="additional"></p>
      </div>
      <div class="block-right">
        <h2>{{tableTitle}}</h2>
      </div>
    </div>
    <div class="taxi-prices">
      <ul>
        <li v-for="(item, index) in table" :key="index">
          <span>{{item.title}}</span><span>{{item.content}} {{t('gel')}}</span>
        </li>
      </ul>
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
    }
  },
  data: function () {
    return {
      pageData: null,
      model: 'mallTaxi'
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
    tableTitle: function () {
      return this.pageDataContent ? this.pageDataContent[ this.locale + 'TableTitle' ] : ''
    },
    additional: function () {
      let str = ''
      if (this.pageDataContent) {
        str = this.pageDataContent[ this.locale + 'Additional1' ]
        str = str.split('[[').join('<span class="formatter-spans">')
        str = str.split(']]').join('</span>')
      }
      return str
    },
    table: function () {
      let result = []
      if (this.pageDataContent) {
        const data = this.pageDataContent[ this.locale + 'TableContent' ]
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
        url: this.$store.state.apiUrls.taxi,
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
  .taxi-prices {
    margin-top: 91px;
    @media screen and (max-width: 1100px) {
      margin-top: 37px;
    }

    @media screen and (max-width: 550px) {
      padding: 0 36px;
    }
    ul {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        padding: 30px 0 29px;
        border-top: 1px solid #dcdcdc;
        color: #848484;
        font-family: 'Muli', 'BPG Arial', 'sans-serif';
        font-size: 1.6rem;
        line-height: 1.25;
        &:last-child {
          border-bottom: 1px solid #dcdcdc;
        }
        @media screen and (max-width: 550px) {
          font-size: 1.4rem;
        }
        span {
          &:last-child {
            margin-left: auto;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.page-block {
  .taxi-additional {
    display: flex;
    @media screen and (max-width: 1100px) {
      flex-direction: column;
    }

    @media screen and (max-width: 550px) {
      padding: 0 36px;
    }
    .block-left {
      p {
        font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';
        font-size: 3.6rem;
        font-weight: 900;
        line-height: 6.9rem;
        color: #848484;
        margin: 0;

        @media screen and (max-width: 1366px) {
          font-size: 2.9rem;
          line-height: 55px;
        }
        @media screen and (max-width: 375px) {
          font-size: 2.5rem;
        }
        .formatter-spans {
          &:first-child {
            color: #000;
          }
          &:last-child {
            display: block;
            font-size: 4.4rem;
            @media screen and (max-width: 375px) {
              font-size: 3.6rem;
            }
          }
        }
      }
    }
    .block-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      h2 {
        font-family: 'Muli', 'BPG Arial', 'sans-serif';
        font-size: 3.6rem;
        line-height: 1.25;
        color: #848484;
        margin: auto auto 0 auto;
        @media screen and (max-width: 1100px) {
          margin-left: 0;
          font-size: 1.4rem;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
