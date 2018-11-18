<template>
  <div class="about-page-menu">
    <div class="menu-wrapper-outer">
      <ul class="menu-wrapper">
        <li class="menu-item" v-for="(item, index) in this.items" :key="index">
          <router-link :to="`/${$store.getters.locale.locale}${item.url}`" class="name">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about-us-menu',
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    active: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
  .menu-wrapper-outer{
    height: 698px;
    border-left: solid 1px #dcdcdc;
    border-right: solid 1px #dcdcdc;
    display: flex;
    .menu-wrapper{
      margin: auto 0 auto 73px;
      .menu-item{
        a{
          font-family: 'Muli','BPG Arial', 'sans-serif';
          font-size: 1.6rem;
          padding: 12px 0;
          display: block;
          line-height: 1.25;
          color: #00000099;
          &:hover{
            color: #000000d1;
          }
          &.router-link-exact-active{
            color: #000000;
          }
        }
      }
    }
  }
</style>
