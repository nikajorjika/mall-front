<template>
  <div class="get-password-reset">
    <block-header-standard :title="t('recover_password')"/>
    <div class="login-form-container">
      <form>
        <div class="field-container">
          <input type="text" id="login-username" v-validate="'required|email'" name="email" v-model="email">
          <label for="login-username" :class="{focus: email.length }">{{t('username_placeholder')}}</label>
          <span v-show="errors.first('email')" class="error">{{ errors.first('email') }}</span>
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

export default {
  components: { ButtonStandard, BlockHeaderStandard },
  mounted: function () {
    this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
  },
  data: function () {
    return {
      email: ''
    }
  },
  methods: {
    sendRecovery: function () {
      this.$validator.validateAll().then((status) => {
        if (status) {
          this.$http.post(this.$store.state.apiUrls.sendToken, { email: this.email })
            .then((response) => {
              this.$store.dispatch('showPopup', {
                message: this.t('sent'),
                icon: 'success'
              })
            })
            .catch((error) => {
              this.$store.dispatch('showPopup', {
                message: this.t('error'),
                icon: 'error'
              })
              console.error(error)
            })
        }
      })
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
    margin: 0 auto;
  }
}

.error {
  padding-top: 5px;
  display: block;
  color: red;
}

.field-container {
  position: relative;
  margin-bottom: 42px;
  label {
    font-family: 'Muli Light', 'BPG Arial', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.25;
    color: #dcdcdc;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.2s;
    user-select: none;
    cursor: text;
    &.focus {
      transform: translateY(-130%);
    }
  }
  input {
    border: none;
    border-bottom: solid 1px #707070;
    font-family: 'Muli Light', 'BPG Arial', sans-serif;
    width: 100%;
    padding: 0 0 13px;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }
  input:focus + label {
    transform: translateY(-130%);
  }
}
</style>
