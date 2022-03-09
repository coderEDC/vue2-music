import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(new Error(err));
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return Promise.reject(new Error("请求失败", err));
  }
);

export default instance;
