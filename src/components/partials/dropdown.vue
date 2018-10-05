<template>
  <div class="nav-drop">
    <router-link :to="this.item.url" :class="this.item.children !== undefined ? 'has-child' : ''">{{this.item.name}}</router-link>
    <font-awesome-icon icon="caret-down" class="open" v-if="this.item.children !== undefined"/>
    <!--<div v-if="this.item.children !== undefined" class="drop">-->
      <!--<ul>-->
        <!--<li v-for="child in this.item.children" v-bind:key="child.url">-->
          <!--<router-link :to="item.url">{{child.name}}</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>

<script>

export default {
  name: 'nav-drop',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-drop {
    .has-child{
      margin-right: 0.46rem;
      display: inline-block;
    }
    .drop{
      position: absolute;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
