<template>
  <div class="socials-item">
    <a :href="this.item.url" target="_blank">
      <div class="social-item-container" :class="this.viewStyle">
        <div class="social-logo-container">
          <div class="icon-wrapper">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: this.item.icon }"/>
          </div>
        </div>
        <div class="social-text-container">
          {{this.item.name}}
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
    &:hover{
      background-color: #eaeaea;
    }
    .social-logo-container {
      font-size: 20px;
      border-right: solid 1px #dcdcdc;
      display: flex;
      width: 62px;
      .icon-wrapper{
        margin: auto;
      }
    }
    .social-text-container {
      font-family: "Muli SemiBold", 'sans-serif';
      font-size: 1.7rem;
      font-weight: 600;
      line-height: 1.24;
      color: #000;
      text-transform: uppercase;
      padding: 20px 0;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
