<template>
  <div class="news-list-container">
    <div class="filters-outer">
      <div class="container">
        <news-filters :categories="categories"/>
      </div>
    </div>
    <div class="new-list-outer">
      <!--<div class="single-news-container" v-if="openItem">-->
      <!--<news-single :item="openItem" @close="closeEvent"/>-->
      <!--</div>-->
      <div class="news-list">
        <div class="news-list-item" v-for="item in $store.getters.events" :key="item._id"
             :class="{open: openItem === item}">
          <div class="news-inner" @click="open(item)">
            <router-link :to="generateUrl(item._id)">
              <news-item :item="item"/>
            </router-link>
          </div>
          <div class="single-news-container" v-if="openItem === item">
            <news-single :item="item" @close="close"/>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-footer-container" v-if="this.hasMoreRecords">
      <button v-if="$store.state.loading.events" class="loading">{{t('loading')}}</button>
      <button v-else @click="loadMore">{{t('load_more')}}</button>
    </div>
  </div>
</template>
<script>

import NewsFilters from './NewsFilters'
import NewsItem from './NewsItem'
import NewsSingle from './NewsSingle'

export default {
  name: 'news-list',
  mounted: function () {
    this.initialLoad()
    if (this.$route.params.id) {
      // this.loadItem(this.$route.params.id)
    }
  },
  props: {
    categories: {
      type: Object
    }
  },
  watch: {
    '$route.params.id': function (id) {
      if (id) {
        // this.loadItem(id)
      }
    }
  },
  components: {
    NewsSingle,
    NewsItem,
    NewsFilters
  },
  data: function () {
    return {
      loading: false,
      hasMoreRecords: true,
      page: 1,
      offset: 3,
      url: this.$store.state.apiUrls.eventsAPI,
      singleUrl: this.$store.state.apiUrls.singleItemUrl,
      model: 'events',
      openItem: null
    }
  },
  methods: {
    loadMore: function (request) {
      this.loadItems(request)
    },
    initialLoad: function (request) {
      this.loadItems(request)
    },
    loadItems: function (customRequest) {
      this.loading = true
      const Request = Object.assign({
        url: this.url, model: 'events', page: this.page, offset: this.offset
      }, customRequest)
      this.$store.dispatch('loadItems', Request).then((result) => {
        this.loading = false
        this.page++
        if (result === 'NOT_ENOUGH_RECORDS') {
          this.hasMoreRecords = false
        }
      })
    },
    generateUrl: function (id) {
      const cat = this.$route.params.cat ? this.$route.params.cat : 'single'
      return `/whats-new/${cat}/${id}`
    },
    // loadItem: function (id) {
    //   const Request = {
    //     url: this.singleUrl, model: 'events', id: id
    //   }
    //   this.$store.dispatch('loadSingle', Request).then((result) => {
    //     console.log(result)
    //     if (result !== 'RECORD_NOT_FOUND') {
    //       this.openItem = result
    //     }
    //   })
    // },
    open: function (item) {
      this.openItem = item
    },
    close: function () {
      this.openItem = null
    }
  }
}
</script>
<style lang="scss" scoped>
.news-list {
  display: flex;
  flex-wrap: wrap;
  .news-inner {
    height: 100%;
  }
  .news-list-item {
    width: 33.33%;
    padding: 32px 30px;
    box-sizing: border-box;
    border-right: 1px solid #dcdcdc;
    border-top: 1px solid #dcdcdc;
    position: relative;
    @media screen and (max-width: 1650px) {
      padding: 21px;
    }
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      padding-top: 22px;
      border-top: none;
    }
    &:nth-child(3n + 3) {
      border-right: none;
    }
    &:nth-child(3n + 1).open {
      width: 100%;
      .news-inner {
        display: none;
      }
    }
    &:nth-child(3n + 2).open {
      width: 100%;
      position: absolute;
      z-index: 9;
      background: #ffffff;
      .news-inner {
        display: none;
      }
    }
    &:nth-child(3n + 3).open {
      width: 100%;
      position: absolute;
      z-index: 9;
      background: #ffffff;
      .news-inner {
        display: none;
      }
    }
    &.open {
      padding: 22px 0;
    }
  }
}

.grid-footer-container {
  text-align: center;
  border-top: solid 1px #dcdcdc;
  button {
    background: transparent;
    border: none;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 1.25;
    text-align: center;
    padding: 30px 30px;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
  }
}

.loading-placeholder {
  margin-top: 80px;
}

.single-news-container {
  border-bottom: solid 1px #dcdcdc;
}
</style>
