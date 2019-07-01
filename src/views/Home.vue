<template>
  <div class="home">
    <Menu/>
    <div class="container">
      <!-- <div class="blurb">
        <p>Suuuhhhhhh.</p>
        <p>I like to ride my mountain bike.</p>
      </div> -->
    </div>
    <h1 class="title">Holly Johnson</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "home",
  components: {
    Menu
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  h1 {
    font-family: 'Barrio', cursive;
  }
  .blurb {
    width: 100%;
    font-size: 2em;
    line-height: 1em;
    text-align: left;
    // color: #5e7ca0;
  }
  h1.title {
    margin: -40px;
    bottom: -10px;
    right: 50px;
    position: absolute;
    font-size: 185px;
    color: rgba(255, 255, 255, 0.4);
    font-family: "Montserrat Subrayada", sans-serif;
  }
}
</style>

