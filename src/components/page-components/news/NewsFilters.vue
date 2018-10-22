<template>
  <div class="news-filters">
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
  </div>
</template>
<script>
import CustomSelect from '../../parts/Select'

export default {
  name: 'news-filters',
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
.news-filters {
  display: flex;
  .filter-item {
    width: 260px;
    margin-right: 15.8px;
    &:first-child{
      margin-left: auto;
    }
    &:last-child{
      margin-right: auto;
    }
  }
}
</style>
