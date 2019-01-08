<template>
  <div class="block-header-standard">
    <h2>{{this.title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'block-header-standard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.block-header-standard{
  h2{
    margin:47px 0;
    text-align: center;
    font-size: 4rem;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: 1.25;
    letter-spacing: normal;
    color: #000000;
    @media screen and (max-width: 1650px) {
      font-size: 2.8rem;
      margin:51px 0;
    }
  }
}
</style>
