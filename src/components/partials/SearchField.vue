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
      </div>
      <div class="search-in-progress" v-else>
        <div class="searching-title">
          <h4>{{searchingText}}</h4>
        </div>
        <div class="search-results">
          <div class="tabs">
            <div class="tab" v-for="(tab, index) in $store.getters.searchResult" :key="index">
              <h6>{{t(index.toLowerCase())}} <span>({{tab.length}})</span></h6>
            </div>
          </div>
          <div class="search-content">
            <div class="wrapper-block" v-for="(tab, index) in $store.getters.searchResult" :key="index">
              <div class="block-title-container">
                <h3>{{t(index.toLowerCase())}}</h3>
              </div>
              <div class="block-results">
                <div class="search-store-item-container" v-if="index === 'entities'" v-for="(item, index2) in tab" :key="index2">
                  <store-item :item="item"/>
                </div>
                <div class="search-event-item-container" v-else  v-for="(item, index2) in tab" :key="index2">
                  <event-item :item="item"/>
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
  data: () => {
    return {
      search: 'gift',
      searching: false,
      showFeaturedSearch: true
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
          console.log('search retrieved')
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
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  .search-form {
    margin: 78px 140px;
  }
  .search-results{
    border-top: 1px solid #dcdcdc;
    padding: 25px 0;
    .tabs{
      width: 95%;
      max-width: 1640px;
      margin:0 auto 40px auto;
      display: flex;
      .tab{
        margin-right: 34px;
        cursor: pointer;
        h6{
          font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
          text-transform: uppercase;
          color: #848484;
          font-size: 1.4rem;
          margin:0;
        }
      }
    }
    .search-content{
      max-width: 1640px;
      margin:0 auto;
      .wrapper-block{
        .block-title-container{
          display: flex;
          &:after{
            content: '';
            height: 1px;
            width:100%;
            background: rgba(132, 132, 132, 0.50);
            margin: auto 0;
          }
          h3{
            margin: 0 46px 0 0;
            font-size: 1.8rem;
            line-height: 1.28;
            color: #000000;
            white-space: nowrap;
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
