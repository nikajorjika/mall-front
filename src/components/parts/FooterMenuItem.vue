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
    .title-container{
      .title{
        font-family: 'Muli SemiBold','sans-serif';
        font-size: 2.4rem;
        font-weight: 600;
        line-height: 1.25;
        color: #000;
        text-transform: uppercase;
        margin:0 0 29px;
      }
    }
    .content-container{
      .content-ul{
        .content-li{
          .item-wrapper{
            font-family: 'Muli Light', 'sans-serif';
            font-size: 1.4rem;
            font-weight: 300;
            line-height: 1.29;
            color: #3a3838;
            margin: 28px 0;
          }
        }
      }
    }
  }
</style>
