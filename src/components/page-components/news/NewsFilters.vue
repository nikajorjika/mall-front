<template>
  <div class="news-filters">
    <div class="filter-item">
      <custom-select :items="categories.categories.data" :placeholder="categories.categories.placeholder"
                     name="category" :value="$route.params.cat" @change="updateElement"/>
    </div>
    <div class="filter-item">
      <custom-select :items="categories.brands.data" name="brand" :placeholder="categories.brands.placeholder"
                     @change="updateElement"/>
    </div>
    <div class="filter-item">
      <custom-select :items="categories.floors.data" name="floor" :placeholder="categories.floors.placeholder"
                     @change="updateElement"/>
    </div>
    <div class="filter-item">
      <custom-select :items="categories.sort.data" name="sort" :placeholder="categories.sort.placeholder"
                     @change="updateElement"/>
    </div>
  </div>
</template>
<script>
import CustomSelect from '../../partials/Select'

export default {
  name: 'news-filters',
  components: {
    CustomSelect
  },
  props: {
    categories: {
      type: Object
    }
  },
  data: () => {
    return {
      filters: {
        brand: null,
        sort: null,
        floor: null,
        category: null
      }
    }
  },
  methods: {
    updateElement: function (selected) {
      if (selected.selected !== null) {
        this.filters[ selected.name ] = selected.selected.value
      }
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
    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }
  }
}
</style>
