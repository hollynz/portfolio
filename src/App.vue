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
  // font-family: 
  body {
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: url("./assets/mt-cook.jpg") center / cover;
    overflow-y: hidden;
    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      // font-family: 'Indie Flower', cursive;
      // font-family: 'Allerta Stencil', sans-serif;
      // font-family: 'Rock Salt', cursive;
      // font-family: 'Love Ya Like A Sister', cursive;
      // font-family: 'Bungee Inline', cursive;
      // font-family: 'Faster One', cursive;
      // font-family: 'Bungee Shade', cursive;
      // font-family: 'Londrina Outline', cursive;
      // font-family: "Montserrat Subrayada", sans-serif; //good
      // font-family: 'Barrio', cursive; //good
      // font-family: 'Monofett', cursive; //good
      // font-family: 'Londrina Sketch', cursive;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      width: 100%;
      margin: 0;
      padding: 0;
      // h1 {
        // font-family: 'Indie Flower', cursive;
      // font-family: 'Allerta Stencil', sans-serif;
      // font-family: 'Rock Salt', cursive;
      // font-family: 'Love Ya Like A Sister', cursive;
      // font-family: 'Bungee Inline', cursive;
      // font-family: 'Faster One', cursive;
      // font-family: 'Bungee Shade', cursive;
      // font-family: 'Londrina Outline', cursive;
      // font-family: "Montserrat Subrayada", sans-serif; //good
      // font-family: 'Barrio', cursive; //good
      // font-family: 'Monofett', cursive; //good
      // font-family: 'Londrina Sketch', cursive;
      // }
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

// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
