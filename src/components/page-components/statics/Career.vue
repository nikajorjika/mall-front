<template>
  <div class="about-company-container container">
    <about-title :title="title"/>
    <about-content :content="content"/>
    <service-list :list="list"/>
    <about-content :content="jobOffers"/>
  </div>
</template>
<script>
import AboutTitle from '../about-us/AboutPageTitle'
import AboutContent from '../about-us/AboutPageContent'
import ServiceList from '../about-us/ServiceList'

export default {
  name: 'about-company',
  components: { ServiceList, AboutContent, AboutTitle },
  data: () => {
    return {
      title: 'Career',
      content: 'If you are interested in work opportunities, here you can find current job openings at Tbilisi Mall (Rakeen Uptown Development). To find out positions available at individual stores, please contact the store directly for further information.\n \n WHY TO WORK WITH US?',
      list: [ {
        title: 'LEADING COMPANY IN GEORGIA',
        content: 'CORPORATE CULTURE PLEASANT ENVIRONMENT'
      }, {
        title: 'LEADING COMPANY IN GEORGIA',
        content: 'CORPORATE CULTURE PLEASANT ENVIRONMENT'
      }, {
        title: 'LEADING COMPANY IN GEORGIA',
        content: 'CORPORATE CULTURE PLEASANT ENVIRONMENT'
      } ],
      jobOffers: 'Below you will find the current job openings at Tbilisi Mall. Please keep checking back for future career opportunity updates.'
    }
  }
}
</script>
