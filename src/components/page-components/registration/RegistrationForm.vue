<template>
  <div id="registration-form">
    <form action="">
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-name">{{t('first_name_placeholder')}}</label>
          <input type="text" id="registration-name" placeholder="" v-model="user.name.val">
        </div>
        <div class="field-wrapper">
          <label for="registration-last-name">{{t('last_name_placeholder')}}</label>
          <input type="text" id="registration-last-name" placeholder="" v-model="user.lastName.val">
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-email">{{t('email_placeholder')}}</label>
          <input type="text" id="registration-email" placeholder="" v-model="user.email.val">
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-phone">{{t('mobile_placeholder')}}</label>
          <div class="combo-fields">
            <custom-select class="mobile-index-field"
                           :items="user.mobileIndex.options"
                           :placeholder="user.mobileIndex.placeholder"
                           :selectedDefault="user.mobileIndex.options[0]" @onChange="onSelectAction"/>
            <input type="text" id="registration-phone" placeholder="" v-model="user.mobile.val">
          </div>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label>{{t('birth_date_placeholder')}}</label>
          <div class="combo-fields">
            <custom-select class="b-date-field" :items="user.birthDate.day.options"
                           :placeholder="user.birthDate.day.placeholder"
                           :selectedDefault="user.birthDate.day.options[0]" @onChange="onSelectAction"/>
            <custom-select class="b-date-field" :items="user.birthDate.month.options"
                           :placeholder="user.birthDate.month.placeholder"
                           :selectedDefault="user.birthDate.month.options[0]" @onChange="onSelectAction"/>
            <custom-select class="b-date-field" :items="user.birthDate.year.options"
                           :placeholder="user.birthDate.year.placeholder"
                           :selectedDefault="user.birthDate.year.options[0]" @onChange="onSelectAction"/>
          </div>
        </div>
        <div class="field-wrapper">
          <label>{{t('gender_placeholder')}}</label>
          <div class="combo-fields">
            <custom-select class="gender-field" :items="user.gender.options"
                           :placeholder="user.gender.placeholder" @onChange="onSelectAction"/>
          </div>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label>{{t('country_placeholder')}}</label>
          <div class="combo-fields">
            <custom-select class="country-field" :items="user.country.options"
                           :placeholder="user.country.placeholder" @onChange="onSelectAction"/>
          </div>
        </div>
        <div class="field-wrapper">
          <label>{{t('city_placeholder')}}</label>
          <div class="combo-fields">
            <custom-select class="city-field" :items="user.city.options"
                           :placeholder="user.city.placeholder" @onChange="onSelectAction"/>
          </div>
        </div>
      </div>
      <div class="field-container">
        <div class="field-wrapper">
          <label for="registration-password">{{t('reg_password_placeholder')}}</label>
          <input type="text" id="registration-password" placeholder="" v-model="user.password.val">
        </div>
        <div class="field-wrapper">
          <label for="registration-repeat-password">{{t('repeat_password_placeholder')}}</label>
          <input type="text" id="registration-repeat-password" placeholder="" v-model="user.repeatPassword.val">
        </div>
      </div>
      <div class="field-container">
        <div class="terms-set">
          <input type="checkbox" id="terms-and-conditions" v-model="user.terms">
          <label for="terms-and-conditions">Accept <a href="">terms and conditions</a></label>
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

export default {
  name: 'registration-form',
  components: { ButtonStandard, CustomSelect },
  data: function () {
    return {
      user: {
        name: {
          val: '',
          errors: []
        },
        lastName: {
          val: '',
          errors: []
        },
        email: {
          val: '',
          errors: []
        },
        mobileIndex: {
          val: '',
          errors: [],
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
        mobile: {
          val: '',
          errors: []
        },
        city: {
          val: '',
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
          val: '',
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
        birthDate: {
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
            options: this.$store.state.dateOptions.year.options,
            placeholder: {
              en: 'Year',
              ka: 'წელი'
            }
          }
        },
        gender: {
          val: '',
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
        password: {
          val: '',
          errors: []
        },
        repeatPassword: {
          val: '',
          errors: []
        },
        terms: false
      }
    }
  },
  methods: {
    register: function () {
      console.log(this.validateForm())
    },
    validateForm: function () {
      let rt = this.user.name && this.user.lastName
      return rt
    },
    onSelectAction: function (value, index) {
      console.log(value, index)
    }
  }
}
</script>

<style lang="scss">
#registration-form {
  .field-container {
    display: flex;
    width: 100%;
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
}
</style>
