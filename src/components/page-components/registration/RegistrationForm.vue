<template>
  <div id="registration-form">
    <white-spinner v-if="loading"/>
    <form @submit.prevent="register">
      <div v-if="returnedError.length" class="registration-error">
        <div class="error"><span>{{returnedError}}</span></div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-name">{{t('first_name_placeholder')}}*</label>
          <input type="text" id="registration-name" v-validate="'required'" name="name" placeholder=""
                 v-model="user.name">
          <span v-show="errors.first('name')" class="error">{{ errors.first('name') }}</span>
        </div>
        <div class="field-wrapper">
          <label for="registration-last-name">{{t('last_name_placeholder')}}*</label>
          <input type="text" id="registration-last-name" v-validate="'required'" name="lastName" placeholder=""
                 v-model="user.lastName">
          <span v-show="errors.first('lastName')" class="error">{{ errors.first('lastName') }}</span>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-email">{{t('email_placeholder')}}*</label>
          <input type="text" v-validate="'required|email'" name="email" id="registration-email" placeholder=""
                 v-model="user.email">
          <span v-show="errors.first('email')" class="error">{{ errors.first('email') }}</span>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-phone">{{t('mobile_placeholder')}}*</label>
          <div class="combo-fields">
            <input type="hidden" name="mobileIndex" v-validate="'required'" v-model="user.mobileIndex.val">
            <custom-select class="mobile-index-field"
                           :items="user.mobileIndex.options"
                           :placeholder="user.mobileIndex.placeholder"
                           :selectedDefault="user.mobileIndex.options[0]"
                           name="mobileIndex" @change="onSelectAction"/>
            <input type="text" id="registration-phone" v-validate="'required|numeric'" name="phone" placeholder=""
                   v-model="user.mobile">
          </div>
          <div v-if="errors.first('mobileIndex')">
            <div v-show="errors.first('mobileIndex')" class="error">{{ errors.first('mobileIndex') }}</div>
          </div>
          <div v-else-if="errors.first('phone')">
            <div v-show="errors.first('phone')" class="error">{{ errors.first('phone') }}</div>
          </div>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label>{{t('birth_date_placeholder')}}*</label>
          <div class="combo-fields">
            <input type="hidden" name="day" v-validate="'required'" v-model="user.day.val">
            <custom-select class="b-date-field" :items="user.day.options"
                           :selectedDefault="user.day.options[0]"
                           :placeholder="user.day.placeholder"
                           name="day"
                           @change="onSelectAction"/>
            <input type="hidden" name="month" v-validate="'required'" v-model="user.month.val">
            <custom-select class="b-date-field" :items="user.month.options"
                           :selectedDefault="user.month.options[0]"
                           :placeholder="user.month.placeholder"
                           name="month"
                           @change="onSelectAction"/>
            <input type="hidden" name="year" v-validate="'required'" v-model="user.year.val">
            <custom-select class="b-date-field" :items="user.year.options"
                           :selectedDefault="user.year.options[0]"
                           :placeholder="user.year.placeholder"
                           name="year"
                           @change="onSelectAction"/>
          </div>
          <div v-if="errors.first('day')">
            <div v-show="errors.first('day')" class="error">{{ errors.first('day') }}</div>
          </div>
          <div v-else-if="errors.first('month')">
            <div v-show="errors.first('month')" class="error">{{ errors.first('month') }}</div>
          </div>
          <div v-else-if="errors.first('year')">
            <div v-show="errors.first('year')" class="error">{{ errors.first('year') }}</div>
          </div>
        </div>
        <div class="field-wrapper">
          <label>{{t('gender_placeholder')}}*</label>
          <div class="combo-fields columns">
            <input type="hidden" name="gender" v-validate="'required'" v-model="user.gender.val">
            <custom-select class="gender-field" :items="user.gender.options" name="gender"
                           :selectedDefault="user.gender.options[0]"
                           :placeholder="user.gender.placeholder" @change="onSelectAction"/>
            <div v-show="errors.first('gender')" class="error">{{ errors.first('gender') }}</div>
          </div>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label>{{t('country_placeholder')}}*</label>
          <div class="combo-fields columns">
            <input type="hidden" name="country" v-validate="'required'" v-model="user.country.val">
            <custom-select class="country-field" name="country" :items="user.country.options"
                           :selectedDefault="user.country.options[0]"
                           :placeholder="user.country.placeholder" @change="onSelectAction"/>
            <div v-show="errors.first('country')" class="error">{{ errors.first('country') }}</div>
          </div>
        </div>
        <div class="field-wrapper">
          <label>{{t('city_placeholder')}}*</label>
          <div class="combo-fields columns">
            <input type="hidden" name="city" v-validate="'required'" v-model="user.city.val">
            <custom-select class="city-field" name="city" :items="user.city.options"
                           :selectedDefault="user.city.options[0]"
                           :placeholder="user.city.placeholder" @change="onSelectAction"/>
            <div v-show="errors.first('city')" class="error">{{ errors.first('city') }}</div>
          </div>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-password">{{t('reg_password_placeholder')}}*</label>
          <input type="password" id="registration-password" v-validate="'required'" name="password"
                 ref="password"
                 v-model="user.password">
          <span v-show="errors.first('password')" class="error">{{ errors.first('password') }}</span>
        </div>
        <div class="field-wrapper">
          <label for="registration-repeat-password">{{t('repeat_password_placeholder')}}*</label>
          <input v-validate="'confirmed:password'" name="password_confirmation" type="password"
                 id="registration-repeat-password" v-model="user.repeatPassword">
          <span v-show="errors.first('password_confirmation')"
                class="error">{{ errors.first('password_confirmation') }}</span>
        </div>
      </div>

      <div class="field-container columns">
        <div class="terms-set">
          <input type="checkbox" v-validate="'required'" name="terms" id="terms-and-conditions" v-model="user.terms">
          <label for="terms-and-conditions">Accept <a href="">terms and conditions</a></label>
        </div>
        <div v-show="errors.first('terms')"
             class="error">{{ errors.first('terms') }}
        </div>
      </div>
      <div class="field-container centered-content">
        <div class="register-button-container">
          <button-standard :text="t('register')" @click="register"/>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import CustomSelect from '../../partials/Select'
