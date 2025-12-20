import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

// Admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Projects from "./pages/Admin/Projects";
import Clients from "./pages/Admin/Clients";
import Contacts from "./pages/Admin/Contacts";
import Subscribers from "./pages/Admin/Subscribers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<Projects />} />
        <Route path="/admin/clients" element={<Clients />} />
        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/admin/subscribers" element={<Subscribers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
