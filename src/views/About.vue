<template>
  <div class="about-page container">
    <section class="about-us about-outer-container">
      <div class="page-block-container">
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
        <about-us-menu :items="this.aboutMenu" active=''/>
      </div>
      <div class="our-team" v-if="$route.name === 'about'">
        <div class="horizontal-line gray"></div>
        <staff-carousel :title="t('our_team')" :staff="this.staff"/>
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
  data: function () {
    return {
      aboutMenu: this.$store.state.pageData.aboutUsMenu,
      staff: this.$store.state.pageData.aboutUs.staff
    }
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
        url: `/${this.$store.getters.locale.locale}`
      }, {
        index: 'about_mall',
        url: `/${this.$store.getters.locale.locale}/about-us`
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
.about-page {
  .breadcrumb{
    ul{
      display: flex;
      li{
        color: #848484;
        font-size: 1.1rem;
        font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
        text-transform: capitalize;
        &:not(:last-child):after{
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
    margin: 97px 0 57.5px;
    .page-block-container {
      width: calc(100% - 260px);
      padding-right: 138px;
      box-sizing: border-box;
      p {
        color: #000;
        opacity: 1;
      }
    }
    .menu-container {
      width: 260px;
    }
    .our-team {
      width: 100%;
    }
  }
}
</style>
