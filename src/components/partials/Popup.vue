<template>
  <div class="popup-component">
    <transition name="fadeSide">
      <div class="popup-container" v-if="$store.getters.showPopup">
        <div class="popup-inner">
          <div class="icon">
            <img src="../../assets/images/icons/pwichka.svg" v-if="$store.getters.popup.icon === 'success'">
            <img src="../../assets/images/icons/close.svg" v-if="$store.getters.popup.icon === 'error'">
          </div>
          <div class="message">
            <h5>{{$store.getters.popup.message}}</h5>
          </div>
          <div class="closePopup">
            <default-icon class="hamburger-close-button" :icon="`close`" @click="closeEvent"/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import DefaultIcon from './DefaultIcons'

export default {
  name: 'custom-popup',
  components: { DefaultIcon },
  mounted: function () {
    window.setTimeout(() => {
      this.$store.commit('HIDE_POPUP')
    }, 5000)
  },
  methods: {
    closeEvent: function () {
      this.$store.commit('HIDE_POPUP')
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  &.fadeSide-enter-active {
    animation: fadeIn .4s;
  }
  &.fadeSide-leave-active {
    animation: fadeOut .4s;
  }
  .popup-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 536px;
    padding: 69px 0 50px 0;
    background: #ffffff;
    border: 1px solid #000000;
    .closePopup {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .icon {
      width: 57px;
      height: 57px;
      border-radius: 50%;
      border: 1px solid #000000;
      display: flex;
      margin: 0 auto;
      img {
        margin: auto;
        width: 60%;
        height: 60%;
        object-fit: contain;
      }
    }
    .message {
      h5 {
        text-align: center;
        font-family: 'Muli', 'BPG Nino Mtavruli', 'sans-serif';
        font-size: 1.8rem;
        line-height: 1.28;
        text-transform: uppercase;
        margin: 29px 0 0;
      }
    }
  }
}
</style>
