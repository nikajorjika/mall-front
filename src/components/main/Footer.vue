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
          <footer-menu-item :title="this.hours.title" :items="hours"/>
          <footer-menu-item v-for="(item, index) in this.contactInfo" :key="index" :title="item.title" :items="item" class="mini"/>
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
      hours: {
        title: 'WORKING HOURS:',
        list: [{
          name: 'Everyday: from - 10:00 to 22:00',
          url: '#'
        }]
      },
      contactInfo: [{
        title: 'ADDRESS:',
        list: [{
          name: '16 km Agmashenebeli Alley, \n 0131 Tbilisi, Georgia',
          url: '#'
        }]
      }, {
        title: '',
        list: [{
          name: 'info@tbilisimall.com',
          url: '#'
        }, {
          name: '+995 322 505 556',
          url: '#'
        }]
      }]
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
  .menus-wrapper {
    display: flex;
    width: 85%;
    margin: 0 auto;
    .menu-item {
      width: 25%;
    }
  }
  .copyright {
    .copyright-content {
      padding: 10.5px;
      text-align: center;
      font-family: 'Muli Light','BPG Arial', 'sans-serif';
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
