<template>
  <div class="login-form">
    <white-spinner v-if="loading"/>
    <form @submit.prevent="login">
      <div v-if="returnedError.length" class="login-error">
        <div class="error"><span>{{returnedError}}</span></div>
      </div>
      <div class="field-container">
        <input type="text" id="login-username" v-validate="'required|email'" name="email" v-model="user.email">
        <label for="login-username" :class="{focus: focusedUsername }">{{t('username_placeholder')}}</label>
        <span v-show="errors.first('email')" class="error">{{ errors.first('email') }}</span>
      </div>
      <div class="field-container">
        <input type="password" id="login-password" v-validate="'required'" name="password" v-model="user.password">
        <label for="login-password" :class="{focus: focusedPassword }">{{t('password_placeholder')}}</label>
        <span v-show="errors.first('password')" class="error">{{ errors.first('password') }}</span>
      </div>
      <div class="login-buttons">
        <div class="login-button">
          <button-standard type="submit" @click="login" :text="t('next')"/>
        </div>
        <div class="login-button" @click.stop>
          <form @submit.prevent="facebookLogin">
            <button-standard :text="t('login')" @click="facebookLogin" :icon="getFacebookIcon()" customColor="#4267b2"
                             iconWidth="7.5"
                             iconHeight="15"/>
          </form>
        </div>
      </div>
      <div class="forgot-password">
        <p>{{t('forgot_password')}}</p>
        <div class="remember-me">
          <input type="checkbox" v-model="user.remember" id="remember-me">
          <label for="remember-me">{{t('remember_me')}}</label>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import ButtonStandard from '../../partials/StandardButton'
import WhiteSpinner from '../../partials/LoadingSpinner'
import facebookLogin from 'facebook-login-vuejs'

export default {
  name: 'login-form',
  components: { WhiteSpinner, ButtonStandard, facebookLogin },
  props: {},
  data: function () {
    return {
      user: {
        email: '',
        password: '',
        remember: false
      },
      loading: false,
      returnedError: '',
      FB: undefined
    }
  },
  mounted: function () {
    if (this.$store.getters.user) {
      this.$router.back()
    }
  },
  computed: {
    focusedUsername: function () {
      let result = false
      if (this.user.email !== '') {
        result = true
      }
      return result
    },
    focusedPassword: function () {
      let result = false
      if (this.user.password !== '') {
        result = true
      }
      return result
    }
  },
  methods: {
    getFacebookIcon: function () {
      return require('../../../assets/images/icons/facebook.svg')
    },
    facebookLogin: function () {
    },
    login: function () {
      this.$validator.validateAll().then((status) => {
        if (status) {
          // here we submit form
          this.loading = true
          this.returnedError = ''
          this.$store.dispatch('login', this.user).then(() => {
            this.loading = false
            this.$router.push({ name: 'home', params: { locale: this.locale } })
          }).catch((error) => {
            if (error.response && error.response.data) {
              this.returnedError = error.response.data.status
            }
            this.loading = false
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
.login-form {
  position: relative;
  .login-error {
    margin-bottom: 20px;
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
  .login-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 12.6px;
  }
  .forgot-password {
    p {
      font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
      font-size: 1.4rem;
      line-height: 1.29;
      color: #000;
      opacity: 1;
    }
    .remember-me {
      display: flex;
      label {
        font-size: 1.2rem;
        line-height: 1.25;
        color: #848484;
        user-select: none;
        font-family: 'Muli Light', 'BPG Arial', 'sans-serif';
      }
      input {
        margin: 0 6px 0 0;
      }
    }
  }
}
</style>
