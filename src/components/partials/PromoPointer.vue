<template>
  <div class="promo-pointer" v-if="$store.getters.showPromo" @click="goToPromo">
    <div class="close-promo" @click="close">
    <span class="icon-close-container">
      <span class="icon-close">
      </span>
    </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'promo-pointer',
  methods: {
    goToPromo: function () {
      let routeData = this.$router.resolve({ name: 'promoPage' })
      window.open(routeData.href, '_blank')
    },
    close: function () {
      console.log('close')
      this.$store.commit('SET_PROMO_STATUS', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.promo-pointer {
  cursor: pointer;
  height: 85px;
  background: url('../../assets/santa_files/promo-pointer.png') no-repeat center;
  display: flex;
  @media screen and (max-width: 500px) {
    height: 56px;
    background-size: auto 100%;
  }
}

.close-promo {
  background: #1f853d;
  width: 36.6px;
  height: 37.2px;
  display: flex;
  margin: auto 23px auto auto;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    margin: auto 15px auto auto;
  }
  &:hover {
    background: #000;
  }
}

.icon-close-container {
  width: 14.3px;
  height: 14.3px;
  display: inline-block;
  margin: auto;
  .icon-close {
    position: absolute;
    width: 14.3px;
    height: 14.3px;
    display: inline-block;
    cursor: pointer;
    &:after,
    &:before {
      content: ' ';
      position: absolute;
      left: 6px;
      height: 18px;
      width: 2px;
      top: -2px;
      background-color: #f9f9f9;
    }
    &:after {
      transform: rotate(45deg);
    }
    &:before {
      transform: rotate(-45deg);
    }
  }
}
</style>