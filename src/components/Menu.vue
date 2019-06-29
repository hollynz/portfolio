<template>
    <div class="container">
      <div class="menu">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss">
.container {
  width: 90%;
  margin: 5% auto;
  background: rgba(0, 0, 0, 0.2);
  .menu {
    width: 40px;
    height: 40px;
    background: rgba(249, 249, 249, 0.8);
    margin: 5%;
    transition: all 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      width: 80vw;
      height: 100px;
      // margin: 20px;
      transition: all 0.4s ease-in-out;
      .fas {
        display: none;
      }
    }
  }
}
</style>