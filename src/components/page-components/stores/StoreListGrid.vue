<template>
  <div class="store-list-grid">
    <div class="filters-outer">
      <div class="container">
        <div class="filter-toggle" v-if=" $mq === 'mobile'">
          <div class="mobile-search">
            <div class="search-icon">
              <img src="../../../assets/images/icons/search.svg" height="12.2px" width="11.8px">
            </div>
            <input type="text" class="search-input" @input="filterSearch" v-model="$store.state.storeSearch"
                   :placeholder="t('store_mobile_search')">
          </div>
          <div class="filter-toggle-part" @click="activeFilters = !activeFilters">
            <h2>{{t('filter')}}</h2> <span class="filter-icon" :class="{open: activeFilters}"><font-awesome-icon
            icon="caret-down"/></span>
          </div>
        </div>
        <store-filters class="filter-mobile-class" :categories="categories" :filteredCats="filteredCategories"
                       v-if="activeFilters || $mq !== 'mobile'" @filtered="filterItems"
                       @changeView="changeView"/>
      </div>
    </div>
    <div v-if="loading && (viewGrid || $mq === 'mobile')">
      <div class="container">
        <div class="store-list">
          <div class="store-list-item" v-for="(item,index) in [1,1,1,1,1,1,1,1]" :key="index">
            <div class="store-inner">
              <store-item :loading="true"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="viewGrid ||  $mq === 'mobile'">
      <div class="store-list">
        <div class="store-list-item" v-for="(item, index) in filteredItems" :key="index">
          <div class="store-inner">
            <router-link :to="`/${locale}/store/${createSlug(item.name['en'])}/${item._id}`">
              <store-item :item="item"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="store-list-view" v-else>
      <div class="alphabet-header">
        <div class="alphabet-header-wrapper">
          <div class="alphabet-item" v-for="(value, index) in $store.getters.alphabet[locale]"
               :key="index">
            <span @click="filterList(value)"
                  :class="{active: grouped[value.toLowerCase()] !== undefined && grouped[value.toLowerCase()].length !== 0 }">{{value}}
            </span>
          </div>
        </div>
      </div>
      <div class="alph-list-header" v-if="listLoaded">
        <ul>
          <li class="brand"><span>{{t('brand')}}</span></li>
          <li class="tags"><span>{{t('tags')}}</span></li>
          <li class="additional-services"><span>{{t('additionalServices')}}</span></li>
          <li class="activities"><span>{{t('activities')}}</span></li>
        </ul>
      </div>
      <div class="store-list-container">
        <div class="store-list-wrapper">
          <div class="alphabetic-container" v-for="letter in currentAlphabetFilter" :key="letter">
            <div class="alphabetic-container-inner" v-if="grouped[letter.toLowerCase()]">
              <div class="alphabet-wrapper">
                <div class="alphabet-item">
                  {{letter.toUpperCase()}}
                </div>
                <div class="items-container">
                  <div class="item" v-for="(value, index) in grouped[letter.toLowerCase()]"
                       :key="index">
                    <div v-if="value !== undefined" class="item-wrapper">
                      <div class="item-column name">
                        <router-link :to="`/${locale}/store/${createSlug(value.name['en'])}/${value._id}`">
                        <span class="name-inner">
                          {{value.name[locale]}}
                        </span>
                        </router-link>
                      </div>
                      <div class="item-column tags">
                                                <span class="tag" v-for="(tag, index) in value.tags" :key="index"><span
                                                  class="tag-inner">{{tag}}</span></span>
                      </div>
                      <div class="item-column services">
                        <span class="service" v-for="(service, serviceIndex) in services" :key="serviceIndex"
                              :class="{active: checkIfFilters(value.filters, service)}">{{service.name[locale]}}</span>
                      </div>
                      <div class="item-column activities">
                        <span class="activity" v-for="(activity, activityIndex) in activities" :key="activityIndex"
                              :class="{active: value.activities[activity.value] > 0 }">{{activity.name[locale]}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StoreItem from './StoreItem'
import StoreFilters from './StoreFilters'
import LoadingBig from '../../partials/LoadingBig'
import FilterSearch from '../../partials/FilterSearch'

export default {
  name: 'store-list-grid',
  components: {
    FilterSearch,
    LoadingBig,
    StoreFilters,
    StoreItem
  },
  watch: {
    viewGrid: function (value) {
      if (!value) {
      }
    }
  },
  mounted: function () {
    if (!this.$store.getters[ `${this.model}List` ].length) {
      this.loading = true
      this.getStoreList()
    } else {
      this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
    }
  },
  props: {
    categories: {
      type: Object
    },
    model: {
      type: String,
      default: 'stores'
    },
    categoryId: {
      type: Array,
      default: () => {
        return [ '5b9d3c1f62973c001fd2c698', '5b9d3c6062973c001fd2c699' ]
      }
    },
    apiUrl: {
      type: String,
      default: 'storesAPI'
    },
    services: {
      type: Array,
      default: () => {
        return [
          {
            name: {
              en: 'Tax free',
              ka: 'Tax free'
            },
            value: 'Tax free'
          },
          {
            name: {
              en: 'Discount Card',
              ka: 'Discount Card'
            },
            value: 'Discount Card'
          },
          {
            name: {
              en: 'Gift Card',
              ka: 'Gift Card'
            },
            value: 'Gift Card'
          },
          {
            name: {
              en: 'Amex',
              ka: 'Amex'
            },
            value: 'Amex'
          }
        ]
      }
    },
    activities: {
      type: Array,
      default:
        () => {
          return [ {
            name: {
              en: 'Promotion',
              ka: 'Promotion'
            },
            value: 'offer'
          }, {
            name: {
              en: 'New collections',
              ka: 'New collections'
            },
            value: 'newCollections'
          }, {
            name: {
              en: 'Events',
              ka: 'Events'
            },
            value: 'events'
          }, {
            name: {
              en: 'News',
              ka: 'News'
            },
            value: 'news'
          }
          ]
        }
    }
  },
  data: function () {
    return {
      loading: false,
      loadingStores: false,
      hasMore: true,
      page: 0,
      offset: 12,
      requestSent: false,
      viewGrid: true,
      listStoresShowing: this.grouped,
      currentLetter: null,
      listLoaded: false,
      activeFilters: false,
      filters: null
    }
  },
  methods: {
    changeView: function (view) {
      this.viewGrid = view
    },
    filterItems: function (filters) {
      this.filters = filters
    },
    filterList: function (value) {
      this.currentLetter = value
    },
    fetchItems: function () {
      this.loadingStores = true
      this.sendRequest('INITIAL_LOAD')
    },
    scroll: function () {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight - document.getElementById('footer').offsetHeight
        if (bottomOfWindow && !this.requestSent) {
          this.requestSent = true
          this.loadMore()
        }
      }
    },
    checkIfFilters: function (checkToArray, checkValue) {
      const str = checkToArray.join('')
      return str.toLowerCase().includes(checkValue.name[ this.locale ].toLowerCase())
    },
    loadMore: function () {
      this.page++
      this.loading = true
      this.sendRequest('LOAD_MORE')
    },
    sendRequest: function (setter) {
      this.$store.dispatch('fetchItems', {
        model: this.model,
        api: this.$store.state.apiUrls[ this.apiUrl ](this.page, this.offset),
        setter: setter
      }).then((response) => {
        if (response.data.data.length < this.offset) this.hasMore = false
        this.loading = false
        this.loadingStores = false
        this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
        if (response.data.data.length) {
          this.requestSent = false
        }
      }).catch((error) => {
        console.error(error)
      })
    },
    getStoreList: function () {
      this.$store.dispatch('fetchItems', {
        model: `${this.model}List`,
        api: this.$store.state.apiUrls[ `${this.model}List` ],
        setter: 'SET_STORE_LIST'
      }).then(() => {
        this.listLoaded = true
        this.loading = false
        this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
      }).catch((error) => {
        console.error(error)
      })
    },
    filterSearch: function () {
      if (this.filters) {
        this.filters.search = this.$store.getters.storeSearch
      } else {
        this.filters = {
          category: [],
          search: this.$store.getters.storeSearch,
          floors: [],
          sort: ''
        }
      }
    }
  },
  computed: {
    filteredItems: function () {
      let list = this.$store.getters[ `${this.model}List` ]
      if (this.filters && list) {
        list = list.filter((item) => {
          let filterIndex = 1
          if (this.filters.category.length) {
            let intersection = item.subcategoryIds.filter(cat => {
              return this.filters.category.indexOf(cat._id) !== -1
            })
            if (!intersection.length) {
              filterIndex = 0
            }
          }
          if (this.filters.search.length && item.name.en.toLowerCase().indexOf(this.filters.search.toLowerCase()) === -1 && item.name.ka.toLowerCase().indexOf(this.filters.search.toLowerCase()) === -1) {
            filterIndex = 0
          }
          if (this.filters.floors.length) {
            filterIndex = 0
          }
          return filterIndex
        })

        if (this.filters.sort.length && this.filters.sort === 'asc') {
          list.sort((a, b) => (a.name[ this.locale ].toLowerCase() > b.name[ this.locale ].toLowerCase()) ? 1 : ((b.name[ this.locale ].toLowerCase() > a.name[ this.locale ].toLowerCase()) ? -1 : 0))
        } else if (this.filters.sort.length && this.filters.sort === 'desc') {
          list.sort((a, b) => (a.name[ this.locale ].toLowerCase() < b.name[ this.locale ].toLowerCase()) ? 1 : ((b.name[ this.locale ].toLowerCase() < a.name[ this.locale ].toLowerCase()) ? -1 : 0))
        }
      }
      return list
    },
    currentAlphabetFilter: function () {
      const alph = this.$store.getters.alphabet[ this.locale ]
      if (this.currentLetter === null) {
        return alph
      } else {
        return [ this.currentLetter ]
      }
    },
    grouped: function () {
      return this.groupByAlphabet(this.filteredItems)
    },
    filteredCategories: function () {
      if (this.$store.getters.categories.hasOwnProperty('subcategories')) {
        return this.$store.getters.categories.subcategories.filter(item => {
          if (this.categoryId.indexOf(item.categoryId) !== -1) {
            return true
          }
        })
      } else {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.store-list-grid {
  .store-list-view {
    @media screen and (max-width: 1683px) {
      padding: 0 36px;
    }
  }
  .filters-outer {
    @media screen and (max-width: 760px) {
      padding: 0;
    }

    .filter-mobile-class {
      @media screen and (max-width: 760px) {
        padding: 32px 36px;
        border-top: 1px solid #dcdcdc;
      }
    }
  }
}

.filter-toggle {
  display: flex;

  .filter-toggle-part {
    display: flex;
    width: 126px;

    h2 {
      margin: auto 0 auto auto;
      font-size: 1.6rem;
      text-transform: uppercase;
      line-height: 1.25;
    }

    .filter-icon {
      margin: auto auto auto 5px;
    }
  }

  .mobile-search {
    flex: 1;
    display: flex;
    position: relative;
    border-right: 1px solid #dcdcdc;
    padding: 24px;

    input {
      height: 100%;
      width: 100%;
      background: transparent;
      padding: 0 5px 0 29px;
      border: none;
      font-size: 1.2rem;

      &:focus {
        outline: none;
      }
    }

    .search-icon {
      position: absolute;
      left: 29px;
    }
  }
}

.store-list {
  display: flex;
  flex-wrap: wrap;
  margin: 2px -10px;
  @media screen and (max-width: 1110px) {
    margin: 2px 0;
  }
  @media screen and (max-width: 760px) {
    margin: 3px;
  }

  .store-list-item {
    position: relative;
    margin: 10px;
    border: 1px solid rgba(220, 220, 220, 0.5);
    width: calc(25% - 20px);
    box-sizing: border-box;
    padding-top: calc(25% - 20px);
    @media screen and (max-width: 760px) {
      width: calc(50% - 20px);
      padding-top: calc(50% - 20px);
    }

    .store-inner {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
}

.alphabet-header {
  display: flex;
  max-width: 1642px;
  width: 100%;
  margin: 40px auto 8px;

  .alphabet-header-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .alphabet-item {
      font-family: 'Muli', 'BPG Nino Mtavruli', 'sans-serif';
      text-transform: uppercase;
      font-size: 1.4rem;
      box-sizing: border-box;

      span {
        opacity: .3;
        pointer-events: none;

        &.active {
          opacity: 1;
          pointer-events: auto;
          cursor: pointer;
        }
      }
    }
  }
}

.alph-list-header {
  background-color: #f9f9f9;
  border-top: 1px solid #dcdcdc;

  ul {
    display: flex;
    max-width: 1642px;
    margin: 0 auto;
    width: 100%;

    li {
      padding: 7px 0;

      &.brand {
        width: 33%;
        text-align: right;

        span {
          display: block;
          margin-right: 95px;
        }
      }

      &.tags {
        width: 18%;
        text-align: center;
      }

      &.additional-services {
        width: 25%;
      }

      &.activities {
        width: 21%;
      }

      span {
        font-size: 1.2rem;
        font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
        text-transform: capitalize;
        color: #848484;
      }
    }
  }
}

.alphabetic-container {
  .alphabetic-container-inner {
    border-bottom: 1px solid rgba(132, 132, 132, 0.51);

    .alphabet-wrapper {
      display: flex;
      max-width: 1642px;
      margin: 14px auto;
      width: 100%;

      .alphabet-item {
        font-size: 6.4rem;
        width: 16.87%;
        color: #000;
        font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
        text-transform: uppercase;
        padding: 48px 0 48px 36px;
        @media screen and (max-width: 1060px) {
          padding-left: 0;
          width: 9%;
        }
      }

      .items-container {
        width: 83%;
        position: relative;

        @media screen and (max-width: 1060px) {
          width: 92%;
        }
        &:after {
          content: '';
          position: absolute;
          width: 1px;
          background-color: #848484;
          opacity: 0.5;
          left: 19%;
          top: 0;
          height: 100%;
        }

        .item {
          .item-wrapper {
            display: flex;

            .item-column {
              width: 20%;
              margin-top: 14px;
            }

            .name {
              font-family: 'Muli', 'BPG Nino Mtavruli', 'sans-serif';
              text-transform: uppercase;
              color: #000;
              font-size: 1.6rem;
              line-height: 1.2;
              display: flex;
              width: 19.1%;

              .name-inner {
              }
            }

            .tags {
              display: flex;
              flex-wrap: wrap;
              padding-left: 12px;
              margin-top: 14px;
              width: 21.3%;
              padding-right: 12px;
              .tag {
                font-family: 'Muli', 'BPG Arial', 'sans-serif';
                text-transform: capitalize;
                color: #000;
                margin: auto 4px 5px;
                border-radius: 2px;
                font-size: 1.2rem;
                line-height: 1.33;

                .tag-inner {
                  display: block;
                  padding: 2px 9px;
                  background-color: #dcdcdc;
                }
              }
            }

            .services {
              display: flex;
              width: 30.2%;
              flex-wrap: wrap;

              .service {
                font-family: 'Muli', 'BPG Arial', 'sans-serif';
                text-transform: capitalize;
                font-size: 1.4rem;
                line-height: 1.29;
                color: #dcdcdc;
                white-space: nowrap;
                margin-right: 37px;

                &.active {
                  color: #000;
                }
              }
            }

            .activities {
              display: flex;
              width: 25.3%;
              flex-wrap: wrap;

              .activity {
                font-family: 'Muli', 'BPG Arial', 'sans-serif';
                text-transform: capitalize;
                font-size: 1.4rem;
                line-height: 1.29;
                color: #dcdcdc;
                white-space: nowrap;
                margin-right: 15px;

                &.active {
                  color: #2d83e6;
                }
              }
            }
          }
        }
      }
    }
  }
}

.loading {
  opacity: .5;
}

.loading-container {
  display: flex;
  padding: 30px;

  .loading-big {
    margin: auto;
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
