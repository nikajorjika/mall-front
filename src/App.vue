<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<style lang="scss">

html{
  font-size:10px;
  line-height: 1;
}
@font-face {
  font-family: 'Muli';
  src: url('./assets/fonts/OpenSans-Regular.ttf');
}
@font-face {
  font-family: 'Muli Light';
  src: url('./assets/fonts/OpenSans-Light.ttf');
}
@font-face {
  font-family: 'Muli Bold';
  src: url('./assets/fonts/OpenSans-SemiBold.ttf');
}
#app {
  font-family: 'Muli', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  a{
    color: inherit;
    text-decoration: none;
    &:hover{
      text-decoration: none;
    }
  }
}
ul{
  list-style: none;
  padding:0;
  margin:0;
}
</style>
