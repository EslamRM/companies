import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import company from "./modules/company";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    auth,
    company,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
