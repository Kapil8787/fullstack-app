import axios from "axios";

const API = axios.create({
  baseURL: "https://flipr-backend-sm6h.onrender.com/api",
});

export default API;
