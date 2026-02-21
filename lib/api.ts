import axios from "axios";

const BASE_URL = "https://abdelrahman237.pythonanywhere.com";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
