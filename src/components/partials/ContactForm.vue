<template>
  <div class="contact-form-component">
    <div class="form-title">
      <h3>{{t('contact_form_title')}}</h3>
      <p v-html="t('contact_form_description')"></p>
    </div>
    <div class="form-container">
      <div class="field-container">
        <custom-select/>
      </div>
      <div class="field-container">
        <input type="text" id="contact-name" v-validate="'required'" name="name" autocomplete="off"
               v-model="contact.name">
        <label for="contact-name">{{t('name')}}</label>
        <span v-show="errors.first('email')" class="error">{{ errors.first('email') }}</span>
      </div>
      <div class="field-container">
        <input type="text" id="contact-email" v-validate="'required|email'" autocomplete="off" name="email"
               v-model="contact.email">
        <label for="contact-email">{{t('email')}}</label>
        <span v-show="errors.first('email')" class="error">{{ errors.first('email') }}</span>
      </div>
      <div class="field-container">
        <input type="text" id="contact-company" name="company" autocomplete="off" v-model="contact.company">
        <label for="contact-company">{{t('company')}}</label>
      </div>
      <div class="field-container">
        <input type="text" id="contact-phone" name="phone" autocomplete="off" v-model="contact.phone">
        <label for="contact-phone">{{t('telephone')}}</label>
      </div>
      <div class="field-container">
        <textarea id="contact-message" :placeholder="t('your_message')" v-validate="'required'" autocomplete="off"
                  name="message" v-model="contact.message" cols="12" rows="12"></textarea>
      </div>
      <div class="field-container">
        <input id="subscribe" autocomplete="off" type="checkbox"
                  name="subscribe" v-model="contact.subscribe">
        <label class="checkbox-label" for="subscribe">{{t('contact_form_subscribe_text')}}</label>
      </div>
      <button class="contact-send-button"><span>{{t('send')}}</span><img src="../../assets/images/icons/left-arrow-subscribe.svg" alt="Arrow"></button>
    </div>
  </div>
</template>
<script>
import CustomSelect from './Select'

export default {
  name: 'contact-form',
  components: { CustomSelect },
  data: () => {
    return {
      contact: {
        subject: '',
        name: '',
        company: '',
        phone: '',
        message: '',
        subscribe: false,
        email: ''
      }
    }
  }
}
</script>

<style lang="scss">
.contact-form-component {
  width: 100%;

  .form-title {
    margin-bottom: 22px;

    h3 {
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: bold;
    }

    p {
      font-size: 1.6rem;
      opacity: 1;
    }
  }

  .form-container {
    display: flex;
    flex-direction: column;

    .field-container {
      position: relative;
      margin-bottom: 22px;

      .custom-select {
        .selected-item {
          padding: 8px 15px 8px 10px;
          background: #f9f9f9;
          border: 1px solid #000000;
        }

        .selectable-items ul li .item {
          padding: 8px 15px 8px 10px;
        }
      }

      label {
        font-family: 'Muli Light', 'BPG Arial', sans-serif;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.25;
        color: #848484;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.2s;
        user-select: none;
        cursor: text;
        padding-left: 9.5px;
        text-transform: capitalize;

        &.focus {
          transform: translateY(-130%);
        }
      }

      input[type=text] {
        border: none;
        border-bottom: solid 1px #848484;
        font-family: 'Muli Light', 'BPG Arial', sans-serif;
        width: 100%;
        padding: 0 0 8px;
        font-size: 1.2rem;

        &:focus {
          outline: none;
          + label {
            transform: translateY(-130%);
          }
        }
      }
      .checkbox-label{
        padding-left: 22px;
      }
      textarea {
        padding: 8px 10px;
        width: 100%;
        background-color: #f9f9f9;
        resize: none;
        border: 1px solid rgba(0, 0, 0, 0.66);
        text-transform: capitalize;
      }
    }
    .contact-send-button{
      border: 1px solid rgba(0, 0, 0, 0.66);
      font-family: 'Muli', 'BPG Nino Mtavruli', sans-serif;
      font-size: 2.1rem;
      text-align: center;
      padding:12px;
      display: flex;
      background: #f9f9f9;
      position: relative;
      cursor: pointer;
      &:before{
        content: '';
        height: 0;
        width: 100%;
        z-index: 0;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #000;
        transition: height 0.3s;
      }
      &:hover{
        &:before{
          height: 100%;
          transition: height 0.3s;
        }
        span{
          color: #ffffff;
        }
        img{
          filter: invert(1);
        }
      }
      img{
        width: 17.5px;
        height: 12.3px;
        margin: auto auto auto 16px;
        z-index: 2;
      }
      span{
        margin-left: auto;
        text-transform: capitalize;
        z-index: 2;
      }
    }
  }
}
</style>
