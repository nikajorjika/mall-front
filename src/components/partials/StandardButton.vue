<template>
  <div class="standard-button" @click="clicked">
    <span class="icon" v-if="icon" v-html="icon"></span>
    <span class="text">{{text}}</span>
  </div>
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
      default: ''
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
    height: 45.7px;
    width: 259.6px;
    border: solid 1px #dcdcdc;
    cursor: pointer;
    background-color: #ffffff;
    &:hover{
      background: #f5f5f5;
    }
    .icon{
      border-right: solid 1px #dcdcdc;
      height: 100%;
      width:46px;
      display: flex;
      *{
        margin: auto;
      }
    }
    .text{
      font-family: 'Muli SemiBold', 'BPG Nino Mtavruli','sans-serif';
      margin: auto;
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.25;
      text-align: center;
      text-transform: uppercase;
    }
  }
</style>
