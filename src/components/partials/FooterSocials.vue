<template>
  <div class="footer-socials-item">
    <div class="title-container">
      <h4 class="title">{{title}}</h4>
    </div>
    <div class="content-container">
      <ul class="content-ul">
        <li v-for="(item, index) in $store.getters.socials" :key="index" class="content-li">
          <a :href="item.link" target="_blank">
            <div class="item-wrapper">
              <span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: getIconName(item.name) }"/></span>
              {{item.name}}
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'footer-socials-item',
  props: {
    title: {
      type: String
    }
  }
}
</script>
<style lang="scss">
.footer-socials-item{
  .title-container{
    .title{
      font-family: 'Muli SemiBold','BPG Nino Mtavruli','sans-serif';
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 1.25;
      color: #000;
      text-transform: uppercase;
      margin:0 0 29px;
      @media screen and (max-width: 1650px) {
        font-size: 1.7rem;
        margin:0 0 18px;
      }
    }
  }
  .content-container{
    .content-ul{
      .content-li{
        a{
          .item-wrapper{
            &:hover{
              color: #999;
            }
          }
        }
        .item-wrapper{
          font-family: 'Muli Light','BPG Arial', 'sans-serif';
          font-size: 1.4rem;
          font-weight: 300;
          line-height: 1.29;
          color: #3a3838;
          margin: 28px 0;
          .icon{
            display: inline-block;
            width: 17px;
          }
          @media screen and (max-width: 1650px) {
            font-size: 1.2rem;
            margin: 17px 0;
          }
        }
      }
    }
  }
}
</style>
