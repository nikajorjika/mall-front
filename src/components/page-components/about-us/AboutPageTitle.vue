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
    font-family: 'Muli', 'sans-serif';
    font-size: 4rem;
    line-height: 1.25;
    color: #000;
    margin: 73px 0 63px;
  }
}
</style>
