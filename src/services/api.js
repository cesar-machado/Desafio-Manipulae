import axios from "axios";

const api = axios.create({
  baseURL: "https://musicsioproxy.herokuapp.com/api.deezer.com/",
});

export default api;
