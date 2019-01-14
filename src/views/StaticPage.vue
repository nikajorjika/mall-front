<template>
  <div class="static-page-container" :class="{noMargin: $route.name === 'HowToGet'}">
    <section class="static-container-inner">
      <div class="page-block-container" :class="{loading: $store.getters.loading.page}">
        <div class="breadcrumb container">
          <ul>
            <li v-for="(item, index) in breadcrumb" :key="index">
              <router-link :to="item.url">{{t(item.index)}}</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
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
  name: 'static-page-us',
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
        url: `/${this.locale}`
      } ]
      if (this.$route.name !== 'DefaultStatic') {
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
.static-page-container {
  margin: 47px auto 300px;
  @media screen and (max-width: 760px) {
    margin: 40px auto 60px;
  }
  &.noMargin{
    margin-bottom:0;
  }
  .container{
    max-width: 1364px;
  }
  .about-content-container {
    p {
      color: #000;
      opacity: 1;
      font-size: 1.6rem;
    }
  }
}

.static-page-container {
  .breadcrumb {
    @media screen and (max-width: 1380px){
      padding: 0 15px;
    }
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
}
</style>
