<template>
  <div class="language-switcher">
    <div class="lang-wrapper" @click="this.toggleShow">
      <router-link to="#" class="text-center">
        {{currentLanguage.name}}
      </router-link>
    </div>
    <div class="locale-changer" v-if="show">
      <ul>
        <li v-for="{name, locale} in languages" :key="`Lang-${locale}`">
          <div class="lang-wrapper" @click="changeLanguage(locale)">
            {{name}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'language-switcher',
  data: function () {
    return {
      show: false,
      languages: this.$store.state.languages,
      currentLanguage: this.$store.getters.locale
    }
  },
  methods: {
    toggleShow: function () {
      this.show = !this.show
    },
    changeLanguage: function (locale) {
      this.$store.commit('SET_LOCALE', locale)
      this.currentLanguage = this.$store.getters.locale
      this.show = false
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
