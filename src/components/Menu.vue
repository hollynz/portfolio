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
      <i class="fas fa-user menu-icon"></i>
      <div class="content">
        <iframe
          src="https://www.dropbox.com/s/z6ekk77tt2bi8oj/swinger-party.mp4?raw=1"
          height="100%"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
        </ul>-->
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
        <!-- <img class="nz-map" src="../assets/nz-map.png" alt="Map of NZ"> -->
        <div class="columns is-8">
          <div class="column is-two-fifths">
            <ul>
              <li>
                <div class="icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <a
                  href="https://www.google.com/maps/place/Christchurch/@-43.5127894,172.3188943,10z/data=!3m1!4b1!4m5!3m4!1s0x6d322f4863c5ed01:0x500ef8684799945!8m2!3d-43.5320544!4d172.6362254"
                  target="_blank"
                >Christchurch, New Zealand</a>
              </li>
              <li>
                <div class="icon">
                  <i class="fas fa-laptop-code"></i>
                </div>
                <div>
                  <a href="https://www.trimble.com" target="_blank">Trimble</a>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fab fa-github"></i>
                </div>
                <a href="https://www.github.com/hollynz" target="_blank">@hollynz</a>
              </li>
              <li>
                <div class="icon">
                  <i class="fab fa-instagram"></i>
                </div>
                <a href="https://www.instagram.com/hollaylay" target="_blank">@hollaylay</a>
              </li>
              <li>
                <div class="icon">
                  <i class="fab fa-linkedin-in"></i>
                </div>
                <a
                  href="https://www.linkedin.com/in/holly-johnson-nz/"
                  target="_blank"
                >Holly Johnson</a>
              </li>
            </ul>
          </div>
          <div class="column is-three-fifths">
            <form action="submit" class="form">
              <div class="field">
                <label class="label">Name</label>
                <p class="control has-icons-left">
                  <input class="input" type="text" placeholder="Name">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <label class="label">Phone</label>
                <p class="control has-icons-left">
                  <input class="input" type="phone" placeholder="xxx-xxx-xxxx">
                  <span class="icon is-small is-left">
                    <i class="fas fa-phone"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <p class="control has-icons-left">
                  <input class="input" type="email" placeholder="email@email.com">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <label class="label">Say hello!</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Kia ora..."></textarea>
                </div>
              </div>
              <div class="field">
                <p class="control control-button">
                  <button class="button">Send</button>
                </p>
              </div>
            </form>
          </div>
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
ul {
  list-style: none;
}
.menu-container {
  margin: 5% auto;
  //   background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  height: 70vh;
  .menu {
    z-index: 2;
    width: 80px;
    height: 80px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    .menu-icon {
      display: flex;
      font-size: 40px;
      color: #5e7ca0;
      color: rgba(255, 255, 255, 0.3);
    }
    // .content {
    //   width: 0;
    //   opacity: 0;
    //   transform: translateX(500px);
    //   transition: all 0.8s ease-in-out;
    // }
    &:hover {
      background: rgba(255, 255, 255, 0.9);
      width: 100%;
      height: 600px;
      margin: 0;
      transition: all 0.5s ease;
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
  .menu#about {
    left: 0;
    padding: 0;
    .content {
      width: 0;
      opacity: 0;
      transition: width 0.4s ease-in-out, opacity 0.3s ease-in-out;
      padding: 0;
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
      body:-webkit-full-page-media {
        background: transparent !important;
      }
    }
    &:hover {
      background: transparent;
      .content {
        background: transparent;
        width: 100%;
        opacity: 1;
        transition: width 0.3s ease-in-out, opacity 0.9s ease-in-out;
      }
    }
  }
  .menu#tech {
    left: 0;
    right: 0;
    margin: 0 auto;
    .content {
      display: none;
    }
    &:hover {
      .content {
        display: flex;
      }
    }
  }
  .menu#contact {
    right: 0;
    .content {
      display: flex;
      width: 0;
      opacity: 0;
      transform: translateX(2000px);
      transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;
      ul {
        margin: 0;
        font-size: 1.6em;
        text-align: left;
        li {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          a {
            font-size: 0.9em;
            font-weight: 100;
          }
          .icon {
            margin-top: 3px;
            margin-right: 14px;
            font-size: 1em;
            color: #bd320cd7;
          }
        }
      }
      form {
        .label {
          text-align: left;
        }
        .control-button {
          display: flex;
          justify-content: center;
        }
      }
    }
    &:hover {
      .content {
        width: 100%;
        transform: translateX(0);
        opacity: 1;
        transition: opacity 0.5s ease-in-out, transform 0.7s ease-in-out;
      }
    }
  }
}
</style>