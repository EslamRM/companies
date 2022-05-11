import instance from "../axiosConfig";
export default {
  state: {
    accesstoken: JSON.parse(localStorage.getItem("access_token")) || null,
    user_id: null,
    loggedIn: false,
    user_type: localStorage.getItem("user_type") || null,
    name: localStorage.getItem("name") || null,
  },

  getters: {
    auth(state) {
      return state.loggedIn;
    },
  },

  mutations: {
    retrieveToken(state, token) {
      state.accesstoken = token;
    },
    setUserType(state, user_type) {
      state.user_type = user_type;
    },
    setUserToken(state) {
      state.loggedIn = true;
      console.log(state.loggedIn);
    },
    setUserName(state, username) {
      state.name = username;
    },
    destroyToken(state) {
      state.accesstoken = null;
    },
    destroyName(state) {
      state.name = null;
      console.log(state.name);
    },
  },

  actions: {
    LOGIN({ commit }, userData) {
      return new Promise((resolve, reject) => {
        instance
          .post("/login", {
            ...userData,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.status == "Success") {
              console.log(response.data);
              const token = response.data;
              const usersToken = response.data.token;
              const username = response.data.name;
              const usertype = response.data.user_type;
              localStorage.setItem("access_token", JSON.stringify(token));
              localStorage.setItem("token", usersToken);
              localStorage.setItem("name", username);
              localStorage.setItem("user_type", usertype);
              console.log(localStorage.getItem("token"));
              commit("retrieveToken", token);
              commit("setUserToken", usersToken);
              commit("setUserName", username);
              commit("setUserType", usertype);
              resolve(response);
            } else {
              reject(response);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    LOGOUT(context) {
      return new Promise((resolve, reject) => {
        context;
        instance
          .get("/logout")
          .then((response) => {
            instance;
            localStorage.removeItem("access_token");
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            console.log("logging local storage item");
            console.log(localStorage.getItem("access_token"));
            context.commit("destroyToken");
            context.commit("destroyName");
            resolve(response);
          })
          .catch((error) => {
            localStorage.removeItem("access_token");
            context.commit("destroyToken");
            reject(error);
          });
      });
    },
  },
};
