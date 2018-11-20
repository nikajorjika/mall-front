<template>
  <div id="home">
    <section class="slider-section">
      <div class="slider">
        <!--<event-home/>-->
        <home-slider/>
      </div>
      <div class="section-bottom">
        <home-ads/>
      </div>
    </section>
    <section class="promotions">
      <three-event-greed :title="t('promotions')" route="whats-new/promotions" :events="$store.getters.events" @loadMore="this.loadMoreButton"/>
    </section>
    <section class="events">
      <three-event-greed :title="t('events')" route="whats-new/events" :events="$store.getters.events" @loadMore="this.loadMoreButton"/>
    </section>
    <section class="news">
      <three-event-greed :title="t('news')" route="whats-new/news" :events="$store.getters.events" @loadMore="this.loadMoreButton"/>
    </section>
    <section class="stores">
      <standard-carousel :items="$store.getters.stores" :perPage="4" :title="'STORES'"/>
    </section>
    <section class="how-to-get">
      <how-to-get/>
    </section>
    <section class="socials">
      <social-list-big/>
    </section>
  </div>
</template>

<script>

import EventHome from '../components/partials/EventHome'
import BlockHeaderStandard from '../components/partials/BlockHeader'
import EventItem from '../components/partials/EventView'
import ThreeEventGreed from '../components/partials/ThreeEventGreed'
import StandardCarousel from '../components/partials/StandardCarousel'
import HowToGet from '../components/partials/HowToGet'
import SocialListBig from '../components/partials/SocialsListBig'
import HomeSlider from '../components/page-components/home/HomeSlider'
import HomeAds from '../components/page-components/home/Ads'

export default {
  name: 'home',
  data: function () {
    return {
    }
  },
  components: {
    HomeAds,
    HomeSlider,
    SocialListBig,
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
  .stores{
    max-width: 1640px;
    margin: 0 auto;
    padding-bottom: 130px;
    border-bottom: solid 1px #dcdcdc;
  }
}
</style>
