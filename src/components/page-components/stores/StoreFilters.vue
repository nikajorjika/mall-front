<template>
  <div class="store-filters">
    <div class="filter-item">
      <custom-select :items="categories.categories.data"
                     :placeholder="categories.categories.placeholder"/>
    </div>
    <div class="filter-item">
      <filter-search/>
    </div>
    <div class="filter-item">
      <custom-select :items="categories.floors.data"
                     :placeholder="categories.floors.placeholder"/>
    </div>
    <div class="filter-item">
      <custom-select :items="categories.sort.data"
                     :placeholder="categories.sort.placeholder"/>
    </div>
    <div class="grid-toggle">
      <div class="show-grid toggle-item" :class="grid ? 'active' : ''" @click="toggleView(true)">
        <div class="icon-wrapper">
          <font-awesome-icon icon="th-large"/>
        </div>
      </div>
      <div class="show-list toggle-item" :class="!grid ? 'active' : ''" @click="toggleView(false)">
        <div class="icon-wrapper">
          <font-awesome-icon icon="list"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomSelect from '../../parts/Select'
import FilterSearch from '../../parts/FilterSearch'

export default {
  name: 'store-filters',
  components: {
    FilterSearch,
    CustomSelect
  },
  props: {
    categories: {
      type: Object
    }
  },
  data: function () {
    return {
      categoriesPlaceholder: {
        ka: 'კატეგორიები',
        en: 'CATEGORY'
      },
      grid: true
    }
  },
  methods: {
    toggleView: function (view) {
      this.grid = view
      this.$emit('changeView', view)
    }
  }
}
</script>
<style lang="scss" scoped>
.store-filters {
  display: flex;
  .filter-item {
    width: 260px;
    margin-right: 15.8px;
    &:first-child {
      margin-left: auto;
    }
  }
  .grid-toggle {
    display: flex;
    .toggle-item {
      height: 49px;
      width: 49px;
      margin-left: 15.7px;
      background-color: #fff;
      font-size: 21px;
      display: flex;
      border: solid 0.5px #dcdcdc;
      box-sizing: border-box;
      opacity: 0.3;
      cursor: pointer;
      &.active {
        opacity: 1;
      }
      &.show-grid {
        margin-left: 0;
      }
      .icon-wrapper {
        margin: auto;
      }
    }
  }
}
</style>