import ButtonStandard from '../../partials/StandardButton'
import WhiteSpinner from '../../partials/LoadingSpinner'

export default {
  name: 'registration-form',
  components: { WhiteSpinner, ButtonStandard, CustomSelect },
  mounted: function () {
    if (this.$store.getters.user) {
      this.$router.back()
    }
  },
  data: function () {
    return {
      user: {
        name: 'Nika',
        lastName: 'Jorjoliani',
        email: 'nikajorjika1993@gmail.com',
        mobileIndex: {
          val: '+995',
          options: [
            {
              name: {
                ka: 'საქ +995',
                en: 'GEO +995'
              },
              value: '+995'
            }, {
              name: {
                ka: 'რუს +007',
                en: 'RUS +007'
              },
              value: '+007'
            }
          ],
          placeholder: {
            en: 'Index',
            ka: 'ინდექსი'
          }
        },
        mobile: '123123123',
        city: {
          val: 'tbilisi',
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
          val: 'georgia',
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
        day: {
          val: '1',
          errors: [],
          options: this.$store.state.dateOptions.day.options,
          placeholder: {
            en: 'Day',
            ka: 'დღე'
          }
        },
        month: {
          val: '1',
          errors: [],
          options: this.$store.state.dateOptions.month.options,
          placeholder: {
            en: 'Month',
            ka: 'თვე'
          }
        },
        year: {
          val: '122',
          errors: [],
          options: this.$store.state.dateOptions.year.options,
          placeholder: {
            en: 'Year',
            ka: 'წელი'
          }
        },
        gender: {
          val: 'male',
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
        password: '123123',
        repeatPassword: '123123',
        terms: true
      },
      loading: false,
      returnedError: ''
    }
  },
  methods: {
    register: function () {
      if (this.validateForm()) {
        const _this = this
        this.$validator.validateAll().then((result) => {
          if (result) {
            // here we submit form
            _this.loading = true
            _this.$store.dispatch('register', _this.user).then(function () {
              _this.loading = false
              this.$router.push({ name: 'home', params: { locale: this.$store.getters.locale.locale } })
            }).catch((error) => {
              if (error.response.data) {
                _this.returnedError = error.response.data.status
              }
              _this.loading = false
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
    onSelectAction: function (value, index) {
      if (value.selected) {
        if (this.user.hasOwnProperty(value.name) && this.user[ value.name ].hasOwnProperty('val')) {
          this.user[ value.name ].val = value.selected.value
        }
      } else {
        if (this.user.hasOwnProperty(value.name) && this.user[ value.name ].hasOwnProperty('val')) {
          this.user[ value.name ].val = ''
        }
      }
    }
  }
}
</script>

<style lang="scss">
#registration-form {
  position: relative;
  .field-container {
    display: flex;
    width: 100%;
    &.columns {
      flex-direction: column;
    }
    &.centered-content {
      justify-content: center;
    }
    .field-wrapper {
      width: calc(50% - 16px);
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
}
</style>
