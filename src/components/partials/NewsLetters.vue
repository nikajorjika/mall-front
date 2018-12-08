<template>
  <div class="newsletter-subscribe">
    <div class="subscribe-container">
      <div class="logo-part">
        <img src="../../assets/images/icons/tb_mall_logo_black.svg" alt="st">
      </div>
      <div class="subscribe-part" :class="{open: showForm}">
        <div class="inner-container form-closed" @click.stop="showForm = !showForm">
          <div class="text-part">
            <p>{{t('subscribeText')}}</p>
          </div>
          <div class="btn-part">
            <button @click.stop="subscribeForm">
              <span v-if="$mq !== 'mobile'">{{t('joinNow')}}</span>
              <span v-else> <img src="../../assets/images/icons/left-arrow-subscribe.svg" alt="Subscribe" width="22px"
                                 height="15px"></span>
            </button>
          </div>
        </div>
        <div class="inner-container form-open" @click.stop>
          <div class="text-part">
            <input type="text" v-validate="'required|email'" :placeholder="t('enter_your_email')" name="email"
                   class="input">
          </div>
          <div class="btn-part">
            <button @click="subscribe">
              {{t('subscribe')}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'newsletter-subscribe',
  data: () => {
    return {
      showForm: false,
      errorMessage: null
    }
  },
  created: function () {
    document.addEventListener('click', this.documentClick)
  },
  methods: {
    subscribeForm: function () {
      this.showForm = !this.showForm
    },
    subscribe: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {

        } else {
          console.log('notify')
          this.$notify({
            group: 'notify',
            type: 'error',
            title: this.t('email_validation'),
            text: this.t('email_validation_message')
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    documentClick: function () {
      this.showForm = false
    }
  }
}
</script>

<style scoped lang="scss">
.newsletter-subscribe {
  border-top: 1px solid #dcdcdc;
  .subscribe-container {
    display: flex;
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
    @media screen and (max-width: 925px) {
      width: 100%;
    }
    .logo-part {
      padding: 16px 26px;
      height: 52px;
      width: 52px;
      border-right: 1px solid #dcdcdc;
      border-left: 1px solid #dcdcdc;
      box-sizing: content-box;
      @media screen and (max-width: 1650px) {
        height: 37px;
        width: 37px;
        padding: 11px 20px;
      }
      @media screen and (max-width: 925px) {
        border-left: none;
      }
    }
    .subscribe-part{
      width:100%;
      display: flex;
      overflow: hidden;
      position: relative;
      &.open{
        .form-open {
          transition: transform .2s;
          transform: translateY(0);
        }
      }
      .text-part {
        margin: auto auto auto 32px;
        p {
          font-family: "Muli Light", 'BPG Arial', "sans-serif";
          font-size: 1.6rem;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.25;
          letter-spacing: normal;
          text-align: left;
          color: #848484;
          @media screen and (max-width: 1650px) {
            font-size: 1.1rem;
          }
        }
      }
      .btn-part {
        button {
          height: 100%;
          padding: 0 36px;
          border: none;
          border-left: 1px solid #dcdcdc;
          border-right: 1px solid #dcdcdc;
          background: #fff;
          cursor: pointer;
          outline: none;
          font-family: 'Muli', 'BPG Nino Mtavruli', 'sans-serif';
          font-size: 1.6rem;
          text-transform: uppercase;
          @media screen and (max-width: 1650px) {
            font-size: 1.1rem;
            padding: 0 24px;
          }
          &:hover {
            background: #eaeaea;
          }
        }
      }
    }
    .inner-container {
      display: flex;
      width: 100%;
    }
    .form-open {
      position: absolute;
      height: 100%;
      width:100%;
      top:0;
      left: 0;
      transition: transform .2s;
      transform: translateY(102%);
      .text-part {
        margin: 0;
        background-color: #000000;
        height: 100%;
        width: 100%;
        .input {
          height: 100%;
          width: 100%;
          border: none;
          background: #000;
          color: #fff;
          font-size: 1.6rem;
          padding-left: 32px;
          @media screen and (max-width: 1650px) {
            font-size: 1.1rem;
          }
        }
      }
      .btn-part {
        button {
          background: #000000;
          color: #ffffff;
          white-space: nowrap;
          border-left: 1px solid #848484;
          &:hover {
            background: rgb(44, 44, 44);
          }
        }
      }
    }
  }
}
</style>
