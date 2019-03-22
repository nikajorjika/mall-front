<template>
  <div class="loading-big-container">
    <div class="loading-wrapper">
      <div class="loading-big" v-if="loadingTheme === 1"></div>
      <div class="spinner"  v-if="loadingTheme === 2">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading-big',
  props: {
    loadingTheme: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.loading-big-container{
  display: flex;
  min-height: 240px;
  .loading-wrapper{
    margin: auto;
    .loading-big{
      border: 10px solid #f3f3f3;
      border-top: 10px solid #bdbdbd;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      animation: rotate 2s linear infinite;
    }
  }
  .spinner {
    width: 40px;
    height: 40px;

    position: relative;
    margin: 100px auto;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #333;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }
}
</style>
