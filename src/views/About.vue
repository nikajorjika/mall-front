<template>
  <div class="about-page container">
    <section class="about-us about-outer-container" :class="$route.name">
      <div class="page-block-container" :class="{loading: $store.getters.loading.page}">
        <div class="breadcrumb">
          <ul>
            <li v-for="(item, index) in breadcrumb" :key="index">
              <router-link :to="item.url">{{t(item.index)}}</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
      <div class="menu-container">
        <about-us-menu :items="$store.state.pageData.aboutUs.aboutUsMenu" active=''/>
      </div>
      <div class="our-team" v-if="$route.name === 'about'">
        <div class="horizontal-line gray"></div>
        <staff-carousel :title="t('our_team')"/>
      </div>
    </section>
  </div>
</template>
<script>
import PageBlock from '../components/page-components/about-us/PageBlock'
import AboutUsMenu from '../components/page-components/about-us/AboutPageMenu'
import StaffCarousel from '../components/page-components/about-us/OurTeam'
import AboutTitle from '../components/page-components/about-us/AboutPageTitle'
import PageOurService from '../components/page-components/about-us/GuestServicePage'

export default {
  name: 'about-us',
  components: {
    PageOurService,
    AboutTitle,
    StaffCarousel,
    AboutUsMenu,
    PageBlock
  },
  props: {
    page: {
      type: String,
      default: ''
    }
  },
  computed: {
    breadcrumb: function () {
      let breadcrumb = [ {
        index: 'home',
        url: `/${this.locale}`
      }, {
        index: 'about_mall',
        url: `/${this.locale}/about-us`
      } ]
      if (this.$route.name !== 'about') {
        const obj = {
          index: this.$route.name,
          url: this.$route.path
        }
        breadcrumb.push(obj)
      }
      return breadcrumb
    }
  }
}
</script>
<style lang="scss">
.page-block {
  padding-right: 138px;
  @media screen and (max-width: 1456px) {
    padding-right: 40px;
  }
  @media screen and (max-width: 550px) {
    padding-right: 0;
  }
}

.about-page {
  .breadcrumb {
    @media screen and (max-width: 550px) {
      padding: 0 36px;
    }
    ul {
      display: flex;
      li {
        color: #848484;
        font-size: 1.1rem;
        font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
        text-transform: capitalize;
        &:not(:last-child):after {
          content: '>';
          font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
          font-size: 1.1rem;
          display: inline-block;
          margin: 0 3px;
        }
      }
    }
  }
  .about-outer-container {
    display: flex;
    flex-wrap: wrap;
    margin: 47px 0 57.5px;
    @media screen and (max-width: 760px) {
      flex-direction: column;
      margin-top: 0;
    }
    .page-block-container {
      flex: 1;
      box-sizing: border-box;
      position: relative;
      @media screen and (max-width: 760px) {
        order: 2;
      }
      @media screen and (max-width: 1456px) {
        padding-left: 12px;
      }
      @media screen and (max-width: 760px) {
        width: 100%;
      }
      @media screen and (max-width: 550px) {
        padding-left: 0;
      }
      p {
        color: #000;
        opacity: 1;
      }
    }
    &.mallMap{
      .menu-container{
        display: none;
      }
    }
    .menu-container {
      width: 260px;
      @media screen and (max-width: 760px) {
        order: 1;
        width: 100%;
      }
    }
    .our-team {
      width: 100%;
      @media screen and (max-width: 760px) {
        order: 3;
      }
    }
  }
}
</style>
