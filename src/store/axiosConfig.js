import axios from "axios";
const token = localStorage.getItem("token");
const instance = axios.create({
  baseURL: "https://companies-guide-ca4jc73kxa-uc.a.run.app/api/api/",
  imgUrl: "https://gold-islands-brake-2-50-5-252.loca.lt",
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
export default instance;
