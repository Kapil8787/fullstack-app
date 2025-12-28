import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useState } from "react";

const getAuthStatus = () => {
  const token = localStorage.getItem("adminToken");
  if (!token) return "no";

  try {
    const decoded = jwtDecode(token);
    if (decoded.exp * 1000 > Date.now()) {
      return "yes";
    } else {
      localStorage.removeItem("adminToken");
      return "no";
    }
  } catch {
    localStorage.removeItem("adminToken");
    return "no";
  }
};

const AdminProtectedRoute = ({ children }) => {
  const [authorized] = useState(getAuthStatus);

  if (authorized === "no") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
