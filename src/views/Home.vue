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
      <three-event-greed :title="t('promotions')" route="promotions" apiModel="frontPromotions"
                         :api="$store.state.apiUrls.promotionsApi" :events="$store.getters.frontPromotions"/>
    </section>
    <section class="events">
      <three-event-greed :title="t('newCollections')" route="new-collections" apiModel="frontNewCollections"
                         :api="$store.state.apiUrls.newCollectionsApi" :events="$store.getters.frontNewCollections"/>
    </section>
    <section class="events">
      <three-event-greed :title="t('events')" route="events" apiModel="frontEvents"
                         :api="$store.state.apiUrls.eventsAPI" :events="$store.getters.frontEvents"/>
    </section>
    <section class="news">
      <three-event-greed :title="t('news')" route="news" apiModel="frontNews"
                         :api="$store.state.apiUrls.newsApi" :events="$store.getters.frontNews"/>
    </section>
    <section class="stores" data-aos="fade-up">
      <standard-carousel v-if="storeCarousel" :items="$store.getters.stores" :perPage="4" :title="'STORES'"/>
    </section>
    <section class="how-to-get" data-aos="fade-up">
      <how-to-get/>
    </section>
    <section class="socials" data-aos="fade-up">
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
import PromoPointer from '../components/partials/PromoPointer'

export default {
  name: 'home',
  data: function () {
    return {
      storeCarousel: true
    }
  },
  beforeMount: function () {
    if (!this.$store.getters.stores.length) this.sendRequest('INITIAL_LOAD')
    this.$store.commit('SET_LOADING_STATE', { model: 'page', value: true })
  },
  components: {
    PromoPointer,
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
    sendRequest: function (setter) {
      this.$store.dispatch('fetchItems', {
        model: 'stores',
        api: this.$store.state.apiUrls.storesAPI(0, 12),
        setter: setter
      }).then((response) => {
        this.storeCarousel = true
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#home {
  .stores {
    max-width: 1640px;
    margin: 0 auto;
    padding-bottom: 130px;
    border-bottom: solid 1px #dcdcdc;
    @media screen and (max-width: 1366px){
      padding-bottom: 80px;
    }
    @media screen and (max-width: 760px){
      padding-bottom: 40px;
    }
  }
}
</style>
