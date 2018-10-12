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
      <three-event-greed :title="'PROMOTIONS'" :events="this.events" @loadMore="this.loadMoreButton"/>
    </section>
    <section class="events">
      <three-event-greed :title="'EVENTS'" :events="this.events" @loadMore="this.loadMoreButton"/>
    </section>
    <section class="news">
      <three-event-greed :title="'NEWS'" :events="this.events" @loadMore="this.loadMoreButton"/>
    </section>
    <section class="stores">
      <standard-carousel :items="this.stores" :perPage="4" :title="'STORES'"/>
    </section>
    <section class="how-to-get">
      <how-to-get/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import EventHome from '../components/partials/EventHome'
import BlockHeaderStandard from '../components/partials/BlockHeader'
import EventItem from '../components/partials/EventView'
import ThreeEventGreed from '../components/partials/ThreeEventGreed'
import StandardCarousel from '../components/partials/StandardCarousel'
import HowToGet from '../components/partials/HowToGet'

export default {
  name: 'home',
  data: function () {
    return {
      events: this.$store.getters.events,
      stores: this.$store.getters.stores
    }
  },
  components: {
    HowToGet,
    StandardCarousel,
    ThreeEventGreed,
    EventItem,
    BlockHeaderStandard,
    EventHome
  },
  methods: {
    loadMoreButton: function () {
      console.log('load more')
    }
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
  .stores{
    max-width: 1640px;
    margin: 0 auto;
    padding-bottom: 130px;
    border-bottom: solid 1px #dcdcdc;
  }
}
</style>
