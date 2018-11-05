<template>
  <div class="newsletter-subscribe">
    <div class="subscribe-container">
      <div class="logo-part">
        <img src="../../assets/images/icons/tb_mall_logo_black.svg" alt="st">
      </div>
      <div class="text-part">
        <p>Sign up for our newsletter to receive special offers, event invitations, and more.</p>
      </div>
      <div class="btn-part">
        <button>
          JOIN NOW
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'newsletter-subscribe'
}
</script>

<style scoped lang="scss">
.newsletter-subscribe {
  border-top: 1px solid #dcdcdc;
  .subscribe-container {
    display: flex;
    width: 85%;
    margin: 0 auto;
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
    }
    .text-part {
      margin: auto auto auto 32px;
      p {
        font-family: "Muli Light",'BPG Arial', "sans-serif";
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
    .btn-part{
      button{
        height: 100%;
        padding: 0 36px;
        border:none;
        border-left: 1px solid #dcdcdc;
        border-right: 1px solid #dcdcdc;
        background: #fff;
        cursor: pointer;
        outline: none;
        font-family: 'Muli', 'sans-serif';
        font-size: 1.6rem;
        @media screen and (max-width: 1650px) {
          font-size: 1.1rem;
          padding: 0 24px;
        }
        &:hover{
          background: #eaeaea;
        }
      }
    }
  }
}
</style>
