import axios from "axios";

const API = axios.create({
  baseURL: "https://flipr-backend-sm6h.onrender.com/api",
});

// 🔐 AUTO ATTACH TOKEN
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
