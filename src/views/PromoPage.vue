<template>
  <div id="promo-page">
    <div class="page-wrapper">
      <section class="first-page">
        <div class="header">
          <div class="logo-container">
            <img src="../assets/santa_files/Logo.png" alt="TM Logo">
          </div>
          <div class="santa-vs-babu">
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
            <img src="https://placehold.it/431x709" alt="Santa Or Tovlis babua">
          </div>
          <div class="scroll-down-button">
            <button>
              გააკეთე არჩევანი
            </button>
          </div>
        </div>
        <div class="scroll-down-arrow">
          <img src="../assets/santa_files/down-arrow.png" alt="Scroll Down">
        </div>
      </section>
      <section class="second-page">
        <div class="santa-vs-babu">
          <img src="../assets/santa_files/VS.png" alt="SANTA VS TOVLIS BABU">
        </div>
        <div class="cols">
          <div class="col col-first">
            <div class="imgs">
              <img src="../assets/santa_files/churchxela.png" alt="Churchxela" class="on-hover churchxela">
              <img src="../assets/santa_files/xurjini.png" alt="xurjini" class="on-hover xurjini">
              <img src="../assets/santa_files/chichilaki-vs-nadzvis-xe.png" alt="chichilaku" class="on-hover chichilaki">
              <img src="../assets/santa_files/babu.png" alt="Tovlis babua" class="main-image">
            </div>
          </div>
          <div class="col col-second">
            <div class="imgs">
              <img src="../assets/santa_files/winda.png" alt="tomara" class="on-hover winda">
              <img src="../assets/santa_files/tomara-sachuqrebit.png" alt="tomara" class="on-hover sachuqrebi">
              <img src="../assets/santa_files/santas-marxili.png" alt="marxili" class="on-hover marxili">
              <img src="../assets/santa_files/santa.png" alt="Santa claus" class="main-image">
            </div>
          </div>
        </div>
        <div class="make-choice-button">
          <img src="../assets/santa_files/left-arrow.png" >
          <img src="../assets/santa_files/left-arrow.png" class="reverse">
          <button>
            გააკეთე არჩევანი
          </button>
        </div>
      </section>
      <section class="third-page">
        <div class="icon-snowflake very-big" style="right:0; bottom: 106px;"></div>
        <div class="icon-snowflake big" style="bottom: 48px;"></div>
        <div class="icon-snowflake medium" style="right: 85%; top: 37%;"></div>
        <div class="icon-snowflake small" style="bottom: 8%; left: 64%;"></div>
        <div class="babu-card"></div>
        <div class="santa-card"></div>
        <div class="section-separator">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
        <div class="content">
          <p>
            იმისთვის რომ მოიგოთ <span>200 ლარიანი ვაუჩერი</span>, გააკეთეთ შენაძენი თბილისი მოლის ტერიტორიაზე არსებულ ნებისმიერ სავაჭრო ობიექტში, იმავე დღეს მოიტანეთ სალაროს ქვითარი თბილისი მოლის მეორე სართულზე ვაიკიკის ატრიუმში მოწყობილ ხმის მიცემის პუნქტთან, დაგვიტოვოთ თქვენი მონაცემები და ჩვენ დღის ბოლოს გამოვავლენთ ყველაზე დიდი ღირებულების ქვითრის მფლობელს, რომელიც  თბილისი მოლის 200 ლარიანი სასაჩუქრე ბარათით დაჯილდოვდება.
          </p>
        </div>
        <div class="section-separator">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
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
  .icon-candy {
    background: url(../assets/santa_files/Candy.png) no-repeat;
    position: absolute;
    background-size: 100%;
    z-index: 3;
    width: 20%;
    height: 73%;
  }
  .babu-card{
    position: absolute;
    background-size: 100%;
    z-index: 3;
    width: 436px;
    height: 460px;
    background: url(../assets/santa_files/15X6-Santa-vs-babu-OOH_0009_Group-3.png) no-repeat;
    background-size: contain;
    bottom: 14%;
    left: -93px;
  }
  .santa-card{
    position: absolute;
    background-size: 100%;
    z-index: 3;
    width: 504px;
    height: 542px;
    background: url(../assets/santa_files/15X6-Santa-vs-babu-OOH_0010_Group-2.png) no-repeat 36px -10px;
    background-size: 138% auto;
    top:0;
    right: 0;
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
    .header {
      display: flex;
      .logo-container {
        position: absolute;
        left: 140px;
        top: 62px;
        width: 4.8%;
        img {
          width: 100%;
          height: auto;
        }
      }
      .santa-vs-babu {
        margin: 45px auto;
        width: 34.7%;
        @media screen and (max-width: 1662px) {
          font-size: 32px;
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
      .description {
        width: 31.6%;
        display: flex;
        flex-direction: column;
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
        }
        p {
          font-size: 19px;
          margin: 0 0 auto;
          line-height: 1.37;
          font-family: "BPG Mrgvlovani", sans-serif;
          opacity: 1;
          color: #ffffff;
        }
      }
      .santas {
        margin: 0 auto;
        width: 30%;
        img {
          width: 100%;
          height: auto;
        }
      }
      .scroll-down-button {
        width: 31.6%;
        display: flex;
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
        }
      }
    }
    .scroll-down-arrow {
      text-align: center;
      margin-top: 101px;
    }
  }
  .second-page {
    position: relative;
    z-index: 999999;
    padding-top: 110px;
    .santa-vs-babu {
      text-align: center;
      position: absolute;
      top: 213px;
      left: 50%;
      transform: translateX(-50%);
    }
    .cols {
      display: flex;
      .col {
        flex: 1;
        position: relative;
        &.col-first{
          margin-right: auto;
          .imgs{
            position: relative;
            height: 900px;
            display: flex;
            overflow: hidden;
            .main-image{
              width: auto;
              z-index: 2;
              height: 100%;
              position: relative;
              transform: translateX(-10px);
            }
            .on-hover{
              position: absolute;
              z-index: 1;
              transition: transform 0.3s;
              &.churchxela{
                width:470px;
                top: -11%;
                bottom: 36%;
                transform: rotate(-90deg) translate(-100%, -100%);
              }
              &.chichilaki{
                width: 756px;
                bottom: 19%;
                left: -41px;
                transform: rotate(7deg) translate(-100%, 100%);
              }
              &.xurjini{
                width: 538px;
                bottom: 7%;
                left: -41px;
                transform: rotate(7deg) translate(-200%, -100%);
              }
            }
            img{
              width:100%;
              display: block;
            }
            &:hover{
              .churchxela{
                transform: rotate(-90deg) translate(0);
              }
              .chichilaki{
                transform: rotate(7deg) translate(0);
              }
              .xurjini{
                transform: rotate(7deg) translate(0);
              }
            }
          }
        }
        &.col-second{
          margin-left: auto;
          .imgs{
            position: relative;
            height: 900px;
            display: flex;
            overflow: hidden;
            .main-image{
              width: auto;
              z-index: 2;
              height: 100%;
              position: relative;
              transform: translateX(10px);
              margin-left: auto;
            }
            .on-hover{
              position: absolute;
              z-index: 1;
              transition: transform 0.3s;
              &.winda{
                width: 488px;
                top: -106px;
                right: 0;
                transform: translate(100%, 100%);
              }
              &.sachuqrebi{
                width: 767px;
                bottom: 132px;
                left: 213px;
                transform: translate(100%, 100%);
              }
              &.marxili{
                width: 826px;
                bottom: -72px;
                right: -115px;
                transform: rotate(10deg) translate(100%, -100%);
              }
            }
            img{
              width:100%;
              display: block;
            }
            &:hover{
              .sachuqrebi{
                transform:translate(0);
              }
              .marxili{
                transform:rotate(10deg)  translate(0);
              }
              .winda{
                transform: translate(0);
              }
            }
          }
        }
      }
    }
    .make-choice-button{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img{
        display: block;
        position: absolute;
        top: 50%;
        left: 99%;
        transform: translateY(-50%);
        z-index: 2;
        &.reverse{
          right: 99%;
          left: auto;
          transform: rotate(180deg) translateY(50%);
        }
      }
      button{
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
      }
    }
  }
  .section-separator{
    width: 1110px;
    display: flex;
    margin:  0 auto;
    .circle{
      border-radius: 50%;
      height: 23px;
      max-width:23px;
      flex:1;
      margin: 0 21px;
      border: 3px solid #ffffff;
    }
    .line {
      flex: 1;
      margin: auto;
      border-top: 3px solid #fff;
    }
  }
  .third-page{
    position: relative;
    z-index: 999999;
    padding-top: 113px;
    .content{
      margin:303px auto;
      width: 95%;
      max-width:1111px;
      p{
        font-family: 'BPG Mrgvlovani','sans-serif';
        font-size: 23px;
        line-height: 1.96;
        color: #fff;
        opacity: 1;
        text-align: center;
        span{
          font-size: 41px;
          color: #ffb300;
        }
      }
    }
  }
}
</style>
