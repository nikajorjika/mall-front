<template>
  <button class="standard-button" @click="clicked" @mouseenter="iconColor = '#fff'" @mouseleave="iconColor = '#000'">
    <span class="animation-background" :style="`background-color: ${customColor}`">
    </span>
    <span class="icon" v-if="icon">
      <simple-svg :filepath="icon" :width="`${iconWidth}px`" :height="`${iconHeight}px`" :fill="iconColor"/>
    </span>
    <span class="text">{{text}}</span>
  </button>
</template>
<script>
export default {
  name: 'button-standard',
  props: {
    icon: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: 'Button'
    },
    customColor: {
      type: String,
      default: '#000'
    },
    iconWidth: {
      type: String,
      default: '7.5'
    },
    iconHeight: {
      type: String,
      default: '15'
    }
  },
  data: () => {
    return {
      iconColor: '#000'
    }
  },
  methods: {
    clicked: function () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss">
  .standard-button{
    display: flex;
    position: relative;
    width: 259.6px;
    border: solid 1px #dcdcdc;
    cursor: pointer;
    background-color: #ffffff;
    padding: 0;
    &:hover{
      .icon,
      .text{
        color: #ffffff;
      }
      .animation-background{
        &:before{
          animation: buttonHover .4s;
          top: 0;
          opacity: 1;
        }
      }
    }
    .animation-background{
      &:before{
        content: '';
        background: inherit;
        position: absolute;
        animation: buttonHoverLeave .4s;
        opacity: 0;
        top: 100%;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    .icon{
      border-right: solid 1px #dcdcdc;
      width:46px;
      height: 45.7px;
      display: flex;
      position: relative;
      z-index: 1;
      *{
        margin: auto;
      }
    }
    .text{
      font-family: 'Muli SemiBold', 'BPG Nino Mtavruli','sans-serif';
      margin: auto;
      font-size: 1.2rem;
      font-weight: 600;
      height: 45.7px;
      line-height: 45.7px;
      text-align: center;
      position: relative;
      z-index: 1;
      text-transform: uppercase;
    }
  }
</style>
