<template>
  <div id="nav-drop">
    <router-link :to="this.item.url">{{this.item.name}}</router-link>
    <i v-if="this.item.children !== undefined" class="fa fa-arrow-down"></i>
    <div v-if="this.item.children !== undefined" class="drop">
      <ul>
        <li v-for="child in this.item.children" v-bind:key="child.url">
          <router-link :to="item.url">{{child.name}}</router-link>
        </li>
      </ul>
    </div>
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
  #nav-drop {
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
