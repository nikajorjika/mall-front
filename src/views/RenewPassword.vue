<template>
  <div class="get-password-reset">
    <block-header-standard :title="t('recover_password')"/>
    <div class="login-form-container">
      <form>
        <div class="field-container">
          <div class="field-wrapper">
            <label for="registration-password">{{t('reg_password_placeholder')}}*</label>
            <input type="password" id="registration-password" v-validate="'required'" name="password"
                   ref="password"
                   v-model="password">
            <span v-show="errors.first('password')" class="error">{{ errors.first('password') }}</span>
          </div>
          <div class="field-wrapper">
            <label for="registration-repeat-password">{{t('repeat_password_placeholder')}}*</label>
            <input v-validate="'confirmed:password'" name="password_confirmation" type="password"
                   id="registration-repeat-password" v-model="repeatPassword">
            <span v-show="errors.first('password_confirmation')"
                  class="error">{{ errors.first('password_confirmation') }}</span>
          </div>
        </div>
        <div class="login-button">
          <button-standard type="submit" @click="sendRecovery" :text="t('recover')"/>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import ButtonStandard from '../components/partials/StandardButton'
import CustomPopup from '../components/partials/Popup'
import CheckIcon from '../assets/images/icons/pwichka.svg'

export default {
  components: { CustomPopup, ButtonStandard, BlockHeaderStandard, CheckIcon },
  data: function () {
    return {
      password: '',
      repeatPassword: ''
    }
  },
  mounted: function () {
    this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
  },
  methods: {
    sendRecovery: function () {
      this.$validator.validateAll().then((status) => {
        if (status && this.$route.params.resetToken) {
          this.$http.post(this.$store.state.apiUrls.sendToken, {
            newPassword: this.password,
            resetToken: this.$route.params.resetToken
          }).then((response) => {
            this.$store.dispatch('showPopup', {
              message: this.t('password_successfully_recovered'),
              icon: 'success'
            })
          }).catch((error) => {
            this.$store.dispatch('showPopup', {
              message: this.t('error'),
              icon: 'error'
            })
            console.error(error)
          })
        }
      })
    },
    getCheckIcon: () => {
      return require('../assets/images/icons/pwichka.svg')
    }
  }
}
</script>
<style lang="scss" scoped>
.login-form-container {
  width: 90%;
  max-width: 536px;
  margin: 0 auto 200px;
}

.login-button {
  .standard-button {
    margin: 20px auto;
  }
}

.field-container {
  display: flex;
  width: 100%;
  @media screen and (max-width: 445px) {
    flex-direction: column;
  }
  &.columns {
    flex-direction: column;
  }
  &.centered-content {
    justify-content: center;
  }
  .field-wrapper {
    width: calc(50% - 16px);
    @media screen and (max-width: 445px) {
      width: 100%;
    }
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    label {
      margin: 15px 0 6px;
      font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
      font-size: 14px;
      line-height: 1.29;
    }
    input {
      height: 34px;
      border: solid 1px #dcdcdc;
      padding-left: 10px;
    }
    .combo-fields {
      display: flex;
      &.columns {
        flex-direction: column;
      }
      .custom-select {
        flex: 1;
        &.mobile-index-field {
          margin-right: 10px;
        }
        &.b-date-field {
          margin-right: 15px;
        }
        .selected-item {
          height: 34px;
          padding: 11px;
          span {
            font-size: 11px;
            margin-right: 6px;
          }
        }
        .selectable-items ul li .item {
          font-size: 11px;
          padding: 11px;
        }
      }
      input {
        flex: 3;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .terms-set {
    display: flex;
    margin: 6px 0;
    input {
      margin-left: 0;
    }
    label {
      font-size: 12px;
      line-height: 1.25;
      color: #848484;
      margin: auto 0;
      a {
        color: #000;
      }
    }
  }
  .register-button-container {
    margin: 41px 0 107px 0;
    text-align: center;
  }
}

.error {
  color: red;
}
</style>
