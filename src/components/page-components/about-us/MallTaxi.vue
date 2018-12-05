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
    }
  },
  data: function () {
    return {
      pageData: null,
      locale: this.$store.getters.locale.locale,
      model: 'mallTaxi'
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
      this.$store.dispatch('getAboutPage',{url:  this.$store.state.apiUrls.taxi, model: this.model})
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
  p {
    color: #000;
    opacity: 1;
  }
  .taxi-prices {
    margin-top: 91px;
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
        &:last-child{
          border-bottom: 1px solid #dcdcdc;
        }
        span {
          &:last-child {
            margin-left: auto;
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
    .block-left {
      p {
        font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';
        font-size: 3.6rem;
        font-weight: 900;
        line-height: 6.9rem;
        color: #848484;
        margin: 0;
        .formatter-spans {
          &:first-child {
            color: #000;
          }
          &:last-child {
            display: block;
            font-size: 5.5rem;
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
      }
    }
  }
}
</style>
