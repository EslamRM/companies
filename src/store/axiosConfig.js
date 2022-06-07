import axios from "axios";
import Vue from "vue";
import router from "../router";
import store from "./index";
const token = localStorage.getItem("token");
const instance = axios.create({
  baseURL: "https://test---companies-guide-ca4jc73kxa-uc.a.run.app/api/api/",
});
console.log("config", token);
instance.interceptors.request;
instance.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { response } = error;
    console.log(response);
    if (
      response &&
      response.status === 401 &&
      response.data.message == "Unauthenticated."
    ) {
      console.log(response);
      localStorage.removeItem("access_token");
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("council_id");
      localStorage.removeItem("user_img");
      store.commit("destroyToken");
      store.commit("destroyCouncilID");
      store.commit("destroyName");
      store.commit("destroyUserImg");
      Vue.swal({
        icon: "error",
        title: "Oops...",
        text: "Your session has been expired",
      });
      router.replace({
        path: "/login",
      });
    }
    return Promise.reject(error);
  }
);
export default instance;
