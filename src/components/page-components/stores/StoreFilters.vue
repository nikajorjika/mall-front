<template>
  <div class="store-filters">
    <div class="filter-item">
      <custom-select :items="filteredCats" nameField="translates" valueField="_id" :value="selectedCat" :multiple="true"
                     value-field="_id"
                     :placeholder="categories.categories.placeholder" @change="invokeFilters" name="category"/>
    </div>
    <div class="filter-item search-item">
      <filter-search @searched="invokeFilters"/>
    </div>
    <div class="filter-item">
      <custom-select :items="categories.floors.data" :multiple="true"
                     :placeholder="categories.floors.placeholder" name="floors" @change="invokeFilters"/>
    </div>
    <div class="filter-item">
      <custom-select :items="sort"
                     :placeholder="categories.sort.placeholder" name="sort" @change="invokeFilters"/>
    </div>
    <div class="grid-toggle" v-if="$mq !== 'mobile'">
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
import CustomSelect from '../../partials/Select'
import FilterSearch from '../../partials/FilterSearch'

export default {
  name: 'store-filters',
  components: {
    FilterSearch,
    CustomSelect
  },
  props: {
    categories: {
      type: Object
    },
    filteredCats: {
      type: Array
    }
  },
  watch: {
    '$route.params.cat': function (val) {
      let result = this.filteredCats.filter(obj => this.createSlug(obj.translates.en) === val)
      this.selectedCat = result.length ? result[ 0 ]._id : ''
    }
  },
  mounted: function () {
    if (!this.$store.getters.categories.length) {
      this.$store.dispatch('getCategories').then((response) => {
        if (this.$route.params.cat) {
          let result = this.filteredCats.filter(obj => this.createSlug(obj.translates.en) === this.$route.params.cat)
          this.selectedCat = result.length ? result[ 0 ]._id : ''
        }
      }).catch((error) => {
        console.error(error)
      })
    }
  },
  data: function () {
    return {
      categoriesPlaceholder: {
        ka: 'კატეგორიები',
        en: 'CATEGORY'
      },
      sort: [
        {
          value: 'asc',
          name: {
            ka: 'ა-ჰ',
            en: 'A-Z'
          }
        },
        {
          value: 'desc',
          name: {
            ka: 'ჰ-ა',
            en: 'Z-A'
          }
        }
      ],
      grid: true,
      selectedCat: '',
      filterData: {
        category: [],
        search: this.$store.getters.storeSearch,
        floors: [],
        sort: ''
      }
    }
  },
  computed: {
    cateValue: function () {
      let result = this.filteredCats.filter(obj => this.createSlug(obj.translates.en) === this.$route.params.cat)
      return result.length ? result[ 0 ] : ''
    }
  },
  methods: {
    toggleView: function (view) {
      this.grid = view
      this.$emit('changeView', view)
    },
    invokeFilters: function (data) {
      console.log(data)
      if (Array.isArray(this.filterData[ data.name ])) {
        if (data.value) {
          this.filterData[ data.name ] = []
          data.selected.forEach((item) => {
            if (this.filterData[ data.name ].indexOf(item[ data.value ]) === -1) {
              this.filterData[ data.name ].push(item[ data.value ])
            }
          })
        } else {
          this.filterData[ data.name ] = []
        }
      } else {
        if (data.value) {
          this.filterData[ data.name ] = data.value
        } else {
          this.filterData[ data.name ] = ''
        }
      }
      console.log(this.filterData)
      this.$emit('filtered', this.filterData)
    }
  }
}
</script>
<style lang="scss" scoped>
.store-filters {
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
    &.search-item {
      @media screen and (max-width: 760px) {
        display: none;
      }
    }
    &:first-child {
      margin-left: auto;
    }
  }
  .grid-toggle {
    display: flex;
    @media screen and (max-width: 1650px) {
      margin-right: auto;
    }
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
      @media screen and (max-width: 1650px) {
        width: 36px;
        height: 36px;
        font-size: 14px;
      }
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
