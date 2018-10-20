<template>
  <div class="store-list-grid">
    <div class="store-filters-outer">
      <div class="container">
        <store-filters />
      </div>
    </div>
    <div class="container">
      <div class="store-list">
        <div class="store-list-item" v-for="item in $store.getters.stores" :key="item.id">
          <div class="store-inner">
            <router-link to="#">
              <store-item :item="item"/>
            </router-link>
          </div>
        </div>
      </div>
      <div class="greed-footer-container">
        <button @click="this.loadMore">MORE</button>
      </div>
    </div>
  </div>
</template>
<script>
import StoreItem from './StoreItem'
import StoreFilters from './StoreFilters'

export default {
  name: 'store-list-grid',
  beforeMount: function () {
    this.$store.commit('SET_STORES', 1)
  },
  components: {
    StoreFilters,
    StoreItem
  },
  methods: {
    loadMore: function () {
      this.$store.commit('LOAD_MORE', {
        model: 'stores', page: 1, offset: 12
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.store-list {
  display: flex;
  flex-wrap: wrap;
  margin: 2px -10px;
  .store-list-item {
    position: relative;
    margin: 10px;
    border: 0.5px solid #dcdcdc;
    width: calc(25% - 20px);
    box-sizing: border-box;
    padding-top: calc(25% - 20px);
    .store-inner {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
}
.store-filters-outer{
  background: #f9f9f9;
  padding: 22.5px;
  border-top: solid 1px #dcdcdc;
  border-bottom: solid 1px #dcdcdc;
}
.greed-footer-container {
  text-align: center;
  border-top: solid 1px #dcdcdc;
  button {
    background: transparent;
    border: none;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 1.25;
    text-align: center;
    padding: 30px 30px;
    cursor: pointer;
    outline: none;
  }
}
</style>
