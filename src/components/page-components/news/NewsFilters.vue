<template>
  <div class="news-filters">
    <div class="filter-item">
      <custom-select :items="categories.categories.data" :placeholder="categories.categories.placeholder"
                     name="category" :value="category" @change="updateElement"/>
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
  mounted: function () {
    if (!this.$store.getters.categories.length) {
      this.$store.dispatch('getCategories').then((response) => {
        console.log(response)
      })
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
  },
  computed: {
    category: function () {
      return this.$route.params.cat
    }
  }
}
</script>
<style lang="scss" scoped>
.news-filters {
  display: flex;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
  .filter-item {
    width: 260px;
    margin-right: 15.8px;
    @media screen and (max-width: 1650px) {
      width: 185px;
    }
    @media screen and (max-width: 760px) {
      width: 100%;
      margin-bottom: 16px;
      height: 34px;
    }
    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }
  }
}
</style>
