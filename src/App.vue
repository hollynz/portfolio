<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow-y: hidden;
  body {
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: url("./assets/mt-cook.jpg") center / cover;
    display: flex;
    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      p {
        margin: 0;
        padding: 0;
      }
      a {
        color: #051439;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
}
</style>
