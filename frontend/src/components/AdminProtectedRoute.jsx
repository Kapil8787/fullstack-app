import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  // ❌ no token → redirect
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // ✅ token exists → allow access
  return children;
};

export default AdminProtectedRoute;
