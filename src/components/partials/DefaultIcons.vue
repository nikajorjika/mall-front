<template>
  <div class="icon-container">
    <span v-if="this.icon === 'bars'" class="icon-bars" @click="emitClick">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <span class="icon-close-container" v-else-if="this.icon === 'close'" @click="emitClick" >
      <span class="icon-close">
      </span>
    </span>
  </div>
</template>

<script>

export default {
  name: 'default-icon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      iconPath: process.env.BASE_URL
    }
  },
  methods: {
    emitClick: function () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-container {
  .icon-bars {
    display: flex;
    flex-direction: column;
    span {
      width: 25.8px;
      height: 1.7px;
      background-color: #000000;
      margin: 2px 0;
    }
  }
  .icon-close-container{
    width:14.3px;
    height: 14.3px;
    display: inline-block;
    .icon-close {
      position: absolute;
      width: 14.3px;
      height: 14.3px;
      display: inline-block;
      cursor: pointer;
      &:after,
      &:before {
        content: ' ';
        position: absolute;
        left: 6px;
        height: 18px;
        width: 2px;
        background-color: #000;
      }
      &:after {
        transform: rotate(45deg);
      }
      &:before {
        transform: rotate(-45deg);
      }
    }
  }
  .standard-icon{
    .icon-inner{
      height: auto;
    }
  }
}
</style>
