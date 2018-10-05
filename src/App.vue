<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/app.scss";

#app {
  font-family: 'Muli', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
