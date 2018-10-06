<template>
  <div class="icon-container">
    <span v-if="this.icon === 'bars'" class="icon-bars" @click="emitClick">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <span class="icon-close-container" v-if="this.icon === 'close'" @click="emitClick" >
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
      width: 2.58rem;
      height: 0.2rem;
      background-color: #000000;
      margin: 0.24rem 0;
    }
  }
  .icon-close-container{
    width:1.43rem;
    height: 1.43rem;
    display: inline-block;
    .icon-close {
      position: absolute;
      width: 1.43rem;
      height: 1.43rem;
      display: inline-block;
      cursor: pointer;
      &:after,
      &:before {
        content: ' ';
        position: absolute;
        left: 0.6rem;
        height: 1.8rem;
        width: 0.2rem;
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
}
</style>
