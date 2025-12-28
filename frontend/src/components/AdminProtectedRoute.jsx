import { Navigate } from "react-router-dom";
import { useState } from "react";
import jwtDecode from "jwt-decode";

const AdminProtectedRoute = ({ children }) => {
  const [authorized] = useState(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      return false;
    }

    try {
      const decoded = jwtDecode(token);
      const now = Date.now();

      if (decoded.exp * 1000 < now) {
        localStorage.removeItem("adminToken");
        return false;
      }
      return true;
    } catch {
      localStorage.removeItem("adminToken");
      return false;
    }
  });

  if (!authorized) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
