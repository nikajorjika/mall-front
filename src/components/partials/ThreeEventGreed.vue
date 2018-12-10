<template>
  <div class="three-event-greed">
    <block-header-standard :title="this.title"/>
    <div class="flex-col-3">
      <div class="event-item-outer" v-for="(event, index) in this.events" :key="index">
        <router-link :to="`/${locale}/whats-new/single/${createSlug(event.name['en'])}/${event._id}`">
          <event-item :event="event"/>
        </router-link>
      </div>
    </div>
    <div class="greed-footer-container" v-show="hasMore">
      <router-link :to="`/${locale}/whats-new/${route}`">
        <button>{{t('more')}}</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import EventItem from './EventView'
import BlockHeaderStandard from './BlockHeader'

export default {
  name: 'three-event-greed',
  components: {
    BlockHeaderStandard,
    EventItem
  },
  mounted: function () {
    if (!this.events.length) this.fetchData()
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    api: {
      type: Function,
      default: function () {
        return {}
      }
    },
    apiModel: {
      type: String,
      default: 'events'
    },
    route: {
      type: String,
      default: '/'
    },
    events: {
      type: Array
    }
  },
  data: () => {
    return {
      page: 0,
      offset: 3,
      hasMore: true,
      loading: false
    }
  },
  methods: {
    fetchData: function () {
      this.sendRequest('INITIAL_LOAD')
    },
    loadMore: function () {
      this.page++
      this.loading = true
      this.sendRequest('LOAD_MORE')
    },
    sendRequest: function (setter) {
      this.$store.dispatch('fetchItems', {
        model: this.apiModel,
        api: this.api(this.page, this.offset),
        setter: setter
      }).then((response) => {
        if (response.data.data.length < this.offset) this.hasMore = false
        this.loading = false
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.three-event-greed {
  .flex-col-3 {
    display: flex;
    flex-wrap: wrap;
    &:after {
      content: '';
      border-bottom: solid 1px #dcdcdc;
      width: calc(100% - 60px);
      margin: 0 auto;
      @media screen and (max-width: 760px) {
        width: 100%;
      }
    }
    .event-item-outer {
      width: 33.33%;
      box-sizing: border-box;
      border-right: solid 1px #dcdcdc;
      padding: 0 30px;
      @media screen and (max-width: 1366px) {
        padding: 0 21px;
      }
      @media screen and (max-width: 760px) {
        width: 100%;
        border-bottom: 1px solid #dcdcdc;
        margin-bottom:18px;
        border-right: none;
        &:last-child{
          margin-bottom: 0;
          border-bottom: none;
        }
      }
      &:nth-child(3n + 3) {
        border-right: none;
        margin-right: 0;
      }
      &:nth-child(3n + 1) {
        margin-left: 0;
      }
    }
  }
  .greed-footer-container {
    text-align: center;
    border-bottom: solid 1px #dcdcdc;
    @media screen and (max-width: 760px) {
      background: #f9f9f9;
    }
    button {
      background: transparent;
      text-transform: uppercase;
      border: none;
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 1.25;
      text-align: center;
      padding: 30px 30px;
      cursor: pointer;
      outline: none;
      @media screen and (max-width: 1650px) {
        font-size: 1.6rem;
        padding: 20px 30px;
      }
    }
  }
}
</style>
