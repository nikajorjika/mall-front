<template>
  <div id="hamburger-menu">
    <div class="hamburger-container" @click="toggleHamburgerMenu">
      <default-icon class="nav-hamburger" :icon="`bars`"/>
    </div>
    <div class="content-container" v-if="showMenu">
      <div class="search-wrapper">
        <default-icon :icon="`close`" @click="toggleHamburgerMenu"/>
      </div>
      <div class="list-container" v-for="data in this.hamburgerData" v-bind:key="data.id">
        <h3 class="block-title">{{data.name}}</h3>
        <ul v-if="data.children !== undefined">
          <li v-for="child in data.children" v-bind:key="child.id">
            <router-link :to="child.url">
              {{child.name}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

import store from '../../store'
import DefaultIcon from './DefaultIcons'

export default {
  name: 'hamburger-menu',
  data: function () {
    return {
      hamburgerData: store.state.hamburgerData,
      showMenu: false
    }
  },
  methods: {
    toggleHamburgerMenu: function () {
      this.showMenu = !this.showMenu
    }
  },
  components: {
    DefaultIcon
  }
}
</script>

<style lang="scss" scoped>
#hamburger-menu{
  height: 100%;
  .hamburger-container{
    height: 100%;
    display: flex;
    cursor: pointer;
    &:hover{
      background: #f1f1f1;
    }
    .nav-hamburger{
      padding: 0 2.9rem;
      margin:auto 0;
    }
  }
  .content-container{
         position: fixed;
         top: 0;
         left:0;
         right: 0;
         bottom:0;
         background: #ffff;
         z-index: 3;
         padding: 2.21rem 3.52rem;
         .close{
           font-size:1.4rem;
         }
         .block-title{
           text-align: center;
           font-size: 4rem;
           font-weight: 300;
           font-style: normal;
           font-stretch: normal;
           line-height: 1.25;
           letter-spacing: normal;
           color: #000000;
           margin: 2.5rem;
         }
         ul{
           li{
             font-family: Muli, sans-serif;
             font-size: 1.6rem;
             margin: 1.5rem;
             font-weight: 300;
             font-style: normal;
             font-stretch: normal;
             line-height: 1.25;
             letter-spacing: normal;
             text-align: center;
             color: #848484;
             text-transform: capitalize;
           }
         }
         .search-wrapper{
         }
       }
}
</style>
