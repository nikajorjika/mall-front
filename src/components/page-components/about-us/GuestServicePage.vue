<template>
  <div class="page-our-service">
    <about-title :title="this.title"/>
    <about-content :content="this.content"/>
    <service-list :list="serviceList"/>
  </div>
</template>
<script>
import AboutContent from './AboutPageContent'
import AboutTitle from './AboutPageTitle'
import ServiceList from './ServiceList'

export default {
  name: 'page-our-service',
  components: {
    ServiceList,
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
}
</style>
