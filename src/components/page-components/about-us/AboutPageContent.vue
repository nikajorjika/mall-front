<template>
  <div class="about-content-container">
    <p v-html="this.content"></p>
  </div>
</template>
<script>

export default {
  name: 'about-content',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.about-content-container {
  p {
    font-family: 'Muli', 'sans-serif';
    font-size: 1.6rem;
    line-height: 1.25;
    color: #000;
  }
}
</style>
