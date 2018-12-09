<template>
  <div class="media-print-component">
    <div class="top-block-container">
      <div class="middle-block">
        <h2>{{title}}</h2>
        <p v-html="description"></p>
      </div>
      <div class="author">
        <span class="gray">16. 09. 18</span> Kviris Palitra
      </div>
    </div>
    <div class="button-container">
      <a :href="item.linkUrl" target="_blank">
        <span>{{t('full_page')}}</span>
        <img src="../../../assets/images/icons/left-arrow-subscribe.svg" alt="See full page">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'media-print',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  computed: {
    title: function () {
      return this.item ? this.item[ `name${this.locale.toUpperCase()}` ] : ''
    },
    description: function () {
      let shortDescription = this.item[ `description${this.locale.toUpperCase()}` ]
      if (shortDescription.length > 120) {
        shortDescription = shortDescription.substr(0, 120) + '...'
      }
      return shortDescription
    }
  }
}
</script>
<style lang="scss">
.media-print-component{
  height: 100%;
  padding: 22px 30px 33px;
  .top-block-container{
    height: 417px;
    display: flex;
    flex-direction: column;
    .middle-block{
      margin: auto;
      width: 90%;
      max-width: 452.2px;
      h2{
        font-size: 2.4rem;
        line-height: 1.25;
        text-align: center;
        @media screen and (max-width: 1600px){
          font-size: 1.6rem;
        }
      }
      p{
        font-size: 1.7rem;
        line-height: 1.25;
        text-align: center;
        @media screen and (max-width: 1600px){
          font-size: 1.3rem;
        }
      }
    }
    .author{
      font-size: 1.2rem;
      font-family: "Muli Bold", 'BPG Arial', 'sans-serif';
      display: flex;
      font-weight: 500;
      line-height: 1.25;
      justify-content: center;
      width: 90%;
      max-width: 452.2px;
      border-bottom: 1px solid #dcdcdc;
      margin: 0 auto;
      padding-bottom:20px;
      .gray{
        color: #848484;
        font-family: "Muli", 'BPG Arial', 'sans-serif';
        margin-right: 8px;
      }
    }
  }
  .button-container{
    height: calc(100% - 417px);
    @media screen and (max-width: 760px){
      padding: 50px 0 32px;
    }
    a{
      display: flex;
      height: 100%;
      justify-content: center;
      span{
        font-size: 2.4rem;
        line-height: 1.25;
        text-transform: uppercase;
        margin: auto 28px auto 0;
      }
      img{
        width: 22px;
        height: 15.5px;
        margin:auto 0;
      }
    }
  }
}
</style>
