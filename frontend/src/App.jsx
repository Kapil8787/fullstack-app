import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

// Admin Pages
import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Projects from "./pages/Admin/Projects";
import Clients from "./pages/Admin/Clients";
import Contacts from "./pages/Admin/Contacts";
import Subscribers from "./pages/Admin/Subscribers";

// Protected Route
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<LandingPage />} />

        {/* ================= ADMIN LOGIN ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ================= PROTECTED ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/projects"
          element={
            <AdminProtectedRoute>
              <Projects />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/clients"
          element={
            <AdminProtectedRoute>
              <Clients />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/contacts"
          element={
            <AdminProtectedRoute>
              <Contacts />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/subscribers"
          element={
            <AdminProtectedRoute>
              <Subscribers />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
