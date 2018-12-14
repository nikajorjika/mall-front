<template>
  <div id="login">
    <div class="login-page-container">
      <block-header-standard :title="t('login')"/>
      <div class="login-form-container">
        <login-form/>
      </div>
      <div class="login-register-container">
        <block-header-standard :title="t('not_registered_q')"/>
        <div class="register-buttons-container">
          <div class="register-button">
            <router-link :to="{name: 'registration', locale: locale}">
              <button-standard :text="t('register')"/>
            </router-link>
          </div>
          <div class="register-button">
            <button-standard :text="t('sign_up')" :icon="getFacebookIcon()" customColor="#4267b2"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockHeaderStandard from '../components/partials/BlockHeader'
import LoginForm from '../components/page-components/login/LoginForm'
import ButtonStandard from '../components/partials/StandardButton'

export default {
  name: 'login',
  components: { ButtonStandard, LoginForm, BlockHeaderStandard },
  data: () => {
    return {
      isConnected: false,
      user: {
        name: '',
        lastName: '',
        email: '',
        mobile: '',
        year: {
          val: ''
        },
        month: {
          val: ''
        },
        day: {
          val: ''
        },
        gender: {
          val: ''
        },
        country: {
          val: ''
        },
        mobileIndex: {
          val: ''
        },
        city: {
          val: ''
        },
        password: ''
      }
    }
  },
  methods: {
    getFacebookIcon: function () {
      return require('../assets/images/icons/facebook.svg')
    }
  }
}
</script>
<style lang="scss">
#login {
  .login-page-container {
    margin-top: 153px;
    .login-form-container {
      width: 90%;
      max-width: 536px;
      margin: 0 auto;
    }
  }
  .login-register-container {
    margin: 133px 0 104px;
    .register-buttons-container {
      width: 90%;
      max-width: 536px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .register-button{
        @media screen and (max-width: 579px){
          margin: 0 auto 12px ;
        }
      }
    }
  }
}
</style>
