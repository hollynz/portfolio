<template>
  <div class="home">
    <!-- menus -->
    <Menu/>
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
    font-family: "Rock Salt", cursive;
  }
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
    // https://codepad.co/snippet/shining-text-using-mask-image
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.5) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.5) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 5s linear infinite;
    @keyframes shine {
      from {
        -webkit-mask-position: 150%;
      }
      to {
        -webkit-mask-position: -50%;
      }
    }
  }
}
</style>

