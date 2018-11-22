<template>
  <div class="about-page container">
    <section class="about-us about-outer-container">
      <div class="page-block-container">
        <router-view></router-view>
      </div>
      <div class="menu-container">
        <about-us-menu :items="this.aboutMenu" active=''/>
      </div>
      <div class="horizontal-line gray"></div>
      <div class="our-team" >
        <staff-carousel :staff="this.staff"/>
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
  }
}
</script>
<style lang="scss">
  .about-page{
    .about-outer-container{
      display: flex;
      flex-wrap: wrap;
      margin: 97px 0 57.5px;
      .page-block-container{
        width: calc(100% - 260px);
        padding-right: 138px;
        box-sizing: border-box;
        p{
          color: #000;
          opacity: 1;
        }
      }
      .menu-container{
        width: 260px;
      }
      .our-team{
        width:100%;
      }
    }
  }
</style>
