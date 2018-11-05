<template>
  <div class="three-event-greed">
    <block-header-standard :title="this.title"/>
    <div class="flex-col-3">
      <div class="event-item-outer" v-for="event in this.events" v-bind:key="event._id">
        <event-item :event="event"/>
      </div>
    </div>
    <div class="greed-footer-container">
      <button @click="this.loadMore">{{t('more')}}</button>
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
  props: {
    title: {
      type: String,
      default: ''
    },
    events: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    loadMore: function () {
      this.$emit('loadMore')
    }
  }
}
</script>

<style lang="scss" scoped>
.three-event-greed{
  .flex-col-3 {
    display: flex;
    flex-wrap: wrap;
    &:after{
      content: '';
      border-bottom: solid 1px #dcdcdc;
      width: calc(100% - 60px);
      margin: 0 auto;
    }
    .event-item-outer{
      width: 33.33%;
      box-sizing: border-box;
      border-right: solid 1px #dcdcdc;
      padding: 0 30px;
      &:nth-child(3n + 3){
        border-right: none;
        margin-right: 0;
      }
      &:nth-child(3n + 1){
        margin-left: 0;
      }
    }
  }
  .greed-footer-container{
    text-align: center;
    border-bottom: solid 1px #dcdcdc;
    button{
      background: transparent;
      text-transform: uppercase;
      border:none;
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
