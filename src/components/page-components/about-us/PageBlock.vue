<template>
  <div class="page-block">
    <about-title :title="this.$store.state.pageData.aboutUs.title"/>
    <about-content :content="this.$store.state.pageData.aboutUs.content"/>
    <div class="additional-info">
      <div class="additional-info-item" v-for="additional in this.$store.state.pageData.aboutUs.additional" :key="additional.title">
        <h4>{{additional.title}}</h4>
        <p v-html="additional.text"></p>
      </div>
    </div>
  </div>
</template>
<script>
import AboutContent from './AboutPageContent'
import AboutTitle from './AboutPageTitle'

export default {
  name: 'page-block',
  components: {
    AboutContent,
    AboutTitle
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    additionals: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-block {
  .additional-info {
    margin-top: 85px;
    margin-bottom: 74.5px;
    display: flex;
    .additional-info-item {
      width: 376px;
      margin-right: 12px;
      h4 {
        font-size: 2.4rem;
        margin: 21px 0;
      }
      p {
        .color-grey {
          color: #848484;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.page-block {
  .additional-info {
    .additional-info-item {
      p {
        .color-grey {
          color: #848484;
        }
      }
    }
  }
}
</style>
