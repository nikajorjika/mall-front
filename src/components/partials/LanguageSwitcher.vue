<template>
  <div class="language-switcher">
    <div class="lang-wrapper" @click="this.toggleShow">
      <router-link :to="nextRoute" class="text-center">
        {{displayLanguage.name}}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'language-switcher',
  data: function () {
    return {
      show: false,
      languages: {
        en: 'ka',
        ka: 'en'
      },
      currentLanguage: this.$store.getters.locale
    }
  },
  methods: {
    toggleShow: function () {
      this.currentLanguage = this.$store.getters.locale
      this.$validator.localize(this.currentLanguage.locale)
    }
  },
  computed: {
    nextRoute: function () {
      let params = this.$route.params
      params.locale = this.languages[ this.currentLanguage.locale ]
      return {
        name: this.$route.name,
        params: params
      }
    },
    displayLanguage: function () {
      return this.$store.state.languages.filter((item) => {
        if (item.locale === this.languages[ this.currentLanguage.locale ]) {
          return true
        }
      })[0]
    }
  },
  mounted: function () {
  }
}
</script>
<style lang="scss">
.language-switcher {
  position: relative;
  .locale-changer {
    position: absolute;
    right: 0;
    background: #fff;
    z-index: 999;
    ul {
      li {
        .lang-wrapper {
          padding: 35.5px 29px;
          min-width: 85px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          text-align: center;
          cursor: pointer;
          &:hover {
            background: #f1f1f1;
          }
        }
      }
    }
  }
}
</style>
