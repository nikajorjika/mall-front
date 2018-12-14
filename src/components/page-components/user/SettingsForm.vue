<template>
  <div id="settings-form">
    <white-spinner v-if="loading"/>
    <form @submit.prevent="updateSettings" v-if="user" data-vv-scope="settings">
      <div v-if="returnedError.length" class="registration-error">
        <div class="error"><span>{{returnedError}}</span></div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-name">{{t('first_name_placeholder')}}*</label>
          <input type="text" id="registration-name" v-validate="'required'" name="name" placeholder=""
                 v-model="updateObject.name">
          <span v-show="errors.first('settings.name')" class="error">{{ errors.first('settings.name') }}</span>
        </div>
        <div class="field-wrapper">
          <label for="registration-last-name">{{t('last_name_placeholder')}}*</label>
          <input type="text" id="registration-last-name" v-validate="'required'" name="lastName" placeholder=""
                 v-model="updateObject.surname">
          <span v-show="errors.first('settings.lastName')" class="error">{{ errors.first('settings.lastName') }}</span>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-email">{{t('email_placeholder')}}*</label>
          <input type="text" v-validate="'required|email'" name="email" id="registration-email" placeholder="" disabled
                 v-model="updateObject.email">
          <span v-show="errors.first('settings.email')" class="error">{{ errors.first('settings.email') }}</span>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-phone">{{t('mobile_placeholder')}}*</label>
          <input type="text" id="registration-phone" v-validate="'required'" name="phone" placeholder=""
                 v-model="updateObject.mobile">
          <div v-show="errors.first('settings.phone')" class="error">{{ errors.first('settings.phone') }}</div>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label>{{t('birth_date_placeholder')}}*</label>
          <div class="combo-fields">
            <custom-select class="b-date-field" :items="updateObject.day.options"
                           :value="birthDate.day"
                           :placeholder="updateObject.day.placeholder"
                           name="day"
                           @change="onSelectAction"/>
            <custom-select class="b-date-field" :items="updateObject.month.options"
                           :value="birthDate.month"
                           :placeholder="updateObject.month.placeholder"
                           name="month"
                           @change="onSelectAction"/>
            <custom-select class="b-date-field" :items="updateObject.year.options"
                           :value="birthDate.year"
                           :placeholder="updateObject.year.placeholder"
                           name="year"
                           @change="onSelectAction"/>
          </div>
        </div>
        <div class="field-wrapper">
          <label>{{t('gender_placeholder')}}*</label>
          <div class="combo-fields columns">
            <custom-select class="gender-field" :items="updateObject.gender.options" name="gender"
                           :value="birthDate.gender"
                           :placeholder="updateObject.gender.placeholder" @change="onSelectAction"/>
          </div>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label>{{t('country_placeholder')}}*</label>
          <div class="combo-fields columns">
            <custom-select class="country-field" name="country" :items="updateObject.country.options"
                           :value="birthDate.country"
                           :placeholder="updateObject.country.placeholder" @change="onSelectAction"/>
          </div>
        </div>
        <div class="field-wrapper">
          <label>{{t('city_placeholder')}}*</label>
          <div class="combo-fields columns">
            <custom-select class="city-field" name="city" :items="updateObject.city.options"
                           :value="birthDate.city"
                           :placeholder="updateObject.city.placeholder" @change="onSelectAction"/>
          </div>
        </div>
      </div>
      <div class="field-container columns">
        <div v-show="errors.first('terms')"
             class="error">{{ errors.first('settings.terms') }}
        </div>
      </div>
      <div class="field-container centered-content">
        <div class="register-button-container">
          <button-standard :text="t('save')" @click="updateSettings"/>
        </div>
      </div>
    </form>
    <form @submit.prevent="updatePassword" v-if="user" class="change-password-form" data-vv-scope="changePassword">
      <block-header-standard :title="t('changePassword')" class="small-margins"/>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="current-password">{{t('reg_password_placeholder')}}*</label>
          <input type="password" id="current-password" v-validate="'required'" name="password"
                 ref="password"
                 v-model="password.oldPassword">
          <span v-show="errors.first('changePassword.password')" class="error">{{ errors.first('changePassword.password') }}</span>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-password">{{t('newPassword')}}*</label>
          <input type="password" id="registration-password" v-validate="'required'" name="newPassword"
                 ref="newPassword"
                 v-model="password.newPassword">
          <span v-show="errors.first('changePassword.newPassword')" class="error">{{ errors.first('changePassword.newPassword') }}</span>
        </div>
        <div class="field-wrapper">
          <label for="registration-repeat-password">{{t('repeatNewPassword')}}*</label>
          <input v-validate="'confirmed:newPassword'" name="password_confirmation" type="password"
                 id="registration-repeat-password" v-model="password.confirmPassword">
          <span v-show="errors.first('changePassword.password_confirmation')"
                class="error">{{ errors.first('changePassword.password_confirmation') }}</span>
        </div>
      </div>
      <div class="field-container centered-content">
        <div class="register-button-container">
          <button-standard :text="t('change')" @click="updatePassword"/>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import CustomSelect from '../../partials/Select'
