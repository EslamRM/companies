import instance from "../axiosConfig";
export default {
  state: {
    accesstoken: JSON.parse(localStorage.getItem("access_token")) || null,
    loggedIn: false,
    companies: "",
    name: localStorage.getItem("name") || null,
  },

  getters: {
    auth(state) {
      return state.loggedIn;
    },
  },

  mutations: {
    GET_COMPANY(state, data) {
      state.companies = data;
    },
  },
  actions: {
    GETCOMPANY({ commit }, id) {
      return new Promise((resolve, reject) => {
        instance
          .get("/public/companies/" + id)
          .then((res) => {
            commit("GET_COMPANY", res.data.data);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
