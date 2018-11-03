<template>
  <div class="store-list-grid">
    <div class="filters-outer">
      <div class="container">
        <store-filters @changeView="changeView"/>
      </div>
    </div>
    <div class="container" v-if="viewGrid">
      <div class="store-list">
        <div class="store-list-item" v-for="item in $store.getters.stores" :key="item.id">
          <div class="store-inner">
            <router-link to="#">
              <store-item :item="item"/>
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
    <div class="store-list-view" v-else>
      <div class="loading-container">
        <div class="loading-big"></div>
      </div>
    </div>
  </div>
</template>
<script>
import StoreItem from './StoreItem'
import StoreFilters from './StoreFilters'

export default {
  name: 'store-list-grid',
  mounted: function () {
    this.initialLoad()
  },
  components: {
    StoreFilters,
    StoreItem
  },
  watch: {
    viewGrid: function (value) {
      if (!value) {
        console.log('showList')
      }
    }
  },
  data: () => {
    return {
      loading: false,
      hasMoreRecords: true,
      page: 0,
      offset: 1,
      viewGrid: true
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
        url: this.$store.state.apiUrls.storesAPI, model: 'stores', page: this.page, offset: this.offset
      }, customRequest)
      // this.$store.dispatch('loadItems', Request).then((result) => {
      //   this.loading = false
      //   this.page++
      //   if (result === 'NOT_ENOUGH_RECORDS') {
      //     this.hasMoreRecords = false
      //   }
      // })
    },
    loadListItems: function (customRequest) {
      this.loading = true
      const Request = Object.assign({
        url: this.$store.state.apiUrls.storesAPI, model: 'storesList', page: this.page, offset: this.offset
      }, customRequest)
      // this.$store.dispatch('loadItems', Request).then((result) => {
      //   this.loading = false
      //   this.page++
      //   if (result === 'NOT_ENOUGH_RECORDS') {
      //     this.hasMoreRecords = false
      //   }
      // })
    },
    changeView: function (view) {
      this.viewGrid = view
    }
  }
}
</script>
<style lang="scss" scoped>
.store-list {
  display: flex;
  flex-wrap: wrap;
  margin: 2px -10px;
  .store-list-item {
    position: relative;
    margin: 10px;
    border: 0.5px solid #dcdcdc;
    width: calc(25% - 20px);
    box-sizing: border-box;
    padding-top: calc(25% - 20px);
    .store-inner {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
}

.loading {
  opacity: .5;
}
.loading-container{
  display: flex;
  padding: 30px;
  .loading-big{
    margin:auto;
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
