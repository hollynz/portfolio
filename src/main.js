import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import menu from "./menu";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  menu,
  render: h => h(App)
}).$mount("#app");
