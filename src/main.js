import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/css/app.css";
import "./assets/css/global.css";
import BackToTop from "vue-backtotop";
import Chat from "vue-beautiful-chat";
import vSelect from "vue-select";
import Spinner from "vue-spinkit";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "vue-select/dist/vue-select.css";
const feather = require("feather-icons");

feather.replace();
Vue.use(BackToTop);
Vue.use(Chat);
Vue.use(vSelect);
Vue.use(VueSweetalert2);
Vue.component("Spinner", Spinner);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

const appTheme = localStorage.getItem("theme");

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
  appTheme === "dark" &&
  document.querySelector("body").classList.contains("app-theme")
) {
  document.querySelector("body").classList.add("bg-primary-dark");
} else {
  document.querySelector("body").classList.add("bg-secondary-light");
}
