<template>
  <div class="map-with-directions">
    <div class="map-container">
      <div class="select-outer">
        <div class="selects-container">
          <custom-select :placeholder="'PUBLIC TRANSPORT ROUTES'" :items="[{name:'select 1', value: '1'},{name:'select 2', value: '2'},{name:'select 3', value: '3'},{name:'select 4', value: '4'}]"/>
        </div>
        <div class="selects-container">
          <custom-select :placeholder="'PUBLIC TRANSPORT ROUTES'" :items="[{name:'select 1', value: '1'},{name:'select 2', value: '2'},{name:'select 3', value: '3'},{name:'select 4', value: '4'}]"/>
        </div>
      </div>
      <div class="map-wrapper">
        <!--<GmapMap-->
          <!--:center="{lat:41, lng:41}"-->
          <!--:zoom="7"-->
          <!--map-type-id="terrain"-->
          <!--style="width: 100%; height: 807px"-->
          <!--v-bind:options="{ styles: this.googleMap.mapStyle }"-->
        <!--&gt;-->
        <!--</GmapMap>-->
      </div>
    </div>
  </div>
</template>
<script>

import CustomSelect from '../parts/Select'
export default {
  name: 'map-with-directions',
  components: {
    CustomSelect
  },
  data: function () {
    return {
      googleMap: this.$store.getters.googleMap
    }
  }
}
</script>

<style lang="scss" scoped>
.map-with-directions{
  .map-container{
    padding-bottom: 94px;
    background-color: #f9f9f9;
    border-top: solid 1px #dcdcdc;
    border-bottom: solid 1px #dcdcdc;
    .map-wrapper{
      border-top: solid 1px #dcdcdc;
      border-bottom: solid 1px #dcdcdc;
    }
    .select-outer{
      display: flex;
      height: 94px;
      justify-content: center;
      .selects-container{
        width: 281.2px;
        margin: auto 25px;
      }
    }
  }
}
</style>
