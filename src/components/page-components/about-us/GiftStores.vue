<template>
  <div class="gift-stores">
    <div class="alphabet-header">
      <div class="alphabet-header-wrapper">
        <div class="alphabet-item" v-for="(value, index) in $store.getters.alphabet[locale]"
             :key="index">
            <span @click="filterList(value)"
                  :class="{active: grouped[value.toUpperCase()] !== undefined && grouped[value.toUpperCase()].length !== 0 }">{{value}}
            </span>
        </div>
      </div>
    </div>
    <div class="store-list-container">
      <div class="store-list-wrapper">
        <div class="alphabetic-container" v-for="letter in currentAlphabetFilter" :key="letter">
          <div class="alphabetic-container-inner" v-if="grouped[letter.toUpperCase()]">
            <div class="alphabet-wrapper">
              <div class="alphabet-item">
                {{letter}}
              </div>
              <div class="items-container">
                <div class="item" v-for="(value, index) in grouped[letter.toUpperCase()]" :key="index">
                  <div v-if="value !== undefined" class="item-wrapper">
                    <span class="name">
                      {{value.name[locale]}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gift-stores',
  data: function () {
    return {
      loading: false,
      requestSent: false,
      currentLetter: null,
      model: 'giftStoresList',
      magSetter: 'SET_GIFT_STORES'
    }
  },
  mounted: function () {
    if (!this.$store.getters.giftStoresList.length) {
      this.fetchItems()
    }
  },
  computed: {
    currentAlphabetFilter: function () {
      const alph = this.$store.getters.alphabet[ this.locale ]
      if (this.currentLetter === null) {
        return alph
      } else {
        return [ this.currentLetter ]
      }
    },
    grouped: function () {
      return this.groupByAlphabet(this.$store.getters.giftStoresList)
    }
  },
  methods: {
    fetchItems: function () {
      this.$store.dispatch('fetchItems', {
        api: this.$store.state.apiUrls.giftStores,
        model: this.model,
        setter: this.magSetter
      }).catch((error) => {
        console.error(error)
      })
    },
    filterList: function (value) {
      this.currentLetter = value
    }
  }
}
</script>

<style lang="scss">
.gift-stores {
  @media screen and (max-width: 550px){
    margin: 0 36px;
  }
  .alphabet-header {
    padding-bottom: 8px;
    border-bottom: 1px solid #dcdcdc;
    @media screen and (max-width: 550px){
      display: none;
    }
    .alphabet-header-wrapper {
      display: flex;
      justify-content: space-between;
      .alphabet-item {
        font-size: 14px;
        line-height: 1.29;
        text-transform: uppercase;
        color: #dcdcdc;
        .active {
          color: #000;
          cursor: pointer;
        }
      }
    }
  }
  .alphabetic-container {
    @media screen and (max-width: 550px){
      &:first-child{
        border-top: 1px solid #dcdcdc;
      }
    }
    .alphabetic-container-inner {
      border-bottom: 1px solid #dcdcdc;
      padding: 27px 0 27px 35px;
      @media screen and (max-width: 550px){
        padding: 27px 0 27px 0;
      }
      .alphabet-wrapper {
        display: flex;
        .alphabet-item {
          font-size: 6rem;
          line-height: 1.25;
          text-transform: uppercase;
          width: 275px;
          @media screen and (max-width: 550px){
            width: auto;
            font-size: 3.5rem;
            margin-right: 39px;
          }
        }
        .items-container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .item {
            width: calc(33% - 15px);
            margin: 0 15px 10px 0;
            @media screen and (max-width: 550px){
              width: calc(50% - 15px);
            }
            .item-wrapper {
              font-size: 1.6rem;
              line-height: 1.25;
              font-family: 'Muli', 'BPG Arial', 'sans-serif';
              @media screen and (max-width: 550px){
                font-size: 1.3rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
