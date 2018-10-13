<template>
  <footer id="footer">
    <section class="subscribe">
      <newsletter-subscribe/>
    </section>
    <div class="footer-content">
      <div class="menus-wrapper">
        <div class="menu-item" v-for="item in this.menus" v-bind:key="item.title">
          <footer-menu-item :title="item.title" :items="item"/>
        </div>
        <div class="menu-item">
          <div class="footer-info-block">

          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p class="copyright-content">Copyright © <span class="strong">Tbilisi Mall</span> - All rights reserved</p>
    </div>
  </footer>
</template>

<script>
import NewsletterSubscribe from '../partials/NewsLetters'
import FooterMenuItem from '../parts/FooterMenuItem'

export default {
  name: 'footer-component',
  components: {
    FooterMenuItem,
    NewsletterSubscribe
  },
  data: function () {
    return {
      menus: this.$store.getters.footerMenus,
    }
  }
}
</script>
<style lang="scss">
#footer {
  .footer-content {
    padding: 84px 0;
    background-color: #f9f9f9;
    border-top: 1px solid #dcdcdc;
    border-bottom: solid 0.5px #eeeeee;
  }
  .menus-wrapper{
    display: flex;
    width: 85%;
    margin: 0 auto;
    .menu-item{
      width: 25%;
    }
  }
  .copyright {
    .copyright-content {
      padding: 10.5px;
      text-align: center;
      font-family: 'Muli Light', 'sans-serif';
      font-size: 1.1rem;
      line-height: 1.27;
      color: #848484;
      margin: 0;
      .strong {
        color: #000;
      }
    }
  }
}
</style>
