<template>
  <div class="home">
    <!-- menus -->
    <Menu/>
    <!-- blurb -->
    <div class="container">
      <!-- <div class="blurb">
        <p>Suuuhhhhhh.</p>
        <p>I like to ride my mountain bike.</p>
      </div> -->
    </div>
    <!-- big title -->
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
    font-family: "Barrio", cursive;
  }

  // .blurb {
  //   width: 100%;
  //   font-size: 2em;
  //   line-height: 1em;
  //   text-align: left;
  //   // color: #5e7ca0;
  // }
  h1.title {
    margin: auto;
    width: 100%;
    margin-bottom: -40px;
    bottom: 0;
    z-index: 1;
    position: absolute;
    font-size: 212px;
    color: rgba(255, 255, 255, 0.4);
    font-family: "Montserrat Subrayada", sans-serif;
  }
}
</style>

