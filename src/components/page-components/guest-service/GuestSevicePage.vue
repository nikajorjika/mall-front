<template>
  <div class="page-our-service">
    <about-title :title="this.title"/>
    <about-content :content="this.content"/>
    <ul class="service-list">
      <li v-for="item in this.serviceList" :key="item.title">
        <span class="icon-container"><img src="../../../assets/images/icons/carret-down.svg" alt=""></span><span
        class="name-wrapper">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import AboutContent from '../about-us/AboutPageContent'
import AboutTitle from '../about-us/AboutPageTitle'

export default {
  name: 'page-our-service',
  components: {
    AboutContent,
    AboutTitle
  },
  props: {
    title: {
      type: String,
      default: 'OUR SERVICE'
    },
    content: {
      type: String,
      default: 'At Tbilisi Mall we offer a provision of full services in line with our main priorities to create a comfortable, pleasant environment and ensure that every visitor’s experience is exceptional. <br> Tbilisi Mall has the following services at your disposal:'
    }
  },
  data: function () {
    return {
      serviceList: [
        {
          title: 'Gift Wrap'
        },
        {
          title: 'Customer Service'
        },
        {
          title: 'Tbilisi Mall Taxi'
        },
        {
          title: 'Medical Service'
        },
        {
          title: 'Car Wash'
        },
        {
          title: 'Free WIFI'
        },
        {
          title: 'Dry Cleaning'
        },
        {
          title: 'Parking Facilities'
        },
        {
          title: 'Lost and Found'
        },
        {
          title: 'Children\'s Wrist Bands'
        },
        {
          title: 'Banking Services & ATM\'s'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.page-our-service {
  .service-list {
    margin-top: 45px;
    li {
      display: flex;
      margin: 20px 0;
      .icon-container {
        height: 3.3px;
        width: 7.3px;
        margin: auto 25.5px auto 0;
        display: inline-block;
        img{
          display: block;
          height: 100%;
          width: 100%;
        }
      }
      .name-wrapper {
        opacity: 0.6;
        font-family: 'Muli','BPG Arial', 'sans-serif';
        font-size: 16px;
        line-height: 1.25;
      }
    }
  }
}
</style>
