<template>
  <div class="container menu-container">
    <!-- menu: about -->
    <div @mouseover="mouseover('about')" @mouseleave="setMenusFalse()" v-bind:class="{ visible: activeMenus[0], notVisible: activeMenus[1] || activeMenus[2]}" id="about" class="menu">
      <i class="fas fa-user menu-icon"></i>
      <div class="content">
        <!-- <img class="nz-map" src="../assets/nz-map.png" alt="Map of NZ"> -->
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
    <!-- menu: tech -->
    <div @mouseover="mouseover('tech')" @mouseleave="setMenusFalse()" v-bind:class="{ visible: activeMenus[1], notVisible: activeMenus[0] || activeMenus[2]}" id="tech" class="menu">
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
    <div @mouseover="mouseover('contact')" @mouseleave="setMenusFalse()" v-bind:class="{ visible: activeMenus[2], notVisible: activeMenus[0] || activeMenus[1]}" id="contact" class="menu">
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
  name: "Menu",
  data: function() {
    return {
      activeMenus: [false, false, false]
    }
  },
  methods: {
      mouseover: function(menu){
        switch(menu){
          case 'about':
            this.activeMenus = [true, false, false];
            break;
          case 'tech':
            this.activeMenus = [false, true, false];
            break;
          case 'contact':
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
  // #about {
  //   position: relative;
  //   overflow: hidden;
  //   .nz-map {
  //     z-index: -1;
  //     position: absolute;
  //     height: 100%;
  //     right: 5%;
  //     top: 3%;
  //     opacity: 0.2;
      
  //   }
  // }
  #about {
    left: 0;
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