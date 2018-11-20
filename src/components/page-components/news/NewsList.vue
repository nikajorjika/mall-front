<template>
  <div class="news-list-container">
    <div class="filters-outer">
      <div class="container">
        <news-filters :categories="categories"/>
      </div>
    </div>
    <div class="new-list-outer">
      <div class="single-news-container news-loaded" v-if="loadedItem">
        <news-single :item="loadedItem" @close="close"/>
      </div>
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
  watch: {
    '$route.params.id': function () {
      this.loadSingle()
    }
  },
  mounted: function () {
    this.loadSingle()
  },
  props: {
    categories: {
      type: Object
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
      model: 'events',
      loadedItem: null
    }
  },
  computed: {
    openItem: {
      get: function () {
        return this.$store.getters.events.find((element) => {
          return element._id === this.$route.params.id
        })
      },
      set: function (value) {
        return value
      }
    }
  },
  methods: {
    loadSingle: function () {
      if (this.$route.params.id && !this.openItem) {
        this.$store.dispatch('loadSingle', { id: this.$route.params.id })
          .then((response) => {
            if (response.status === 'success') {
              this.loadedItem = response.data
            } else {
              console.error('Something went wrong')
            }
          })
          .catch((Error) => {
            console.error(Error.message)
          })
      }
    },
    generateUrl: function (id) {
      const cat = this.$route.params.cat ? this.$route.params.cat : 'single'
      return `/${this.$store.getters.locale.locale}/whats-new/${cat}/${id}`
    },
    open: function (item) {
      this.loadedItem = null
      this.openItem = item
    },
    close: function () {
      this.openItem = this.loadedItem = null
    },
    loadMore: function () {
      console.log('load_more')
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
  &.news-loaded {
    padding-top: 22px;
  }
}
</style>
