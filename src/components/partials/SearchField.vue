<template>
  <div class="search-container">
    <form action="" class="search-form">
      <div class="field-set">
        <label class="search-icon-container"><img src="../../assets/images/icons/search.svg" height="14.1px"
                                                  width="13.6px"></label>
        <input type="text" class="search-field" placeholder='"Type here"'>
        <label class="search-icon-container close-icon" @click="closeSearch"><img src="../../assets/images/icons/close.svg" height="12.4px"
                                                  width="12.4px"></label>
      </div>
      <div class="instruction-block">
        <span>{{t('please_enter_to_search')}}</span>
      </div>
    </form>
    <div class="search-result-container">
      <block-header-standard title="FEATURED SEARCH"/>
    </div>
  </div>
</template>

<script>

import BlockHeaderStandard from './BlockHeader'

export default {
  name: 'search-container',
  components: { BlockHeaderStandard },
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      search: ''
    }
  },
  methods: {
    emitClick: function () {
      this.$emit('click')
    },
    closeSearch: function () {
      this.search = ''
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  .search-form {
    margin: 78px 140px;
  }
  .field-set {
    border: none;
    padding: 0;
    border-bottom: solid 1px #3a3838;
    display: flex;
    .search-icon-container {
      font-size: 1.4rem;
      margin: auto 0;
    }
    input {
      border: none;
      width: 100%;
      padding: 6px 20.4px;
      font-size: 1.4rem;
      font-family: 'Muli', 'BPG Arial', 'sans-serif';
      &:focus {
        outline: none;
      }
    }
  }
  .instruction-block {
    font-size: 1.156rem;
    font-weight: 300;
    margin-top: 9px;
    font-family: 'Muli Light', 'BPG Nino Mtavruli', 'sans-serif';
    font-style: normal;
    font-stretch: normal;
    line-height: 1.27;
    letter-spacing: normal;
    color: #000000;
  }
  .close-icon{
    cursor: pointer;
  }
}
</style>
