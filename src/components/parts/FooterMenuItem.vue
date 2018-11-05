<template>
  <div class="footer-menu-item">
    <div class="title-container">
      <h4 class="title">{{this.title}}</h4>
    </div>
    <div class="content-container">
      <ul class="content-ul">
        <li v-for="item in this.items.list" v-bind:key="item.name" class="content-li">
          <router-link :to="item.url">
            <div class="item-wrapper">
              {{item.name}}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'footer-menu-item',
  props: {
    title: {
      type: String
    },
    items: {
      type: Object,
      default: () => {
        return {
          title: '',
          list: []
        }
      }
    }
  }
}
</script>
<style lang="scss">
  .footer-menu-item{
    &.mini{
      .title-container{
        .title{
          margin:21px 0 7px;
        }
      }
      .content-container{
        .content-ul{
          .content-li{
            .item-wrapper{
              margin: 7px 0;
            }
          }
        }
      }
    }
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
          .item-wrapper{
            font-family: 'Muli Light','BPG Arial', 'sans-serif';
            font-size: 1.4rem;
            font-weight: 300;
            line-height: 1.29;
            color: #3a3838;
            margin: 28px 0;
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
