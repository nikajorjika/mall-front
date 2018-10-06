<template>
  <div class="search-container">
    <form action="">
      <div class="field-set">
        <label class="search-icon-container"><font-awesome-icon icon="search"/></label>
        <input type="text" class="search-field" placeholder='"Type here"'>
      </div>
      <div class="instruction-block">
        <span>PRESS ENTER TO SEARCH</span>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'search-container',
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
  .search-container{
    .field-set{
      border: none;
      padding:0;
      border-bottom: solid 1px #3a3838;
      display: flex;
      .search-icon-container{
        font-size: 1.4rem;
        margin: auto 0;
      }
      input{
        border: none;
        width: 100%;
        padding:.6rem 2.04rem;
        font-size: 1.4rem;
        font-family: 'Muli', 'sans-serif';
        &:focus{
          outline: none;
        }
      }
    }
    .instruction-block{
      font-size: 1.156rem;
      font-weight: 300;
      margin-top: .9rem;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.27;
      letter-spacing: normal;
      color: #000000;
    }
  }
</style>
