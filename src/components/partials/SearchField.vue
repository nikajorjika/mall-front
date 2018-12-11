<template>
  <div class="search-container">
    <form action="" class="search-form" @submit.prevent="searchForData">
      <div class="field-set">
        <label class="search-icon-container"><img src="../../assets/images/icons/search.svg" height="14.1px"
                                                  width="13.6px"></label>
        <input type="text" class="search-field" v-model="search" placeholder='"Type here"'>
        <label class="search-icon-container close-icon" @click="closeSearch"><img
          src="../../assets/images/icons/close.svg" height="12.4px"
          width="12.4px"></label>
      </div>
      <div class="instruction-block">
        <span>{{t('please_enter_to_search')}}</span>
      </div>
    </form>
    <div class="search-result-container">
      <div class="before-search" v-if="showFeaturedSearch">
        <block-header-standard title="FEATURED SEARCH"/>
        <div class="search-ads-block">
          <div class="ads-single">

          </div>
        </div>
        <div class="search-ads-block">
          <div class="ads-news">
            <div class="ads-news-item" v-for="(news, index) in $store.getters.homeAds" :key="index">
              <event-item :event="news"/>
            </div>
          </div>
        </div>
      </div>
      <div class="search-in-progress" v-else>
        <div class="searching-title">
          <h4>{{searchingText}}</h4>
        </div>
        <div class="search-results">
          <div class="tabs">
            <div class="tab">
              <h6 :class="{active : !filter}" @click="filter = null">{{t('all')}} <span>({{total}})</span></h6>
            </div>
            <div class="tab" v-for="(tab, index) in $store.getters.searchResult" :key="index">
              <h6 :class="{active : filter === index.toLowerCase()}" @click="filter = index.toLowerCase()">
                {{t(index.toLowerCase())}} <span>({{tab.length}})</span></h6>
            </div>
          </div>
          <div class="search-content">
            <div class="wrapper-block" v-for="(tab, index) in $store.getters.searchResult" :key="index"
                 v-if="filter === index.toLowerCase() || !filter">
              <div class="block-title-container">
                <h3>{{t(index.toLowerCase())}}</h3>
              </div>
              <div class="minus-margin">
                <div class="block-results" :class="{stores: index === 'entities'}">
                  <div class="search-store-item-container" v-for="(item, index2) in tab"
                       :key="index2">
                    <div class="search-item-wrapper" v-if="item">
                      <router-link :to="`/${locale}/store/${createSlug(item.name['en'])}/${item._id}`" v-if="index === 'entities'">
                        <store-item :item="item"/>
                      </router-link>
                      <router-link :to="`/${locale}/whats-new/single/${createSlug(item.name['en'])}/${item._id}`" v-else>
                        <event-item :event="item"/>
                      </router-link>
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

import BlockHeaderStandard from './BlockHeader'
import StoreItem from '../page-components/stores/StoreItem'
import EventItem from './EventView'

