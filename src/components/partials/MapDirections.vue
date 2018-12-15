<template>
  <div class="map-with-directions">
    <div class="map-container">
      <div class="select-outer">
        <div class="selects-container">
          <custom-select :placeholder="optionOne.placeholder" :items="optionOne.options" @change="selectPath"/>
        </div>
        <div class="selects-container">
          <custom-select :placeholder="categoriesPlaceholder" :items="categories"/>
        </div>
      </div>
      <div class="map-wrapper">
        <GmapMap
          :center="position"
          :zoom="12"
          ref="mapRef"
          class="main-google-map"
          :options="{ styles: this.googleMap.mapStyle }"
        >
          <GmapMarker
            :position="position"
            :clickable="false"
            :draggable="false"
          />
          <!--<gmap-polyline :path="busPath" :options="{ strokeColor:'#008000'}">-->
          <!--</gmap-polyline>-->
          <gmap-polyline v-if="pathToDraw" :path.sync="pathToDraw" :options="{ strokeColor:'#008000'}">
          </gmap-polyline>
        </GmapMap>
      </div>
    </div>
  </div>
</template>
<script>

import CustomSelect from './Select'
import nes from '../../assets/minibus/path'
import bus from '../../assets/minibus/bus'
import { gmapApi } from 'vue2-google-maps'

export default {
  name: 'map-with-directions',
  components: {
    CustomSelect
  },
  mounted: function () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      if (!map.getProjection()) {
        window.setTimeout(() => {
          let pathArrayObject = {}
          for (let item in nes) {
            if (nes.hasOwnProperty(item)) {
              pathArrayObject[ item ] = []
              nes[ item ].forEach((xy) => {
                pathArrayObject[ item ].push(map.getProjection().fromPointToLatLng(new this.google.maps.Point(xy.x, xy.y)))
              })
            }
          }
          this.paths = pathArrayObject
        }, 500)
      }
    })
  },
  data: function () {
    return {
      googleMap: this.$store.getters.googleMap,
      categoriesPlaceholder: {
        ka: 'კატეგორიები',
        en: 'CATEGORY'
      },
      categories: [
        {
          name: {
            en: 'category 1',
            ka: 'კატეგორია 1'
          },
          value: 'cat-1'
        },
        {
          name: {
            en: 'category 1',
            ka: 'კატეგორია 1'
          },
          value: 'cat-1'
        }
      ],
      paths: {},
      busPath: bus,
      position: { lat: 41.8168541, lng: 44.7725513 },
      optionOne: {
        placeholder: {
          ka: 'საზოგადეობრივი ტრანსპორტის ხაზები',
          en: 'Public transportation routes'
        },
        options: [
          {
            value: 'fortyFour',
            name: {
              ka: 'სამარშუტო ტაქსი 44',
              en: 'Mini bus 44'
            }
          },
          {
            value: 'fiftyOne',
            name: {
              ka: 'სამარშუტო ტაქსი 51',
              en: 'Mini bus 51'
            }
          },
          {
            value: 'eightySeven',
            name: {
              ka: 'სამარშუტო ტაქსი 87',
              en: 'Mini bus 87'
            }
          },
          {
            value: 'hSixteen',
            name: {
              ka: 'სამარშუტო ტაქსი 116',
              en: 'Mini bus 116'
            }
          },
          {
            value: 'hSeventeen',
            name: {
              ka: 'სამარშუტო ტაქსი 117',
              en: 'Mini bus 117'
            }
          },
          {
            value: 'hTwentyOneBus',
            name: {
              ka: 'ავტობუსი 121',
              en: 'Bus 121'
            }
          }
        ]
      },
      selectedPath: ''
    }
  },
  computed: {
    google: gmapApi,
    pathToDraw: function () {
      if (this.paths.hasOwnProperty(this.selectedPath)) {
        return this.paths[ this.selectedPath ]
      }
    }
  },
  methods: {
    selectPath: function (selected) {
      this.selectedPath = selected.value
    }
  }
}
</script>

<style lang="scss" scoped>
.map-with-directions {
  .map-container {
    padding-bottom: 94px;
    background-color: #f9f9f9;
    border-top: solid 1px #dcdcdc;
    border-bottom: solid 1px #dcdcdc;
    .map-wrapper {
      border-top: solid 1px #dcdcdc;
      border-bottom: solid 1px #dcdcdc;
      .main-google-map {
        width: 100%;
        height: 807px;
        @media screen and (max-width: 1655px) {
          height: 574px;
        }
      }
    }
    .select-outer {
      display: flex;
      height: 94px;
      justify-content: center;
      @media screen and (max-width: 1650px) {
        height: 66px;
      }
      @media screen and (max-width: 760px) {
        flex-direction: column;
        height: auto;
      }
      .selects-container {
        width: 281.2px;
        margin: auto 25px;
        @media screen and (max-width: 1650px) {
          width: 200px;
        }
        @media screen and (max-width: 760px) {
          width: calc(100% - 72px);
          margin: 16px auto 0 auto;
          &:last-child {
            margin-bottom: 16px;
          }
        }
      }
    }
  }
}
</style>
