import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  // ❌ No token → go to login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // ✅ Token exists → allow route
  return children;
};

export default AdminProtectedRoute;
