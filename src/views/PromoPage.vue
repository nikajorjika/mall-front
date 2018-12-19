<template>
  <div id="promo-page">
    <div class="page-wrapper">
      <section class="first-page">
        <div class="header">
          <div class="logo-container clickable" @click="goHome">
            <img src="../assets/santa_files/Logo.png" alt="TM Logo">
          </div>
          <div class="santa-vs-babu clickable" @click="goHome">
            <img src="../assets/santa_files/VS.png" alt="SANTA VS TOVLIS BABU">
          </div>
        </div>
        <div class="icon-snowflake very-big" style="right:0; bottom: 106px;"></div>
        <div class="icon-snowflake big" style="left: -30px;"></div>
        <div class="icon-snowflake medium" style="right: 27%;top: 26%;"></div>
        <div class="icon-snowflake small" style="bottom: 15%; left: 26%;"></div>
        <div class="icon-snowflake very-small" style="left: 29%;"></div>
        <div class="icon-candy" style="right: 0; top: 57px;"></div>
        <div class="content">
          <div class="description">
            <h1><span>მოიგე 200 ლარიანი</span><span>სასაჩუქრე ბარათი</span></h1>
            <h2>7 - 29 დეკემბრის ჩათვლით</h2>
            <p>გააკეთეთ შენაძენი თბილისი მოლში,
              მიეცით ხმა თქვენს რჩეულს და დასაჩუქრდით!</p>
          </div>
          <div class="santas">
            <img src="../assets/santa_files/santa-and-babu-2.png" alt="Santa Or Tovlis babua">
          </div>
          <div class="scroll-down-button">
            <button v-scroll-to="{ el: '#second-page',container: '#promo-page' }">
              გააკეთე არჩევანი
            </button>
          </div>
        </div>
        <div class="scroll-down-arrow" v-scroll-to="{ el: '#second-page',container: '#promo-page' }">
          <img src="../assets/santa_files/down-arrow.png" alt="Scroll Down">
        </div>
      </section>
      <section class="second-page" id="second-page">
        <div class="santa-vs-babu clickable" @click="goHome">
          <img src="../assets/santa_files/VS.png" alt="SANTA VS TOVLIS BABU">
        </div>
        <div class="cols">
          <div class="col col-first" @click="choose('babu')">
            <div class="imgs">
              <img src="../assets/santa_files/babu-hover.png" alt="Tovlis babua hover" class="hover-image"
                   v-if="!voted">
              <img src="../assets/santa_files/babu.png" alt="Tovlis babua" class="main-image">
            </div>
          </div>
          <div class="col col-second" @click="choose('santa')">
            <div class="imgs">
              <img src="../assets/santa_files/santa-hover.png" alt="Santa claus" class="hover-image" v-if="!voted">
              <img src="../assets/santa_files/santa.png" alt="Santa claus" class="main-image">
            </div>
          </div>
        </div>
        <div class="make-choice-button" v-if="!voted">
          <img src="../assets/santa_files/left-arrow.png">
          <img src="../assets/santa_files/left-arrow.png" class="reverse">
          <button>
            გააკეთე არჩევანი
          </button>
        </div>
        <transition name="fade">
          <div class="speech-bubble" :class="choice" v-if="voted">
            <p>{{text}}</p>
          </div>
        </transition>
      </section>
      <section class="third-page">
        <div class="icon-snowflake very-big" style="right:0; bottom: 106px;"></div>
        <div class="icon-snowflake big" style="bottom: 48px;"></div>
        <div class="icon-snowflake medium" style="right: 85%; top: 37%;"></div>
        <div class="icon-snowflake small" style="bottom: 8%; left: 64%;"></div>
        <div class="babu-card"></div>
        <div class="santa-card"></div>
        <div class="section-separator">
          <img src="../assets/santa_files/separator.png">
        </div>
        <div class="content">
          <p>
            იმისთვის რომ მოიგოთ <span>200 ლარიანი ვაუჩერი</span>, გააკეთეთ შენაძენი თბილისი მოლის ტერიტორიაზე არსებულ
            ნებისმიერ სავაჭრო ობიექტში, იმავე დღეს მოიტანეთ სალაროს ქვითარი თბილისი მოლის მეორე სართულზე ვაიკიკის
            ატრიუმში მოწყობილ ხმის მიცემის პუნქტთან, დაგვიტოვოთ თქვენი მონაცემები და ჩვენ დღის ბოლოს გამოვავლენთ ყველაზე
            დიდი ღირებულების ქვითრის მფლობელს, რომელიც თბილისი მოლის 200 ლარიანი სასაჩუქრე ბარათით დაჯილდოვდება.
          </p>
        </div>
        <div class="section-separator">
          <img src="../assets/santa_files/separator.png">
        </div>
      </section>
      <section class="terms">
        <div class="terms-text">
          <img src="../assets/santa_files/wesebi-da-pirobebi.png">
        </div>
        <a
          href="https://bucketeer-06ddb2e0-9e6b-41fd-887f-2e5fabcd2cc6.s3.amazonaws.com/f125f576-423d-4e8e-9f13-bd9243f6c061.pdf">
          <img src="../assets/santa_files/Download@2x.png" alt="">
        </a>
      </section>
      <section class="footer">
        <div class="logo-footer clickable" @click="goHome">
          <img src="../assets/santa_files/Promo_web_2_0005_Logo.png" alt="TBMall">
        </div>
        <h6>მისამართი</h6>
        <span class="address">16 km Agmashenebeli Alley,<br>0131 Tbilisi, Georgia</span>
        <span class="email">info@tbilisimall.com</span>
        <span class="phone">+995 322 505 556</span>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'promo-page',
  mounted: function () {
    this.$store.commit('SET_NO_SCROLL', true)
    this.$store.commit('SET_LOADING_STATE', { model: 'page', value: false })
  },
  beforeDestroy: function () {
    this.$store.commit('SET_NO_SCROLL', false)
  },
  data: () => {
    return {
      voted: false,
      choice: ''
    }
  },
  methods: {
    choose: function (choice) {
      if (!this.voted) {
        this.voted = true
        this.choice = choice
      }
    },
    goHome: function () {
      this.$router.push({ name: 'home', params: { locale: this.locale } })
    }
  },
  computed: {
    text: function () {
      return this.choice === 'santa' ? 'ოჰო ჰო ჰო! შენმა არჩევანმა ძლიერ გამახარა! გილოცავ შობასა და ახალ წელს!' : 'ჩემო კარგო! დიდ მადლობას მოგასენებ ასეთი პატივისთვის! შემოვდგი ფეხი, გფარავდეს ღმერთი!'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~dejavu-sans-bold/css/dejavu-sans-bold.min.css";
@import "~bpg-mrgvlovani/css/bpg-mrgvlovani.min.css";

#promo-page {
  position: fixed;
  z-index: 999999;
  background: #1f863d;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  .clickable{
    cursor: pointer;
  }
  .icon-candy {
    background: url(../assets/santa_files/Candy.png) no-repeat;
    position: absolute;
    background-size: 100%;
    z-index: 3;
    width: 20%;
    height: 73%;
    @media screen and (max-width: 500px) {
      background-position: 0 14%;
    }
  }
  .babu-card {
    position: absolute;
    background-size: 100%;
    z-index: 3;
    width: 27%;
    height: 460px;
    background: url(../assets/santa_files/15X6-Santa-vs-babu-OOH_0009_Group-3.png) no-repeat center;
    background-size: contain;
    bottom: 14%;
    left: -93px;
    @media screen and (max-width: 1680px) {
      bottom: 0;
    }
  }
  .santa-card {
    position: absolute;
    background-size: 100%;
    z-index: 3;
    width: 30%;
    height: 542px;
    background: url(../assets/santa_files/15X6-Santa-vs-babu-OOH_0010_Group-2.png) no-repeat 124px 26px;
    background-size: contain;
    top: 0;
    left: 70%;
    @media screen and (max-width: 1350px) {
      top: 123px;
      left: 70%;
    }
  }
  .icon-snowflake {
    background: url(../assets/santa_files/snowflake.png) no-repeat;
    position: absolute;
    background-size: 100%;
    z-index: 3;
    &.very-big {
      height: 238px;
      width: 234px;
      background: url(../assets/santa_files/Snow-5.png) no-repeat;
    }
    &.big {
      height: 174px;
      width: 174px;
    }
    &.medium {
      height: 99px;
      width: 88px;
    }
    &.small {
      height: 93px;
      width: 81px;
    }
    &.very-small {
      height: 58px;
      width: 58px;
    }
  }
  .page-wrapper {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      background: #637491;
      width: 50%;
      left: 0;
      height: 100%;
    }
  }
  .first-page {
    position: relative;
    z-index: 999999;
    .very-big {
      @media screen and (max-width: 790px) {
        display: none;
      }
    }
    .header {
      display: flex;
      @media screen and (max-width: 760px) {
        flex-direction: column;
      }
      .logo-container {
        position: absolute;
        left: 140px;
        top: 62px;
        width: 4.8%;
        img {
          width: 100%;
          height: auto;
        }
        @media screen and (max-width: 1050px) {
          min-width: 49px;
        }
        @media screen and (max-width: 760px) {
          position: static;
          top: auto;
          left: auto;
          margin: 18px auto;
        }
      }
      .santa-vs-babu {
        margin: 45px auto;
        width: 34.7%;
        @media screen and (max-width: 1662px) {
          font-size: 32px;
          min-width: 300px;
        }
        @media screen and (max-width: 760px) {
          margin: 0 auto 45px;
        }
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .content {
      max-width: 1640px;
      width: 98%;
      margin: 0 auto;
      display: flex;
      z-index: 4;
      position: relative;
      @media screen and (max-width: 1050px) {
        flex-direction: column;
        position: relative;
        padding-top: 281px;
        width: 276px;
      }
      .description {
        width: 31.6%;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1050px) {
          order: 2;
          margin: auto;
          width: 100%;
          position: relative;
          z-index: 2;
        }
        h1 {
          font-size: 47px;
          color: #ffffff;
          display: flex;
          margin: auto 0 8px;
          flex-direction: column;
          font-family: "DejaVu Sans Bold", sans-serif;
          text-shadow: 0 3px 6px rgba(0, 0, 0, 0.42);
          @media screen and (max-width: 1662px) {
            font-size: 32px;
          }
          @media screen and (max-width: 1050px) {
            font-size: 26px;
          }
          span {
            margin: 8px 0;
          }
        }
        h2 {
          opacity: 0.6;
          font-size: 28px;
          margin: 0 0 16px;
          line-height: 1.39;
          font-family: "BPG Mrgvlovani", sans-serif;
          color: #ffffff;
          @media screen and (max-width: 1050px) {
            font-size: 15px;
          }
        }
        p {
          font-size: 19px;
          margin: 0 0 auto;
          line-height: 1.37;
          font-family: "BPG Mrgvlovani", sans-serif;
          opacity: 1;
          color: #ffffff;
          @media screen and (max-width: 1050px) {
            font-size: 10px;
          }
        }
      }
      .santas {
        margin: 0 auto;
        width: 30%;
        @media screen and (max-width: 1050px) {
          order: 1;
          position: absolute;
          top: 0;
          left: 50%;
          width: 100%;
          transform: translateX(-50%);
        }
        img {
          width: 100%;
          height: auto;
          @media screen and (max-width: 1050px) {
            width: 100%;
            height: 351px;
            object-fit: contain;
          }
        }
      }
      .scroll-down-button {
        width: 31.6%;
        display: flex;
        @media screen and (max-width: 1050px) {
          order: 3;
          margin: 20px auto;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        button {
          margin: auto;
          background: #ed1c24;
          border: 3px solid #b40209;
          border-radius: 17px;
          padding: 22px 0 28px;
          width: 100%;
          color: #ffffff;
          font-size: 47px;
          outline: none;
          font-family: "DejaVu Sans Bold", sans-serif;
          @media screen and (max-width: 1662px) {
            font-size: 32px;
          }
          @media screen and (max-width: 1050px) {
            font-size: 23px;
            padding: 11px;
          }
        }
      }
    }
    .scroll-down-arrow {
      text-align: center;
      margin-top: 101px;
      cursor: pointer;
      @media screen and (max-width: 1050px) {
        margin-top: 0;
      }
    }
  }
  .second-page {
    position: relative;
    z-index: 999999;
    padding-top: 110px;
    .santa-vs-babu {
      text-align: center;
      z-index: 9;
      position: absolute;
      top: 213px;
      left: 50%;
      width: 34.7%;
      transform: translateX(-50%);
      @media screen and (max-width: 1600px) {
        top: 60px;
      }
      @media screen and (max-width: 1050px) {
        min-width: 300px;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
    .cols {
      display: flex;
      .col {
        flex: 1;
        position: relative;
        &.col-first {
          margin-right: auto;
          .imgs {
            position: relative;
            height: 900px;
            display: flex;
            overflow: hidden;
            cursor: pointer;
            @media screen and (max-width: 1600px) {
              height: 655px;
            }
            @media screen and (max-width: 542px) {
              height: 401px;
            }
            &:hover {
              .hover-image {
                opacity: 1;
                transform: translateX(-25%);
              }
            }
            .main-image {
              width: auto;
              z-index: 2;
              height: 100%;
              position: relative;
              transform: translateX(-10px);
              object-fit: contain;
              object-position: left;
              @media screen and (max-width: 870px) {
                height: 100%;
                width: 100%;
                object-fit: contain;
                object-position: left;
              }
            }
            .hover-image {
              position: absolute;
              z-index: 0;
              transition: all 0.5s;
              opacity: 0;
              transform: translateX(-29%);
              height: 100%;
              width: auto;
              @media screen and (max-width: 870px) {
                display: none;
              }
            }
            img {
              width: 100%;
              display: block;
            }
          }
        }
        &.col-second {
          margin-left: auto;
          .imgs {
            position: relative;
            height: 900px;
            display: flex;
            overflow: hidden;
            cursor: pointer;
            @media screen and (max-width: 1600px) {
              height: 655px;
            }
            @media screen and (max-width: 542px) {
              height: 401px;
            }
            &:hover {
              .hover-image {
                opacity: 1;
                transform: translateX(9%);
              }
            }
            .main-image {
              width: auto;
              z-index: 2;
              height: 100%;
              position: relative;
              transform: translateX(10px);
              margin-left: auto;
              object-fit: contain;
              object-position: left;
              @media screen and (max-width: 870px) {
                height: 100%;
                width: 100%;
                object-fit: contain;
                object-position: right;
              }
            }
            .hover-image {
              position: absolute;
              z-index: 0;
              right: 0;
              opacity: 0;
              height: 100%;
              width: auto;
              transform: translateX(13%);
              transition: all 0.5s;
              @media screen and (max-width: 870px) {
                display: none;
              }
            }
            img {
              width: 100%;
              display: block;
            }
          }
        }
      }
    }
    .make-choice-button {
      position: absolute;
      left: 50%;
      top: 65%;
      transform: translate(-50%, -50%);
      @media screen and (max-width: 1050px) {
        top: 37%;
      }
      img {
        display: block;
        position: absolute;
        top: 50%;
        left: 99%;
        transform: translateY(-50%);
        z-index: 2;
        &.reverse {
          right: 99%;
          left: auto;
          transform: rotate(180deg) translateY(50%);
        }
        @media screen and (max-width: 1050px) {
          width: 25px;
        }
        @media screen and (max-width: 370px) {
          width: 13px;
        }
      }
      button {
        background: #ed1c24;
        border: 3px solid #b40209;
        border-radius: 17px;
        padding: 22px 44px 28px;
        width: 100%;
        z-index: 3;
        color: #ffffff;
        position: relative;
        font-size: 47px;
        outline: none;
        font-family: "DejaVu Sans Bold", sans-serif;
        @media screen and (max-width: 1662px) {
          font-size: 32px;
        }
        @media screen and (max-width: 1050px) {
          font-size: 14px;
          padding: 8px;
        }
      }
    }
  }
  .terms {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    .terms-text {
      color: #fff;
      margin: 329px auto 70px;
      width: 80%;
      max-width: 369px;
      img {
        width: 100%;
        height: auto;
      }
      @media screen and (max-width: 1050px) {
        margin: 76px auto 20px;
      }
    }
    a {
      margin: 0 auto 150px;
      @media screen and (max-width: 1050px) {
        margin: 0 auto;
      }
      img {
        height: 66px;
        width: auto;
      }
    }
  }
  .section-separator {
    width: 1110px;
    display: flex;
    margin: 0 auto;
    @media screen and (max-width: 1190px) {
      width: 90%;
      margin: 0 auto;
    }
    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .third-page {
    position: relative;
    z-index: 999999;
    padding-top: 113px;
    @media screen and (max-width: 1200px) {
      .icon-snowflake {
        display: none;
      }
    }
    @media screen and (max-width: 1050px) {
      padding-top: 50px;
    }
    .content {
      margin: 303px auto;
      width: 95%;
      max-width: 1111px;
      @media screen and (max-width: 1050px) {
        margin: 119px auto;
      }
      @media screen and (max-width: 500px) {
        margin: 50px auto;
      }
      p {
        font-family: 'BPG Mrgvlovani', 'sans-serif';
        font-size: 23px;
        line-height: 1.96;
        color: #fff;
        opacity: 1;
        text-align: center;
        @media screen and (max-width: 1050px) {
          font-size: 15px;
          width: 80%;
          margin: 0 auto;
        }
        @media screen and (max-width: 1050px) {
          font-size: 12px;
        }
        span {
          font-size: 41px;
          color: #ffb300;
          @media screen and (max-width: 1050px) {
            font-size: 30px;
          }
          @media screen and (max-width: 500px) {
            font-size: 21px;
          }
        }
      }
    }
  }
  .footer {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    background: url('../assets/santa_files/Footer_bg.svg') no-repeat center top;
    background-size: cover;
    .logo-footer {
      margin: 295px auto 118px;
    }
    h6 {
      font-family: 'BPG Nino Mtavruli', 'sans-serif';
      font-size: 30px;
      line-height: 1.13;
      color: #3a3838;
      text-align: center;
      margin-bottom: 30px;
    }
    span {
      margin: 0 auto;
      text-align: center;
      color: #848484;
    }
    .address {
      margin-bottom: 70px;
      line-height: 1.28;
      font-size: 18px;
    }
    .email, .phone {
      font-size: 14px;
      margin-bottom: 27px;
    }
  }
  .speech-bubble {
    position: absolute;
    background: #d8b467;
    border-radius: 40px;
    top: 40%;
    left: 50%;
    width: 39%;
    transform: translateX(-50%);
    padding: 125px 64px;
    opacity: 1;
    &.fade-enter-active{
      animation: fadeIn 0.3s;
    }
    @media screen and (max-width: 1600px) {
      top: 28%;
      padding: 65px 64px;
    }
    @media screen and (max-width: 1050px) {
      top: 18%;
      padding: 17px 45px;
      height: 148px;
      display: flex;
    }
    @media screen and (max-width: 543px) {
      top: 27%;
      padding: 17px 7px;
      width: 50%;
      z-index: 9;
    }
    p {
      font-size: 32px;
      font-family: "BPG Mrgvlovani", 'sans-serif';
      color: #ffffff;
      line-height: 1.66;
      text-align: center;
      opacity: 1;
      z-index: 2;
      position: relative;
      @media screen and (max-width: 1600px) {
        font-size: 21px;
      }
      @media screen and (max-width: 1050px) {
        font-size: 12px;
        margin: auto;
      }
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      z-index: 1;
      height: 0;
      left: 50%;
      border: 252px solid transparent;
      border-top-color: #d8b467;
      border-bottom: 0;
      border-left: 0;
      margin-left: -252px;
      margin-bottom: -147px;
      transform: rotate(24deg);
      @media screen and (max-width: 1660px) {
        left: 276px;
      }
      @media screen and (max-width: 1050px) {
        border: 90px solid transparent;
        border-top-color: #d8b467;
        left: 222px;
        transform: rotate(165deg);
        top: -13px;
      }
      @media screen and (max-width: 543px) {
        border: 69px solid transparent;
        border-top-color: #d8b467;
        left: 226px;
        top: 19px;
      }
    }
    &.santa:before {
      left: 80%;
      transform: rotate(65deg);
      @media screen and (max-width: 1050px) {
        border: 90px solid transparent;
        border-top-color: #d8b467;
        left: 115%;
        transform: rotate(79deg);
        top: 49px;
      }
      @media screen and (max-width: 543px) {
        border: 69px solid transparent;
        border-top-color: #d8b467;
        left: 153%;
      }
    }
  }
}
</style>
