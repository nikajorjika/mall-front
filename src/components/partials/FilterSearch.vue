<template>
  <div class="filter-search">
    <div class="input-wrapper">
      <input type="text" class="search-input" :placeholder="placeholder[locale]" @input="onChange" v-model="searchText">
      <div class="search-icon">
        <img src="../../assets/images/icons/search.svg" height="12.2px" width="11.8px">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'filter-search',
  props: {
    placeholder: {
      type: Object,
      default: () => {
        return {
          en: 'SEARCH',
          ka: 'ძებნა'
        }
      }
    }
  },
  data: () => {
    return {
      searchText: ''
    }
  },
  methods: {
    onChange: function () {
      this.$emit('searched', {name: 'search', value: this.searchText})
    }
  }
}
</script>

<style lang="scss">
.filter-search {
  height: 100%;
  .input-wrapper{
    height: 100%;
    position: relative;
    input{
      height: 100%;
      width:100%;
      border: solid 0.5px #dcdcdc;
      background-color: #ffffff;
      font-size: 1.3rem;
      padding-left: 13px;
      font-family: 'Muli SemiBold', 'BPG Nino Mtavruli','sans-serif';
      @media screen and (max-width: 1650px){
        font-size: 0.7rem;
        padding-left: 9px;
      }
    }
    .search-icon{
      display: block;
      position: absolute;
      right: 16px;
      top:50%;
      opacity: 0.6;
      transform: translateY(-50%);
      @media screen and (max-width: 1650px){
        img{
          width: 8.4px;
          height: 8.7px;
        }
      }
    }
  }
}
</style>
