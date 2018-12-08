<template>
  <div class="media-filter-container">
    <div class="filters">
      <div class="filter-toggle" @click="activeFilters = !activeFilters" v-if="$mq === 'mobile'">
        <h2>{{t('filter')}}</h2> <span class="filter-icon" :class="{open: activeFilters}"><font-awesome-icon
        icon="caret-down"/></span>
      </div>
      <ul v-if="activeFilters || $mq !== 'mobile'">
        <li v-for="(item, index) in filters" :key="index" @click="activeFilter = item.value">
          <span :class="{active: activeFilter === item.value}">{{item.name[$store.getters.locale.locale]}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'media-filters',
  data: () => {
    return {
      filters: [
        {
          value: 'all',
          name: {
            en: 'all',
            ka: 'ყველა'
          }
        }, {
          value: 'TV/Video',
          name: {
            en: 'TV / VIDEO',
            ka: 'ტელ / ვიდეო'
          }
        }, {
          value: 'Online/Print',
          name: {
            en: 'PRINT / ONLINE',
            ka: 'პრინტი / ონლაინი'
          }
        }, {
          value: 'Advertisement',
          name: {
            en: 'COMMERCIAL',
            ka: 'რეკლამა'
          }
        }
      ],
      activeFilter: 'all',
      activeFilters: false
    }
  }
}
</script>
<style lang="scss">
.media-filter-container {
  .filters {
    background: #f9f9f9;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    @media screen and (max-width: 760px) {
      .filter-toggle {
        padding: 22px;
        border-bottom: 1px solid #dcdcdc;
        display: flex;
        justify-content: center;
        h2 {
          margin: 0;
          text-transform: uppercase;
        }
        .filter-icon {
          margin: auto 5px;
          &.open {
            transform: rotate(180deg);
          }
        }
      }
    }
    ul {
      display: flex;
      padding: 21px 0;
      width: 95%;
      margin: 0 auto;
      max-width: 1090px;
      justify-content: space-between;
      @media screen and (max-width: 760px) {
        flex-direction: column;
      }
      li {
        padding: 16px 0;
        text-align: center;
        width: 260px;
        background-color: #ffffff;
        border: 1px solid rgba(220, 220, 220, 0.68);
        @media screen and (max-width: 1650px) {
          padding: 12px 9px;
          width: calc(25% - 16px);
          margin: 0 8px;
        }
        @media screen and (max-width: 760px) {
          padding: 12px 9px;
          width: calc(100% - 16px);
          margin: 8px 8px;
        }
        span {
          opacity: 0.6;
          font-family: 'Muli SemiBold', 'BPG Nino Mtavruli', 'sans-serif';
          font-size: 1.3rem;
          font-weight: 600;
          line-height: 1.23;
          text-align: center;
          color: #000000;
          text-transform: uppercase;
          &.active {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
