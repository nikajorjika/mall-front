<template>
  <div class="socials-item">
    <a :href="item.link" target="_blank">
      <div class="social-item-container" :class="viewStyle">
        <div class="social-logo-container">
          <div class="icon-wrapper">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: getIconName(item.name) }"/>
          </div>
        </div>
        <div class="social-text-container">
          {{item.name}}
        </div>
      </div>
    </a>
  </div>
</template>
<script>

export default {
  name: 'social-item',
  props: {
    item: {
      type: Object,
      default: function () {
        return {
          name: '',
          url: ''
        }
      }
    },
    viewStyle: {
      type: String,
      default: 'big'
    }
  }
}
</script>

<style lang="scss" scoped>
.socials-item {
  .social-item-container {
    border: solid 1px #dcdcdc;
    background-color: #ffffff;
    display: flex;
    transition: all 0.1s;
    position: relative;
    &:before{
      height:0;
      width: 100%;
      bottom:0;
      background: #000;
      content: '';
      position: absolute;
      z-index: 0;
      transition: height 0.3s;
    }
    &:hover {
      &:before{
        height:100%;
      }
      .social-logo-container{
        color: #ffffff;
      }
      .social-text-container{
        color: #ffffff;
      }
    }
    .social-logo-container {
      font-size: 2rem;
      border-right: solid 1px #dcdcdc;
      display: flex;
      width: 62px;
      z-index: 2;
      @media screen and (max-width: 1650px) {
        font-size: 1.3rem;
      }
      .icon-wrapper {
        margin: auto;
      }
    }
    .social-text-container {
      font-family: "Muli SemiBold", 'BPG Nino Mtavruli', 'sans-serif';
      font-size: 1.7rem;
      font-weight: 600;
      line-height: 1.24;
      color: #000;
      text-transform: uppercase;
      padding: 20px 0;
      width: 100%;
      text-align: center;
      z-index: 2;
      @media screen and (max-width: 1650px) {
        font-size: .8rem;
        padding: 15px 0;
      }
    }
  }
}
</style>
