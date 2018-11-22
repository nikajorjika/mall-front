<template>
  <div class="loading-big-container">
    <div class="loading-wrapper">
      <div class="loading-big"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading-big'
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
}
</style>
