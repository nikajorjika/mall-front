<template>
    <div class="store-filters">
        <div class="filter-item">
            <custom-select :items="$store.getters.categories.subcategories" nameField="translates" valueField="_id"
                           :placeholder="categories.categories.placeholder" @change="invokeFilters" name="category"/>
        </div>
        <div class="filter-item search-item">
            <filter-search @searched="invokeFilters"/>
        </div>
        <div class="filter-item">
            <custom-select :items="categories.floors.data"
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
      filterData: {
        category: [],
        search: '',
        floors: [],
        sort: ''
      }
    }
  },
  methods: {
    toggleView: function (view) {
      this.grid = view
      this.$emit('changeView', view)
    },
    invokeFilters: function (data) {
      console.log(data)
      if (Array.isArray(this.filterData[data.name])) {
        if (data.value) {
          this.filterData[data.name].push(data.value)
        }else{
          this.filterData[data.name] = []
        }
      } else {
        if (data.value) {
          this.filterData[data.name] = data.value
        }else{
          this.filterData[data.name] = ''
        }
      }
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
