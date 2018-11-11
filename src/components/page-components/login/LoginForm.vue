<template>
  <div class="login-form">
    <form action="">
      <div class="field-container">
        <input type="text" id="login-username" placeholder="" v-model="username">
        <label for="login-username" :class="{focus: focusedUsername }">{{t('username_placeholder')}}</label>
      </div>
      <div class="field-container">
        <input type="password" id="login-password" placeholder="" v-model="password">
        <label for="login-password" :class="{focus: focusedPassword }">{{t('password_placeholder')}}</label>
      </div>
      <div class="login-buttons">
        <div class="login-button">
          <button-standard :text="t('next')"/>
        </div>
        <div class="login-button">
          <button-standard :text="t('login')" :icon="`<img src='${getFacebookIcon()}' height='14'/>`"/>
        </div>
      </div>
      <div class="forgot-password">
        <p>{{t('forgot_password')}}</p>
        <div class="remember-me">
          <input type="checkbox" v-model="remember" id="remember-me">
          <label for="remember-me">{{t('remember_me')}}</label>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import ButtonStandard from '../../partials/StandardButton'

export default {
  name: 'login-form',
  components: { ButtonStandard },
  props: {},
  data: function () {
    return {
      username: '',
      remember: false,
      password: ''
    }
  },
  computed: {
    focusedUsername: function () {
      let result = false
      if (this.username !== null && this.username !== '') {
        result = true
      }
      return result
    },
    focusedPassword: function () {
      let result = false
      if (this.password !== null && this.password !== '') {
        result = true
      }
      return result
    }
  },
  methods: {
    getFacebookIcon: function () {
      return require('../../../assets/images/icons/facebook.svg')
    }
  }
}
</script>
<style lang="scss">
.login-form {
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
        transform: translateY(-100%);
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
      transform: translateY(-100%);
    }
  }
  .login-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 12.6px;
  }
  .forgot-password{
    p{
      font-family: 'Muli Light','BPG Arial','sans-serif';
      font-size: 1.4rem;
      line-height: 1.29;
      color: #000;
      opacity: 1;
    }
    .remember-me{
      display: flex;
      label{
        font-size: 1.2rem;
        line-height: 1.25;
        color: #848484;
        user-select: none;
        font-family: 'Muli Light','BPG Arial','sans-serif';
      }
      input{
        margin:0 6px 0 0;
      }
    }
  }
}
</style>
