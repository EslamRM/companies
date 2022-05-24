import instance from "../axiosConfig";
export default {
  state: {
    accesstoken: JSON.parse(localStorage.getItem("access_token")) || null,
    council_id: localStorage.getItem("council_id") || null,
    loggedIn: false,
    user_type: localStorage.getItem("user_type") || null,
    name: localStorage.getItem("name") || null,
    user_img: localStorage.getItem("user_img") || null,
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
    setCouncilID(state, council_id) {
      state.council_id = council_id;
    },
    setUserToken(state) {
      state.loggedIn = true;
      console.log(state.loggedIn);
    },
    setUserName(state, username) {
      state.name = username;
    },
    setUserImg(state, user_img) {
      state.user_img = user_img;
    },
    destroyToken(state) {
      state.accesstoken = null;
    },
    destroyCouncilID(state) {
      state.council_id = null;
    },
    destroyName(state) {
      state.name = null;
    },
    destroyUserImg(state) {
      state.user_img = null;
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
              const councilId = response.data.council_id;
              const user_img = response.data.profile.thumbnail_image;
              localStorage.setItem("access_token", JSON.stringify(token));
              localStorage.setItem("token", usersToken);
              localStorage.setItem("name", username);
              localStorage.setItem("user_type", usertype);
              localStorage.setItem("council_id", councilId);
              localStorage.setItem("user_img", user_img);
              console.log(localStorage.getItem("token"));
              commit("retrieveToken", token);
              commit("setUserToken", usersToken);
              commit("setUserName", username);
              commit("setUserType", usertype);
              commit("setCouncilID", councilId);
              commit("setUserImg", user_img);
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
            localStorage.removeItem("council_id");
            localStorage.removeItem("user_img");
            context.commit("destroyToken");
            context.commit("destroyCouncilID");
            context.commit("destroyName");
            context.commit("destroyUserImg");
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
