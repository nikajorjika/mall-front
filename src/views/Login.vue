<template>
  <div id="login">
    <div class="login-page-container">
      <block-header-standard :title="t('login')"/>
      <div class="login-form-container">
        <login-form @facebook="facebookLogin"/>
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
            <button-standard :text="t('sign_up')" @click="facebookLogin" :icon="getFacebookIcon()" customColor="#4267b2"/>
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
    },
    facebookLogin: function () {
      // eslint-disable-next-line
      FB.login(this.checkLoginState, { scope: 'email' })
    },
    checkLoginState: function (response) {
      if (response.status === 'connected') {
        // eslint-disable-next-line
        FB.api('/me', { fields: 'name,email,gender,birthday' }, (profile) => {
          console.log(profile)
          const user = {}
          const name = profile.name.split(' ')
          user.email = profile.email
          user.facebookId = profile.id
          user.name = name[ 0 ]
          user.surname = name.length > 1 ? name[ 1 ] : ''
          this.$store.dispatch('register', user).then((response) => {
            console.log(response)
          }).catch(error => {
            console.error(error)
          })
        })
      } else if (response.status === 'not_authorized') {
        console.error('You are not authorized in facebook')
      } else {
        console.error('You need to login into facebook')
      }
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
