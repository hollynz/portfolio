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
        <!-- <p>I'm Holly.</p>
            <p>I'm a web developer and a big fan of Vue.js.</p>
            <p>I like to ride a mountain bike and play my drums.</p>
            <p>I also like to take photos of non-mainstream mountains.</p>
            <p>I have a cool math degree.</p>
            <p>I live in Christchurch, New Zealand.</p>
        <p>You can find me out riding my bike.</p>-->
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
          <div class="column">
            <a href="https://yoobee-vuejs.netlify.com" target="_blank">
              <img src="../assets/projects/rad/rad-home.png" alt="RAd">
            </a>
          </div>
          <div class="column">
            <a href="https://holly.johnson.18cdwux07.yoobee.net.nz/wux04/" target="_blank">
              <img src="../assets/projects/vets/vets-home.png" alt="Vets@St.Clair">
            </a>
          </div>
          <div class="column">
            <a href="https://anamata.herokuapp.com" target="_blank">
              <img src="../assets/projects/anamata/anamata-home.png" alt="Anamata Cafe">
            </a>
          </div>
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
        <h1>Get in Touch!</h1>
        <!-- <img class="nz-map" src="../assets/nz-map.png" alt="Map of NZ"> -->
        <div class="columns is-8">
          <div class="column is-two-fifths">
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/place/Christchurch/@-43.5127894,172.3188943,10z/data=!3m1!4b1!4m5!3m4!1s0x6d322f4863c5ed01:0x500ef8684799945!8m2!3d-43.5320544!4d172.6362254"
                  target="_blank"
                >
                  <span class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <span class="name">Christchurch, New Zealand</span>
                </a>
              </li>
              <li>
                <a href="https://www.trimble.com" target="_blank">
                  <span class="icon">
                    <i class="fas fa-laptop-code"></i>
                  </span>
                  <span class="name">Trimble</span>
                </a>
              </li>
              <li>
                <a href="https://www.github.com/hollynz" target="_blank">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span class="name">@hollynz</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hollaylay" target="_blank">
                  <span class="icon">
                    <i class="fab fa-instagram"></i>
                  </span>
                  <span class="name">@hollaylay</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/holly-johnson-nz/" target="_blank">
                  <span class="icon">
                    <i class="fab fa-linkedin-in"></i>
                  </span>
                  <span class="name">Holly Johnson</span>
                </a>
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
  margin: 4% auto;
  margin-bottom: 0;
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
    &:hover {
      background: rgba(255, 255, 255, 0.9);
      width: 100%;
      height: 100%;
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
      }
    }
  }
  // Menu: About
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
  // Menu: Tech
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
        height: 100%;
        .columns {
          margin: 0;
          padding: 0;
          height: 100%;
          .column {
            height: 100%;
            display: flex;
            align-items: center;
            flex-grow: 1;
            &:hover {
              img {
                width: 500px;
              }
            }
          }
        }
      }
    }
  }
  // Menu: Contact
  .menu#contact {
    right: 0;
    .content {
      display: flex;
      width: 0;
      h1 {
        opacity: 0;
        width: 80%;
        text-align: left;
        font-size: 2.6em;
        color: #222222;
        transform: translateX(1200px);
        transition: transform 0.5s ease-in-out;
      }
      .columns {
        width: 80%;
        align-items: center;
        ul {
          opacity: 0;
          margin: 0;
          font-size: 1.6em;
          text-align: left;
          transform: translateX(1200px);
          transition: transform 0.5s ease-in-out;
          li {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            a {
              .icon {
                margin-top: 8px;
                margin-right: 18px;
                font-size: 1.1em;
                color: #222222;
              }
              .name {
                font-size: 0.9em;
                font-weight: 100;
                color: #bd320cd7;
              }
              &:hover {
                .icon {
                  color: #5080aa;
                }
                .name {
                  color: #5080aa;
                }
              }
            }
          }
        }
        form {
          opacity: 0;
          transform: translateX(1600px);
          transition: transform 0.5s ease-in-out;
          .label {
            text-align: left;
          }
          .control-button {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            .button {
              border: solid 1px #ffffff;
              background: #bd320cd7;
              color: #ffffff;
            }
          }
        }
      }
    }
    &:hover {
      .content {
        width: 100%;
        h1 {
          transform: translateX(0);
          opacity: 1;
          transition: transform 0.6s ease-in-out;
        }
        ul {
          transform: translateX(0);
          opacity: 1;
          transition: transform 0.7s ease-in-out;
        }
        form {
          transform: translateX(0);
          opacity: 1;
          transition: transform 0.8s ease-in-out;
        }
      }
    }
  }
}
</style>