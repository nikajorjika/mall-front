<template>
  <div class="about-company-container container">
    <about-title :title="title"/>
    <about-content :content="content"/>
  </div>
</template>
<script>
import AboutTitle from "../about-us/AboutPageTitle";
import AboutContent from "../about-us/AboutPageContent";

export default {
  name: 'about-company',
  components: { AboutContent, AboutTitle },
  data: () => {
    return {
      title: 'about company',
      content: 'RAKEEN UPTOWN DEWELOPMENT | TBILISI MALL Since opening in 2012, Tbilisi Mall (TM), the first outstanding retail and leisure development in the Caucasus region, has managed to bring together a significant number of internationally acknowledged brands to attract more than three million visitors per year. Tbilisi Mall nowadays is unrivaled as the most successful family shopping and entertainment center and its further development guarantees its transformation into the most attractive multifunctional destination. Tbilisi Mall is fully operated by Rakeen Uptown Development, which itself is owned by Rakeen Development LLC and IFC (International Finance Corporation). Rakeen Development LLC was established by RAKEEN Development, the largest developer of Ras al- Khaimah Emirate, UAE. RAKEEN’s business portfolio is diversified and spread across the globe. In 2006, the Ruler of Ras al-khaimah, HH Saud Bin al Qasimi, seeing Georgia as the most attractive direction to invest in, developed a plan to carry out projects aimed at establishing new worldwide standards of construction and conceptual development and invested more than 115 mln USD in Tbilisi Mall, thus making Rakeen Development UAE one of the largest investors in Georgia. LLC Rakeen Uptown Development is one of the fastest dynamically growing companies in the region and this is reflected in its financial data. In 2012-13, the total revenue of the company increased by 110 %, gross profit by 59 % and EBIDTA by more than 1000% compared to 2012. These impressive financial figures were achieved by a highly qualified, modern and responsible management team.'
    }
  }
}
</script>