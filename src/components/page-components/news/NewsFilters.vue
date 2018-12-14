<template>
  <div class="news-filters">
    <div class="filter-item">
      <custom-select :items="categories.categories.data" :placeholder="categories.categories.placeholder"
                     :multiple="true"
                     name="category" :value="category" @change="updateElement"/>
    </div>
    <div class="filter-item">
      <custom-select :items="brands" name="brand" :placeholder="categories.brands.placeholder" :multiple="true"
                     @change="updateElement" nameField="name" valueField="_id"/>
    </div>
    <div class="filter-item">
      <custom-select :items="categories.floors.data" name="floor" :placeholder="categories.floors.placeholder"
                     :multiple="true"
                     @change="updateElement"/>
    </div>
    <div class="filter-item">
      <custom-select :items="categories.sort.data" name="sort" :placeholder="categories.sort.placeholder"
                     @change="updateElement"/>
    </div>
  </div>
</template>
<script>
import CustomSelect from '../../partials/Select'

export default {
  name: 'news-filters',
  components: {
    CustomSelect
  },
  watch: {
    '$route.params.cat': function (val) {
      this.category = this.categoryInUrl[ val ]
    }
  },
  props: {
    categories: {
      type: Object
    }
  },
  mounted: function () {
    if (!this.$store.getters.categories.length) {
      this.$store.dispatch('getCategories').catch((error) => {
        console.error(error)
      })
    }
    if (!this.$store.getters.events.length) this.fetchItems()

    if (!this.$store.getters[ `storesList` ].length) {
      this.getStoreList()
    }
    if (this.$route.params.cat) {
      this.category = this.categoryInUrl[ this.$route.params.cat ]
    }
  },
  data: () => {
    return {
      categoryInUrl: {
        promotions: 'includeOffer',
        events: 'includeEvent',
        news: 'includeNews',
        'new-collections': 'includeNewCol'
      },
      filters: {
        includeEvent: true,
        includeNewCol: true,
        includeNews: true,
        includeOffer: true,
        brandIds: [],
        floors: [],
        page: 0,
        isUpcoming: false,
        isOngoing: false,
        isArchive: false
      },
      category: null,
      listLoaded: false
    }
  },
  computed: {
    brands: function () {
      return this.$store.getters.storesList.filter((store) => {
        return 1
      })
    }
  },
  methods: {
    updateElement: function (selected) {
      if (selected.selected.length || selected.selected !== null) {
        if (selected.name === 'category') {
          this.filters.includeEvent = this.filters.includeNewCol = this.filters.includeNews = this.filters.includeOffer = false
          selected.selected.forEach(item => {
            this.filters[ item.value ] = true
          })
        }
        if (selected.name === 'brand') {
          this.filters.brandIds = []
          selected.selected.forEach(item => {
            if (this.filters.brandIds.indexOf(item[ selected.value ]) === -1) {
              this.filters.brandIds.push(item[ selected.value ])
            }
          })
        }
        if (selected.name === 'floor') {
          this.filters.floors = []
          selected.selected.forEach(item => {
            if (this.filters.floors.indexOf(item.value) === -1) {
              this.filters.floors.push(item.value)
            }
          })
        }
        if (selected.name === 'sort') {
          this.filters.isOngoing = this.filters.isArchive = this.filters.isUpcoming = false
          this.filters[ selected.value ] = true
        }
      }
      if (this.filters.includeEvent === false && this.filters.includeNewCol === false && this.filters.includeNews === false && this.filters.includeOffer === false) {
        this.filters.includeEvent = this.filters.includeNewCol = this.filters.includeNews = this.filters.includeOffer = true
      }
      this.loadFilteredNews()
    },
    getStoreList: function () {
      this.$store.dispatch('fetchItems', {
        model: `storesList`,
        api: this.$store.state.apiUrls[ `storesList` ],
        setter: 'SET_STORE_LIST'
      }).then(() => {
        this.listLoaded = true
      }).catch((error) => {
        console.error(error)
      })
    },
    loadFilteredNews: function () {
      this.sendRequest('INITIAL_LOAD')
    },
    fetchItems: function () {
      this.sendRequest('INITIAL_LOAD')
    },
    loadMore: function () {
      this.filters.page++
      this.loading = true
      this.sendRequest('LOAD_MORE')
    },
    sendRequest: function (setter) {
      this.$store.dispatch('loadFiltered', {
        model: 'events',
        api: this.$store.state.apiUrls.newsFilters,
        setter: setter,
        filters: this.filters
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.news-filters {
  display: flex;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
  .filter-item {
    width: 260px;
    margin-right: 15.8px;
    @media screen and (max-width: 1650px) {
      width: 185px;
    }
    @media screen and (max-width: 760px) {
      width: 100%;
      margin-bottom: 16px;
      height: 34px;
    }
    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }
  }
}
</style>
