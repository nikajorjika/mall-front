<template>
  <div class="news-filters">
    <div class="filter-item">
      <custom-select :items="$store.state.newsFilters.categories.data" :placeholder="$store.state.newsFilters.categories.placeholder" :value="$route.params.cat"/>
    </div>
    <div class="filter-item">
      <custom-select :items="$store.state.newsFilters.brands.data" :placeholder="$store.state.newsFilters.brands.placeholder"/>
    </div>
    <div class="filter-item">
      <custom-select :items="$store.state.newsFilters.floors.data" :placeholder="$store.state.newsFilters.floors.placeholder"/>
    </div>
    <div class="filter-item">
      <custom-select :items="$store.state.newsFilters.sort.data" :placeholder="$store.state.newsFilters.sort.placeholder"/>
    </div>
  </div>
</template>
<script>
import CustomSelect from '../../parts/Select'

export default {
  name: 'news-filters',
  components: {
    CustomSelect
  }
}
</script>
<style lang="scss" scoped>
.news-filters {
  display: flex;
  .filter-item {
    width: 260px;
    margin-right: 15.8px;
    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }
  }
}
</style>
