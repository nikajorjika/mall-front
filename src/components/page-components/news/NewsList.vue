<template>
  <div class="news-list-container">
    <div class="filters-outer">
      <div class="container">
        <news-filters/>
      </div>
    </div>
    <div class="news-list">
      <div class="news-list-item" v-for="item in $store.getters.stores" :key="item.id">
        <div class="news-inner">
          <router-link to="#">
            <news-item :item="item"/>
          </router-link>
        </div>
      </div>
    </div>
    <div class="grid-footer-container" v-if="this.hasMoreRecords">
      <button v-if="$store.state.loading.stores" class="loading">{{t('loading')}}</button>
      <button v-else @click="this.loadMore">{{t('load_more')}}</button>
    </div>
    <div class="loading-placeholder" v-else>
    </div>
  </div>
</template>
<script>

import NewsFilters from './NewsFilters'
import NewsItem from './NewsItem'

export default {
  name: 'news-list',
  beforeMount: function () {
    this.initialLoad()
  },
  components: {
    NewsItem,
    NewsFilters
  },
  data: () => {
    return {
      loading: false,
      hasMoreRecords: true,
      page: 0,
      offset: 1
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
        url: this.$store.state.apiUrls.storesAPI, model: 'news', page: this.page, offset: this.offset
      }, customRequest)
      console.log(Request)
      // this.$store.dispatch('loadMoreItems', Request).then((result) => {
      //   this.loading = false
      //   this.page++
      //   if (result === 'NOT_ENOUGH_RECORDS') {
      //     this.hasMoreRecords = false
      //   }
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
.news-list {
  display: flex;
  flex-wrap: wrap;
  .news-list-item {
    width: 33.33%;
    padding: 32px 30px;
    box-sizing: border-box;
    border-right: 1px solid #dcdcdc;
    border-top: 1px solid #dcdcdc;
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      padding-top: 22px;
      border-top: none;
    }
    &:nth-child(3n + 3) {
      border-right: none;
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
</style>
