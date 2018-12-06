<template>
  <div class="news-list-container">
    <div class="filters-outer">
      <div class="filter-toggle" @click="openActiveFilters" v-if=" $mq === 'mobile'">
        <h2>{{t('filter')}}</h2> <span class="filter-icon" :class="{open: activeFilters}"><font-awesome-icon
        icon="caret-down"/></span>
      </div>
      <div class="container filters-inner" v-if="activeFilters || $mq !== 'mobile'">
        <news-filters :categories="categories"/>
      </div>
    </div>
    <loading-big v-show="loadingNews"/>
    <div class="new-list-outer">
      <div class="single-news-container news-loaded" v-if="loadedItem">
        <news-single :item="loadedItem" @close="close"/>
      </div>
      <div class="news-list">
        <div class="news-list-item" v-for="item in $store.getters.events" :key="item._id"
             :class="{open: openItem === item}">
          <div class="news-inner" @click="open(item)">
            <router-link :to="generateUrl(item._id)">
              <news-item :item="item" v-if="$mq !== 'mobile'"/>
              <event-item :event="item" v-else/>
            </router-link>
          </div>
          <div class="single-news-container" v-if="openItem === item">
            <news-single :item="item" @close="close"/>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-footer-container" v-if="hasMore">
      <button v-show="loading" class="loading">{{t('loading')}}</button>
      <button v-show="!loading" @click="loadMore">{{t('load_more')}}</button>
    </div>
  </div>
</template>
<script>
import NewsFilters from './NewsFilters'
import NewsItem from './NewsItem'
import NewsSingle from './NewsSingle'
import LoadingBig from '../../partials/LoadingBig'
import EventItem from '../../partials/EventView'

export default {
  name: 'news-list',
  watch: {
    '$route.params.id': function () {
      this.loadSingle()
    }
  },
  mounted: function () {
    if (!this.$store.getters.events.length) this.fetchItems()
  },
  props: {
    categories: {
      type: Object
    }
  },
  components: {
    EventItem,
    LoadingBig,
    NewsSingle,
    NewsItem,
    NewsFilters
  },
  data: function () {
    return {
      page: 0,
      offset: 9,
      model: 'events',
      loadedItem: null,
      loadingNews: false,
      loading: false,
      hasMore: true,
      activeFilters: false
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
    openActiveFilters: function (item) {
      this.activeFilters = !this.activeFilters
    },
    close: function () {
      this.openItem = this.loadedItem = null
    },
    fetchItems: function () {
      this.loadingNews = true
      this.sendRequest('INITIAL_LOAD')
    },
    loadMore: function () {
      this.page++
      this.loading = true
      this.sendRequest('LOAD_MORE')
    },
    sendRequest: function (setter) {
      this.$store.dispatch('fetchItems', {
        model: 'events',
        api: this.$store.state.apiUrls.eventsAPI(this.page, this.offset),
        setter: setter
      }).then((response) => {
        if (response.data.data.length < this.offset) this.hasMore = false
        this.loading = false
        this.loadingNews = false
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.news-list-container {
  @media screen and (max-width: 760px) {
    .filters-outer {
      padding: 0;
      .filter-toggle {
        padding: 22px;
        border-bottom: 1px solid #dcdcdc;
        display: flex;
        justify-content: center;
        h2 {
          margin: 0;
          text-transform: uppercase;
        }
        .filter-icon {
          margin: auto 5px;
          &.open {
            transform: rotate(180deg);
          }
        }
      }
    }
    .filters-inner {
      padding: 32px 34px;
    }
  }
}

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
    @media screen and (max-width: 760px) {
      width:100%;
      border: none;
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
