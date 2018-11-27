<template>
  <div class="store-list-grid">
    <div class="filters-outer">
      <div class="container">
        <store-filters :categories="categories" @changeView="changeView"/>
      </div>
    </div>
    <loading-big v-show="loadingStores"/>
    <div class="container" v-if="viewGrid">
      <div class="store-list">
        <div class="store-list-item" v-for="(item, index) in stores" :key="index">
          <div class="store-inner">
            <router-link :to="`/${$store.getters.locale.locale}/store/details/${item._id}`">
              <store-item :item="item"/>
            </router-link>
          </div>
        </div>
      </div>
      <div class="grid-footer-container" v-if="hasMore && !loadingStores">
        <button v-show="loading" class="loading">{{t('loading')}}</button>
        <button v-show="!loading" @click="this.loadMore">{{t('load_more')}}</button>
      </div>
      <div class="loading-placeholder" v-else>
      </div>
    </div>
    <div class="store-list-view" v-else>
      <div class="alphabet-header">
        <div class="alphabet-header-wrapper">
          <div class="alphabet-item" v-for="(value, index) in $store.getters.alphabet[$store.getters.locale.locale]"
               :key="index">
            <span @click="filterList(value)"
                  :class="{active: grouped[value] !== undefined && grouped[value].length !== 0 }">{{value}}
            </span>
          </div>
        </div>
      </div>
      <div class="alph-list-header">
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
            <div class="alphabetic-container-inner" v-if="grouped[letter]">
              <div class="alphabet-wrapper">
                <div class="alphabet-item">
                  {{letter}}
                </div>
                <div class="items-container">
                  <div class="item" v-for="(value, index) in grouped[letter]" :key="index">
                    <div v-if="value !== undefined" class="item-wrapper">
                      <div class="item-column name">
                        <span class="name-inner">
                          {{value.name[$store.getters.locale.locale]}}
                        </span>
                      </div>
                      <div class="item-column tags">
                        <span class="tag"><span class="tag-inner">Women</span></span>
                        <span class="tag"><span class="tag-inner">Men</span></span>
                        <span class="tag"><span class="tag-inner">Men</span></span>
                        <span class="tag"><span class="tag-inner">Men</span></span>
                        <span class="tag"><span class="tag-inner">Men</span></span>
                        <span class="tag"><span class="tag-inner">Children</span></span>
                      </div>
                      <div class="item-column services">
                        <span class="service" v-for="(service, serviceIndex) in services" :key="serviceIndex">{{service.name[$store.getters.locale.locale]}}</span>
                      </div>
                      <div class="item-column activities">
                        <span class="activity" v-for="(activity, activityIndex) in activities" :key="activityIndex">{{activity.name[$store.getters.locale.locale]}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="loading-container">-->
      <!--<div class="loading-big"></div>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
import StoreItem from './StoreItem'
import StoreFilters from './StoreFilters'
import LoadingBig from '../../partials/LoadingBig'

export default {
  name: 'store-list-grid',
  components: {
    LoadingBig,
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
  mounted: function () {
    if (!this.$store.getters.stores.length) this.fetchItems()
  },
  props: {
    categories: {
      type: Object
    },
    grouped: {
      type: Object
    },
    stores: {
      type: Array
    },
    services: {
      type: Array,
      default: () => {
        return [
          {
            name: {
              en: 'Tax free',
              ka: 'Tax Free'
            },
            value: 'Tax Free'
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
          return [
            {
              name: {
                en: 'Sales',
                ka: 'sales'
              },
              value: 'Sales'
            }, {
              name: {
                en: 'Offers',
                ka: 'Offers'
              },
              value: 'Offers'
            }, {
              name: {
                en: 'New collections',
                ka: 'New collections'
              },
              value: 'New collections'
            }, {
              name: {
                en: 'Events',
                ka: 'Events'
              },
              value: 'Events'
            }, {
              name: {
                en: 'News',
                ka: 'News'
              },
              value: 'News'
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
      viewGrid: true,
      listStoresShowing: this.grouped,
      currentLetter: null
    }
  },
  methods: {
    changeView: function (view) {
      this.viewGrid = view
    },
    filterList: function (value) {
      this.currentLetter = value
    },
    fetchItems: function () {
      this.loadingStores = true
      this.sendRequest('INITIAL_LOAD')
    },
    loadMore: function () {
      this.page++
      this.loading = true
      this.sendRequest('LOAD_MORE')
    },
    sendRequest: function (setter) {
      this.$store.dispatch('fetchItems', {
        model: 'stores',
        api: this.$store.state.apiUrls.storesAPI(this.page, this.offset),
        setter: setter
      }).then((response) => {
        if (response.data.data.length < this.offset) this.hasMore = false
        this.loading = false
        this.loadingStores = false
      }).catch((error) => {
        console.error(error)
      })
    }
  },
  computed: {
    currentAlphabetFilter: function () {
      const alph = this.$store.getters.alphabet[ this.$store.getters.locale.locale ]
      if (this.currentLetter === null) {
        return alph.slice(0, 4)
      } else {
        return [ this.currentLetter ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.store-list {
  display: flex;
  flex-wrap: wrap;
  margin: 2px -10px;
  @media screen and (max-width: 1110px){
    margin: 2px 0;
  }
  @media screen and (max-width: 760px){
    margin: 2px 26px;
  }
  .store-list-item {
    position: relative;
    margin: 10px;
    border: 1px solid rgba(220, 220, 220, 0.5);
    width: calc(25% - 20px);
    box-sizing: border-box;
    padding-top: calc(25% - 20px);
    @media screen and (max-width: 760px){
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
      }
      .items-container {
        width: 83%;
        position: relative;
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
