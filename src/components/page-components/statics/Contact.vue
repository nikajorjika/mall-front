<template>
  <div class="contact-page-container">
    <section class="section-item">
      <div class="container parts-wrapper">
        <div class="part part-left">
          <about-title :title="t('Contact')"/>
          <about-content :content="content"/>
          <div class="contact-page-list">
            <div class="list-item">
              <h3>CUSTOMER SERVICE</h3>
              <p>For customer service and all general or specific issues</p>
              <div>+995 322 505 556</div>
              <a href="mailto:info@tbilisimall.com">info@tbilisimall.com</a>
              <div class="address">16 km Agmashenebeli Alley, <br>0131 Tbilisi, Georgia</div>
              <div class="stick-bottom">10:00-22:00 Daily</div>
            </div>
            <div class="list-item">
              <h3>CUSTOMER SERVICE</h3>
              <p>For customer service and all general or specific issues</p>
              <div>+995 322 505 556</div>
              <a href="mailto:info@tbilisimall.com">info@tbilisimall.com</a>
              <div class="address">16 km Agmashenebeli Alley, <br>0131 Tbilisi, Georgia</div>
              <div class="stick-bottom">10:00-22:00 Daily</div>
            </div>
            <div class="list-item">
              <h3>CUSTOMER SERVICE</h3>
              <p>For customer service and all general or specific issues</p>
              <div>+995 322 505 556</div>
              <a href="mailto:info@tbilisimall.com">info@tbilisimall.com</a>
              <div class="address">16 km Agmashenebeli Alley, <br>0131 Tbilisi, Georgia</div>
              <div class="stick-bottom">10:00-22:00 Daily</div>
            </div>
            <div class="list-item">
              <h3>CUSTOMER SERVICE</h3>
              <p>For customer service and all general or specific issues</p>
              <div>+995 322 505 556</div>
              <a href="mailto:info@tbilisimall.com">info@tbilisimall.com</a>
              <div class="address">16 km Agmashenebeli Alley, <br>0131 Tbilisi, Georgia</div>
              <div class="stick-bottom">10:00-22:00 Daily</div>
            </div>
          </div>
        </div>
        <div class="part part-right">
          <div class="contact-form-container">
            <contact-form/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AboutTitle from '../about-us/AboutPageTitle'
import AboutContent from '../about-us/AboutPageContent'
import ContactForm from '../../partials/ContactForm'

export default {
  components: { ContactForm, AboutContent, AboutTitle },
  data: function () {
    return {
      content: 'We highly appreciate and welcome your feedback on Tbilisi Mall and we would like to hear about your experiences while being here with us.<br>You can reach us via the contact information given below or leave your comments, concerns and any type of enquiry using our online Message Box.  We will review carefully all the information received and get back to you as quickly as we can.'
    }
  }
}
</script>

<style lang="scss">
.contact-page-container {
  .section-item {
    .parts-wrapper {
      display: flex;
    }
  }

  .part {
    border-right: 1px solid #dcdcdc;
    &.part-left {
      padding-right: 154px;
      flex: 1;
    }
    &.part-right {
      width: 398px;
      padding: 0 30px;
    }
  }

  .contact-page-list {
    display: flex;
    flex-wrap: wrap;

    .list-item {
      width: calc(50% - 8px);
      background-color: #f9f9f9;
      margin: 13px 16px 37px 0;
      padding: 16px 19px;
      display: flex;
      flex-direction: column;

      &:nth-child(2n + 2) {
        margin-right: 0;
      }

      h3 {
        font-family: 'Muli Bold', 'BPG Nino Mtavruli', 'sans-serif';
        font-size: 1.8rem;
        font-weight: bold;
        line-height: 1.28;
        text-transform: uppercase;
        margin: 0;
      }

      p {
        margin: 0 0 13px;
        opacity: 1;
      }

      > div {
        font-size: 1.6rem;
        font-family: 'Muli', 'BPG Arial', 'sans-serif';
        line-height: 1.88;
        margin: 0;
      }

      a {
        font-size: 1.6rem;
        font-family: 'Muli', 'BPG Arial', 'sans-serif';
        line-height: 1.88;
        color: #2d83e6;
      }
    }
  }
}
</style>


