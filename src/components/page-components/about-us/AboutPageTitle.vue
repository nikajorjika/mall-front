<template>
  <div class="about-title-container">
    <h1 class="title"> {{this.title}}</h1>
  </div>
</template>
<script>

export default {
  name: 'about-title',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.about-title-container {
  .title {
    font-size: 4rem;
    line-height: 1.25;
    color: #000;
    margin: 10px 0 63px;
    text-transform: uppercase;
    @media screen and (max-width: 1456px) {
      margin: 8px 0 45px;
    }
    @media screen and (max-width: 550px) {
      padding: 0 36px;
      font-size: 2.5rem;
    }
  }
}
</style>
