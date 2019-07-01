<template>
  <div class="container">
    <div class="menu about">
      <i class="fas fa-user menu-icon"></i>
      <div class="content">
        <h1>Kia ora.</h1>
        <ul>
          <li>
            <i class="fas fa-mountain"></i>
            <p>I'm Holly.</p>
          </li>
          <li>
            <i class="fas fa-mountain"></i>
            <p>I'm a web developer and a big fan of Vue.js.</p>
          </li>
          <li>
            <i class="fas fa-mountain"></i>
            <p>
              I work for
              <a href="https://www.trimble.com/">Trimble</a>.
            </p>
          </li>
          <li>
            <i class="fas fa-mountain"></i>
            <p>I like to ride a mountain bike and play my drums.</p>
          </li>
          <li>
            <i class="fas fa-mountain"></i>
            <p>I also like to take photos of non-mainstream mountains.</p>
          </li>
          <li>
            <i class="fas fa-mountain"></i>
            <p>I have a cool math degree.</p>
          </li>
          <li>
            <i class="fas fa-mountain"></i>
            <p>I live in Christchurch, New Zealand.</p>
          </li>
          <li>
            <i class="fas fa-mountain"></i>
            <p>You can find me out riding my bike.</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu">
      <i class="fab fa-html5 menu-icon"></i>
      <div class="content">
        <h1>Some Things I Made</h1>
        <div class="columns">
          <div class="col">content</div>
          <div class="col">content</div>
          <div class="col">content</div>
          <div class="col">content</div>
          <div class="col">content</div>
          <div class="col">content</div>
          <div class="col">content</div>
          <div class="col">content</div>
          <div class="col">content</div>
        </div>
      </div>
    </div>
    <div class="menu">
      <i class="fas fa-at menu-icon"></i>
      <div class="content">
        <ul>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            <a href>Christchurch, New Zealand</a>
          </li>
          <!-- <li>
            <i class="far fa-envelope"></i>
            <a href>Email me</a>
          </li> -->
          <li>
            <i class="fab fa-github"></i>
            <a href>@hollynz</a>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
            <a href>@hollaylay</a>
          </li>
          <li>
            <i class="fab fa-linkedin-in"></i>
            <a href>Holly Johnson</a>
          </li>
        </ul>
      </div>
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
  width: 70%;
  margin: 5% auto;
  //   background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  .menu {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.7);
    // margin: 5%;
    transition: all 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .menu-icon {
      font-size: 20px;
      color: #5e7ca0;
    }
    .content {
      display: none;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.9);
      cursor: auto;
      width: 80vw;
      height: 70vh;
      // margin: 20px;
      margin-bottom: 50vh;
      transition: all 0.4s ease-in-out;
      .menu-icon {
        display: none;
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 4%;
        ul {
          font-size: 1.6em;
          text-align: left;
          list-style: none;
          li {
            display: flex;
            flex-direction: row;
            align-content: center;
          }
        }
        .columns {
          height: 100%;
          width: 80%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0;
          flex-wrap: wrap;
          .col {
            padding: 0;
            width: 30%;
            background: rgba(0, 0, 0, 0.6);
            height: 100px;
          }
        }
      }
    }
  }
  .menu.about:hover {
    background: rgba(255,255,255, 0.7) url('../assets/nz-map.png') top right / contain;
    background-repeat: no-repeat;
  }
}
</style>