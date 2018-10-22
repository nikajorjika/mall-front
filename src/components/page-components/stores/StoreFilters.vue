<template>
  <div class="store-filters">
    <div class="filter-item">
      <custom-select :items="this.categories" :placeholder="this.categoriesPlaceholder"/>
    </div>
    <div class="filter-item">
      <custom-select :items="this.categories" :placeholder="this.categoriesPlaceholder"/>
    </div>
    <div class="filter-item">
      <custom-select :items="this.categories" :placeholder="this.categoriesPlaceholder"/>
    </div>
    <div class="filter-item">
      <custom-select :items="this.categories" :placeholder="this.categoriesPlaceholder"/>
    </div>
    <div class="grid-toggle">
      <div class="show-grid toggle-item active">
        <div class="icon-wrapper">
          <font-awesome-icon icon="th-large"/>
        </div>
      </div>
      <div class="show-list  toggle-item">
        <div class="icon-wrapper">
          <font-awesome-icon icon="list"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomSelect from '../../parts/Select'

export default {
  name: 'store-filters',
  components: {
    CustomSelect
  },
  data: function () {
    return {
      categoriesPlaceholder: {
        ge: 'კატეგორიები',
        en: 'CATEGORY'
      },
      categories: [
        {
          name: {
            en: 'category 1',
            ge: 'კატეგორია 1'
          },
          value: 'cat-1'
        },
        {
          name: {
            en: 'category 1',
            ge: 'კატეგორია 1'
          },
          value: 'cat-1'
        }
      ]
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
    &:first-child{
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
