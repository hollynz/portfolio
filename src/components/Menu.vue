<template>
  <div class="container menu-container">
    <!-- menu: about -->
    <div
      @mouseover="setMenuActive('about')"
      @mouseleave="setMenusFalse()"
      v-bind:class="{ visible: activeMenus[0], notVisible: activeMenus[1] || activeMenus[2]}"
      id="about"
      class="menu"
    >
      <!-- <i class="fas fa-user menu-icon"></i> -->
      <i class="fas fa-music menu-icon"></i>
      <div class="content">
        <!-- <img class="nz-map" src="../assets/nz-map.png" alt="Map of NZ"> -->
        
        <!-- <h1>An average day:</h1> -->
        <!-- <div>
          <ul>
            <li><a href="https://pinkbike.com/" target="_blank">Bike.</a></li>
            <li><a href="https://www.youtube.com/user/RHCPtv" target="_blank">Music.</a></li>
            <li><a href="https://www.trimble.com/" target="_blank">Work.</a></li>
          </ul>
        </div> -->


        <!-- <div class="row"><div>Red </div><div class="holly"> H</div><div>ot Chili Peppers</div></div>
        <div>O</div>
        <div>L</div>
        <div>L</div>
        <div>Y</div> -->
        <iframe src="https://www.youtube.com/embed/txTqtm58AqM?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <!-- <h1>Holly.</h1> -->
        
        <!-- <ul>
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
        </ul> -->
      </div>
    </div>
    <!-- menu: tech -->
    <div
      @mouseover="setMenuActive('tech')"
      @mouseleave="setMenusFalse()"
      v-bind:class="{ visible: activeMenus[1], notVisible: activeMenus[0] || activeMenus[2]}"
      id="tech"
      class="menu"
    >
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
    <!-- menu: contact -->
    <div
      @mouseover="setMenuActive('contact')"
      @mouseleave="setMenusFalse()"
      v-bind:class="{ visible: activeMenus[2], notVisible: activeMenus[0] || activeMenus[1]}"
      id="contact"
      class="menu"
    >
      <i class="fas fa-at menu-icon"></i>
      <div class="content">
        <div>
          <ul>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <a href="https://www.google.com/maps/place/Christchurch/@-43.5127894,172.3188943,10z/data=!3m1!4b1!4m5!3m4!1s0x6d322f4863c5ed01:0x500ef8684799945!8m2!3d-43.5320544!4d172.6362254" target="_blank">Christchurch, New Zealand</a>
            </li>
            <li>
              <i class="fas fa-laptop-code"></i>
              <a href="https://www.trimble.com/" target="_blank">Trimble</a>
            </li>
            <!-- <li>
              <i class="far fa-envelope"></i>
              <a href>Email me</a>
            </li>-->
            <li>
              <i class="fab fa-github"></i>
              <a href="https://www.github.com/hollynz" target="_blank">@hollynz</a>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
              <a href="https://www.instagram.com/hollaylay" target="_blank">@hollaylay</a>
            </li>
            <li>
              <i class="fab fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/holly-johnson-nz/" target="_blank">Holly Johnson</a>
            </li>
          </ul>
        </div>
        <div>
          <form action="submit">
            <input type="name">
            <input type="email">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: function() {
    return {
      activeMenus: [false, false, false]
    };
  },
  methods: {
    setMenuActive: function(menu) {
      switch (menu) {
        case "about":
          this.activeMenus = [true, false, false];
          break;
        case "tech":
          this.activeMenus = [false, true, false];
          break;
        case "contact":
          this.activeMenus = [false, false, true];
          break;
      }
      console.log(this.activeMenus);
    },
    setMenusFalse: function() {
      this.activeMenus = [false, false, false];
      console.log(this.activeMenus);
    }
  }
};
</script>

<style lang="scss">
.visible {
  visibility: visible;
}
.notVisible {
  visibility: hidden;
}
.menu-container {
  margin: 5% auto;
  //   background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  // position: relative;
  height: 70vh;
  .menu {
    z-index: 2;
    width: 80px;
    height: 80px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    .menu-icon {
      font-size: 40px;
      color: #5e7ca0;
      color: rgba(255, 255, 255, 0.3);
    }
    .content {
      display: none;
    }
    &:hover {
      // overflow-y: scroll;
      background: rgba(255, 255, 255, 0.9);
      cursor: auto;
      width: 100%;
      height: 600px;
      margin: 0;
      // margin-bottom: 50vh;
      transition: all 0.5s ease;
      // position: absolute;
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
  #about {
    left: 0;
    padding: 0;
    .content {
      padding: 0;
      width: 100%;
      height: 100%;
      position: relative;
      iframe {
        width: 100%;
        height: 100%;
      }
      h1 {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 4em;
        color: rgba(203, 8, 8, 0.7);
      }
    }
  }
  #tech {
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  #contact {
    right: 0;
  }
}
</style>