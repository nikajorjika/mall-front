<template>
  <div class="about-page container">
    <h1> {{this.page}}</h1>
    <section class="about-us about-outer-container" v-if="this.page === ''">
      <div class="page-block-container">
        <page-block :title="this.aboutTitle" :content="this.aboutContent" :additionals="this.aboutAdditional"/>
      </div>
      <div class="menu-container">
        <about-us-menu :items="this.aboutMenu" active=''/>
      </div>
      <div class="horizontal-line gray"></div>
      <div class="our-team">
        <staff-carousel :staff="this.staff"/>
      </div>
    </section>
    <section class="about-us" v-if="this.page === 'guest-service'">
      <div class="page-block-container">
      </div>
      <div class="menu-container">
        <about-us-menu :items="this.aboutMenu" active=''/>
      </div>
    </section>
  </div>
</template>
<script>
import PageBlock from '../components/page-components/PageBlock'
import AboutUsMenu from '../components/page-components/AboutPageMenu'
import StaffCarousel from '../components/page-components/OurTeam'

export default {
  name: 'about-us',
  components: {
    StaffCarousel,
    AboutUsMenu,
    PageBlock
  },
  data: function () {
    return {
      aboutTitle: this.$store.state.pageData.aboutUs.title,
      aboutContent: this.$store.state.pageData.aboutUs.content,
      aboutMenu: this.$store.state.pageData.aboutUsMenu,
      aboutAdditional: this.$store.state.pageData.aboutUs.additional,
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
      margin: 182.5px 0 57.5px;
      .page-block-container{
        width: calc(100% - 260px);
        padding-right: 138px;
        box-sizing: border-box;
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