import ButtonStandard from '../../partials/StandardButton'
import WhiteSpinner from '../../partials/LoadingSpinner'
import BlockHeaderStandard from '../../partials/BlockHeader'

export default {
  name: 'settings-form',
  components: { BlockHeaderStandard, WhiteSpinner, ButtonStandard, CustomSelect },
  mounted: function () {
    if (this.$store.getters.user) {
      const date = new Date(this.user.birthDate)
      this.birthDate.day = date.getDate().toString()
      this.birthDate.month = date.getMonth().toString()
      this.birthDate.year = date.getFullYear().toString()
      this.birthDate.gender = this.user.sex
      this.birthDate.city = this.user.city
      this.birthDate.country = this.user.country
      console.log(this.birthDate)
    }
  },
  data: function () {
    return {
      user: this.$store.getters.user,
      password: {
        newPassword: '',
        confirmPassword: '',
        oldPassword:''
      },
      updateObject: {
        name: this.$store.getters.user.name,
        surname: this.$store.getters.user.surname,
        email: this.$store.getters.user.email,
        mobile: this.$store.getters.user.mobile,
        city: {
          val: this.$store.getters.user.city,
          errors: [],
          options: [
            {
              name: {
                ka: 'თბილისი',
                en: 'Tbilisi'
              },
              value: 'tbilisi'
            }, {
              name: {
                ka: 'ბათუმი',
                en: 'Batumi'
              },
              value: 'batumi'
            }
          ],
          placeholder: {
            en: 'City',
            ka: 'ქალაქი'
          }
        },
        country: {
          val: this.$store.getters.user.country,
          errors: [],
          options: [
            {
              name: {
                ka: 'საქართველო',
                en: 'Georgia'
              },
              value: 'georgia'
            }, {
              name: {
                ka: 'რუსეთი',
                en: 'Russia'
              },
              value: 'russia'
            }
          ],
          placeholder: {
            en: 'Country',
            ka: 'ქვეყანა'
          }
        },
        gender: {
          val: this.$store.getters.user.sex,
          errors: [],
          options: [
            {
              name: {
                ka: 'ქალი',
                en: 'Female'
              },
              value: 'female'
            }, {
              name: {
                ka: 'კაცი',
                en: 'Male'
              },
              value: 'male'
            }
          ],
          placeholder: {
            en: 'Gender',
            ka: 'სქესი'
          }
        },
        day: {
          val: '',
          errors: [],
          options: this.$store.state.dateOptions.day.options,
          placeholder: {
            en: 'Day',
            ka: 'დღე'
          }
        },
        month: {
          val: '',
          errors: [],
          options: this.$store.state.dateOptions.month.options,
          placeholder: {
            en: 'Month',
            ka: 'თვე'
          }
        },
        year: {
          val: '',
          errors: [],
          options: this.$store.state.dateOptions.year.options(),
          placeholder: {
            en: 'Year',
            ka: 'წელი'
          }
        }
      },
      loading: false,
      returnedError: '',
      birthDate: {
        day: '',
        month: '',
        year: '',
        country: '',
        gender: '',
        city: ''
      }
    }
  },
  methods: {
    updateSettings: function () {
      if (this.validateForm()) {
        console.log(this.user)
        this.$validator.validateAll('settings').then((result) => {
          if (result) {
            // here we submit form
            this.user.birthDate = [ this.birthDate.year, this.birthDate.month, this.birthDate.day ].join('/')
            this.user.sex = this.updateObject.gender.val
            this.user.city = this.updateObject.city.val
            this.user.country = this.updateObject.country.val
            this.loading = true
            this.$http.post(this.$store.state.apiUrls.updateUser, this.user).then((response) => {
              this.$store.dispatch('getUser', { token: this.user.token, email: this.user.email })
                .then((response) => {
                  console.log(response)
                })
                .catch((error) => {
                  console.error(error)
                })
              this.$store.dispatch('showPopup', {
                message: this.t('updated_successfully'),
                icon: 'success'
              })
              this.loading = false
            }).catch((error) => {
              this.loading = false
              console.error(error)
            })
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      // this.$refs.RegistrationForm.submit()
    },
    updatePassword: function () {
      if (this.validateForm()) {
        this.$validator.validateAll('changePassword').then((result) => {
          if (result) {
            this.loading = true
            this.$http.post(this.$store.state.apiUrls.changePassword, {
              token: this.user.token,
              newPassword: this.password.newPassword,
              oldPassword: this.password.oldPassword
            }).then((response) => {
              this.$store.dispatch('showPopup', {
                message: this.t('password_updated'),
                icon: 'success'
              })
              this.loading = false
              this.password.oldPassword = this.password.confirmPassword = this.password.newPassword = ''
            }).then(error => {
              this.loading = false
              console.error(error)
            })
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      // this.$refs.RegistrationForm.submit()
    },
    validateForm: function () {
      return true
    },
    onSelectAction: function (value) {
      if (value.selected) {
        if (this.updateObject.hasOwnProperty(value.name) && this.updateObject[ value.name ].hasOwnProperty('val')) {
          this.updateObject[ value.name ].val = value.selected.value
        } else if (this.birthDate.hasOwnProperty(value.name) && this.birthDate[ value.name ].hasOwnProperty('val')) {
          this.birthDate[ value.name ] = value.selected.value
        }
      } else {
        if (this.updateObject.hasOwnProperty(value.name) && this.updateObject[ value.name ].hasOwnProperty('val')) {
          this.updateObject[ value.name ].val = ''
        } else if (this.birthDate.hasOwnProperty(value.name) && this.birthDate[ value.name ].hasOwnProperty('val')) {
          this.birthDate[ value.name ].val = ''
        }
      }
    }
  }
}
</script>

<style lang="scss">
#settings-form {
  position: relative;
  .change-password-form {
    margin-bottom: 100px;
  }
  .block-header-standard.small-margins {
    h2 {
      margin: 20px;
    }
  }
  .field-container {
    display: flex;
    width: 100%;
    @media screen and (max-width: 550px) {
      flex-direction: column;
    }
    &.columns {
      flex-direction: column;
    }
    &.centered-content {
      justify-content: center;
    }
    .field-wrapper {
      width: calc(50% - 8px);
      margin-right: 16px;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 550px) {
        width: 100%;
      }
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
      margin: 41px;
      text-align: center;
      .standard-button {
        @media screen and (max-width: 550px) {
          width: 100%;
        }
      }
    }
  }
  .error {
    color: red;
  }
}
</style>
