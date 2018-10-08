<template>
  <div id="home">
    <section class="slider-section">
      <div class="slider">
        <event-home/>
      </div>
      <div class="section-bottom">
        <div class="col-2">
          <event-home :type="'mini'"/>
        </div>
        <div class="col-2">
          <event-home :type="'mini'"/>
        </div>
      </div>
    </section>
    <section class="promotions">
      <block-header-standard :title="'PROMOTIONS'"/>
      <div class="flex-col-3">
        <div class="event-item-outer" v-for="event in this.events" v-bind:key="event.id">
          <event-item :event="event"/>
        </div>
      </div>
    </section>
    <block-header-standard :title="'PROMOTIONS'"/>

  </div>
</template>

<script>
// @ is an alias to /src

import EventHome from '../components/partials/EventHome'
import BlockHeaderStandard from '../components/partials/BlockHeader'
import EventItem from '../components/partials/EventView'

export default {
  name: 'home',
  data: function () {
    return {
      events: this.$store.getters.events
    }
  },
  components: {
    EventItem,
    BlockHeaderStandard,
    EventHome
  }
}
</script>
<style lang="scss" scoped>
#home {
  .slider-section {
    .section-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      .col-2 {
        width: calc(50% - 8px);
      }
    }
  }
  .flex-col-3 {
    display: flex;
    flex-wrap: wrap;
    margin: 0 30px;
    .event-item-outer{
      width: 33.33%;
      box-sizing: border-box;
      border-right: solid 1px #dcdcdc;
      border-bottom: solid 1px #dcdcdc;
      &:nth-child(3n + 3){
        border-right: none;
        margin-right: 0;
      }
      &:nth-child(3n + 1){
        margin-left: 0;
      }
    }
  }
}
</style>
