<template>
  <div class="about-content-container">
    <p v-html="customContent"></p>
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
  },
  computed: {
    customContent: function () {
      return this.content !== '' ? `<p>${this.content.replace(/\n/g, '<br />')}</p>` : ''
    }
  }
}
</script>
<style lang="scss">
.about-content-container {
  @media screen and (max-width: 550px) {
    padding: 0 36px;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.25;
    color: #000;
    @media screen and (max-width: 550px) {
      font-size: 1.3rem;
    }
  }
}
</style>