export default {
  name: 'search-container',
  components: { EventItem, StoreItem, BlockHeaderStandard },
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  mounted: function () {
    this.$store.dispatch('getAdsItems').catch((error) => {
      console.error(error)
    })
  },
  data: () => {
    return {
      search: '',
      searching: false,
      showFeaturedSearch: true,
      filter: null
    }
  },
  methods: {
    emitClick: function () {
      this.$emit('click')
    },
    closeSearch: function () {
      this.search = ''
      this.$emit('close')
    },
    searchForData: function () {
      this.searching = true
      this.showFeaturedSearch = false
      this.$store.dispatch('search', this.search)
        .then(response => {
          this.searching = false
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  computed: {
    searchingText: function () {
      const message = {
        en: `Showing search results for "${this.search}"`,
        ka: `ვაჩვენებთ ძებნის შედეგს სიტყვისთის "${this.search}"`
      }
      return message[ this.locale ]
    },
    total: function () {
      let result = 0
      let i = null
      for (i in this.$store.getters.searchResult) {
        if (this.$store.getters.searchResult.hasOwnProperty(i)) {
          result += this.$store.getters.searchResult[ i ].length
        }
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  .search-form {
    margin: 78px 140px;
  }
  .search-results {
    border-top: 1px solid #dcdcdc;
    padding: 25px 0;
    .tabs {
      width: 95%;
      max-width: 1640px;
      margin: 0 auto 40px auto;
      display: flex;
      .tab {
        margin-right: 34px;
        cursor: pointer;
        h6 {
          font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
          text-transform: uppercase;
          color: #848484;
          font-size: 1.4rem;
          margin: 0;
          position: relative;
          &:after {
            position: absolute;
            content: '';
            bottom: -4px;
            left: 0;
            height: 1px;
            background: #000;
            width: 100%;
            transition: transform .3s;
            transform: scale(0);
          }
          &.active {
            &:after {
              transform: scale(1);
            }
          }
        }
      }
    }
    .search-content {
      max-width: 1640px;
      margin: 0 auto;
      .wrapper-block {
        margin-bottom: 116px;
        .block-title-container {
          display: flex;
          transform: translateY(50%);
          &:after {
            content: '';
            height: 1px;
            width: 100%;
            background: rgba(132, 132, 132, 0.50);
            margin: auto 0;
          }
          h3 {
            margin: 0 46px 0 0;
            font-size: 1.8rem;
            line-height: 1.28;
            color: #000000;
            white-space: nowrap;
          }
        }
      }
      .minus-margin {
        margin: 0 -27px;
      }
      .block-results {
        &:not(.stores) {
          display: grid;
          grid-template-columns: 33.33% 33.33% 33.33%;
          .search-store-item-container {
            .search-item-wrapper {
              padding: 28px;
              border-right: 1px solid #dcdcdc;
              border-bottom: 1px solid #dcdcdc;
              height: 100%;
            }
            &:nth-child(3n + 3) {
              .search-item-wrapper {
                border-right: none;
                padding-right: 0;
                margin-right: 28px;
              }
            }
            &:nth-child(3n + 1) {
              .search-item-wrapper {
                padding-left: 0;
                margin-left: 28px;
              }
            }
          }
        }
        &.stores {
          display: grid;
          grid-template-columns: 20% 20% 20% 20% 20%;
          padding: 36px 17px 0;
          .search-store-item-container {
            width: calc(100% - 20px);
            position: relative;
            padding-top: 100%;
            margin: 10px;
            border: 1px solid #dcdcdc;
            .search-item-wrapper {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
            }
          }
        }
      }
    }
  }

  .search-result-container {
    .before-search {
      .search-ads-block {
        border-top: 1px solid #dcdcdc;
        .ads-news {
          display: grid;
          grid-template-columns: 33.33% 33.33% 33.33%;
          width: 95%;
          max-width: 1694px;
          margin: 0 auto 77px;
          .ads-news-item {
            padding: 27px;
            border-right: 1px solid #dcdcdc;
          }
        }
      }
    }
  }

  .search-in-progress {
    .searching-title {
      h4 {
        font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
        font-size: 4rem;
        line-height: 1.25;
        text-align: center;
        text-transform: capitalize;
      }
    }
  }

  .field-set {
    border: none;
    padding: 0;
    border-bottom: solid 1px #3a3838;
    display: flex;

    .search-icon-container {
      font-size: 1.4rem;
      margin: auto 0;
    }

    input {
      border: none;
      width: 100%;
      padding: 6px 20.4px;
      font-size: 1.4rem;
      font-family: 'Muli', 'BPG Arial', 'sans-serif';

      &:focus {
        outline: none;
      }
    }
  }

  .instruction-block {
    font-size: 1.156rem;
    font-weight: 300;
    margin-top: 9px;
    font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
    font-style: normal;
    font-stretch: normal;
    line-height: 1.27;
    letter-spacing: normal;
    color: #000000;
  }

  .close-icon {
    cursor: pointer;
  }

}
</style>
