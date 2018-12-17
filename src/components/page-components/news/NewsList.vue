<template>
  <div class="news-list-container">
    <div class="filters-outer">
      <div class="filter-toggle" @click="openActiveFilters" v-if=" $mq === 'mobile'">
        <h2>{{t('filter')}}</h2> <span class="filter-icon" :class="{open: activeFilters}"><font-awesome-icon
        icon="caret-down"/></span>
      </div>
      <div class="container filters-inner" v-if="activeFilters || $mq !== 'mobile'">
        <news-filters :categories="categories" @loaded="loading = false"/>
      </div>
    </div>
    <div v-if="loading">
      <div class="new-list-outer">
        <div class="news-list">
          <div class="news-list-item" v-for="(item,index) in [1,1,1,1,1,1]" :key="index">
            <div class="news-inner">
              <news-item :loading="true" v-if="$mq !== 'mobile'"/>
              <event-item :loading="true" v-else/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="new-list-outer">
      <transition name="fadeIn">
        <div class="single-news-container news-loaded" v-if="loadedItem">
          <news-single :item="loadedItem" v-if="$mq !== 'mobile'" @close="close"/>
          <news-single-mobile :item="loadedItem" v-else @close="close"/>
        </div>
      </transition>

      <div class="news-list">
        <div class="news-list-item" v-for="(item, index) in $store.getters.events" :key="index"
             :class="{open: openItem === item, hideNews: absolute.indexOf(index) !== -1}" :id="`event-${index}`">
          <div class="news-inner">
            <router-link :to="generateUrl(item)">
              <news-item :item="item" v-if="$mq !== 'mobile'"/>
              <event-item :event="item" v-else/>
            </router-link>
          </div>
          <transition name="fadeIn">
            <div class="single-news-container" v-if="openItem === item && $mq !== 'mobile'">
              <news-single :item="item" @close="close"/>
            </div>
          </transition>
          <transition name="fadeIn">
            <div class="single-news-container" v-if="openItem === item && $mq === 'mobile'">
              <news-single-mobile :item="item" @close="close"/>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NewsFilters from './NewsFilters'
import NewsItem from './NewsItem'
import NewsSingle from './NewsSingle'
import LoadingBig from '../../partials/LoadingBig'
import EventItem from '../../partials/EventView'
import NewsSingleMobile from './NewsSingleMobile'
import metas from '../../../lang/meta/metas'

export default {
  name: 'news-list',
  mounted: function () {
    if (this.$route.params.id && !this.openItem) {
      this.loadSingle()
    }
    if (this.$store.getters.events.length) {
      this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
      this.loading = false
    }
  },
  metaInfo: function () {
    if (this.loadedItem || this.openItem) {
      return {
        title: this.loadedItem ? this.loadedItem.name[ this.locale ] : this.openItem ? this.openItem.name[ this.locale ] : 'loading',
        titleTemplate: '%s  | TbilisiMall.com',
        meta: [
          {
            name: 'description',
            content: this.loadedItem ? this.loadedItem.name[ this.locale ] : this.openItem ? this.openItem.name[ this.locale ] : 'loading'
          },
          {
            property: 'og:title',
            content: `${this.loadedItem ? this.loadedItem.name[ this.locale ] : this.openItem ? this.openItem.name[ this.locale ] : 'loading'} | TbilisiMall.com`
          },
          {
            property: 'og:description',
            content: this.loadedItem ? this.loadedItem.name[ this.locale ] : this.openItem ? this.openItem.name[ this.locale ] : 'loading'
          },
          {
            property: 'og:image',
            content: this.loadedItem ? this.loadedItem.name[ this.locale ] : this.openItem ? this.openItem.name[ this.locale ] : 'loading'
          }
        ]
      }
    } else {
      return metas.defaultMetas
    }
  },
  props: {
    categories: {
      type: Object
    }
  },
  components: {
    NewsSingleMobile,
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
      loading: true,
      hasMore: true,
      activeFilters: false,
      openItem: null
    }
  },
  metaData: function () {
    let name = 'loading...'
    let description = 'loading...'
    let logoUrl = 'loading...'
    if (this.loadedItem) {
      name = this.loadedItem.name[ this.locale ]
      description = this.loadedItem.description[ this.locale ]
      logoUrl = this.loadedItem.photoUrl
    } else if (this.openItem) {
      name = this.openItem.name[ this.locale ]
      description = this.openItem.description[ this.locale ]
      logoUrl = this.openItem.photoUrl
    }
    return metas.customPageMeta(name, description, logoUrl)
  },
  watch: {
    '$route.params.id': function (to, fr) {
      const existing = this.$store.getters.events.find((element) => {
        return element._id === this.$route.params.id
      })
      this.openItem = null
      this.loadedItem = null
      if (existing) {
        this.openItem = existing
        this.loading = false
      } else {
        this.loadSingle()
      }
    }
  },
  computed: {
    absolute: function () {
      const index = this.$store.getters.events.indexOf(this.openItem)
      const absolute = []
      if (index !== -1) {
        if (((index + 1) % 3) === 0) {
          absolute.push(index - 1)
          absolute.push(index - 2)
        }
        if (((index + 1) % 3) === 1) {
          absolute.push(index + 1)
          absolute.push(index + 2)
        }
        if (((index + 1) % 3) === 2) {
          absolute.push(index - 1)
          absolute.push(index + 1)
        }
      }
      return absolute
    }
  },
  methods: {
    loadSingle: function () {
      if (this.$route.params.id && !this.openItem) {
        this.$store.dispatch('loadSingle', { id: this.$route.params.id })
          .then((response) => {
            if (response.status === 'success') {
              this.loadedItem = response.data
              this.loading = false
            } else {
              console.error('Something went wrong')
            }
          })
          .catch((Error) => {
            console.error(Error.message)
          })
      }
    },
    generateUrl: function (item) {
      const id = item._id
      const cat = this.$route.params.cat ? this.$route.params.cat : 'single'
      let slug = `/${this.createSlug(item.name[ 'en' ])}`
      return `/${this.locale}/whats-new/${cat}${slug}/${id}`
    },
    open: function (item, index) {
      this.loadedItem = null
      this.openItem = item
    },
    openActiveFilters: function (item) {
      this.activeFilters = !this.activeFilters
    },
    close: function () {
      this.loadedItem = null
      this.openItem = null
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
    @media screen and (max-width: 1650px) {
      padding: 21px;
    }
    @media screen and (max-width: 760px) {
      width: 100%;
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
    &.hideNews {
      display: none;
      @media screen and (max-width: 760px) {
        display: block;
      }
    }
    &.open {
      padding: 22px 0 0;
      width: 100%;
      @media screen and (max-width: 760px) {
        display: block;
        padding: 21px;
      }
      &:nth-child(4 + n) {
        border-top: 1px solid #dcdcdc;
      }
      .news-inner {
        display: none;
        @media screen and (max-width: 760px) {
          display: block;
        }
      }
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
  &.fadeIn-leave-active {
    animation: fadeOut .2s;
  }
  &.fadeIn-enter-active {
    animation: fadeIn .2s;
  }
  &.news-loaded {
    padding-top: 22px;
  }
}
</style>
