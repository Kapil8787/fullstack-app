import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import API from "../../services/api";

export default function AdminDashboard() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    contacts: 0,
    subscribers: 0,
  });

  //admin logout functionality
  const handleLogout = () => {
  localStorage.removeItem("adminToken");
  window.location.href = "/admin/login";
};

  useEffect(() => {
    Promise.all([
      API.get("/projects"),
      API.get("/clients"),
      API.get("/contact"),
      API.get("/subscribers"),
    ])
      .then(([projects, clients, contacts, subs]) => {
        setCounts({
          projects: projects.data.length,
          clients: clients.data.length,
          contacts: contacts.data.length,
          subscribers: subs.data.length,
        });
      })
      .catch((err) => console.error("Dashboard error:", err));
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Projects" count={counts.projects} />
        <Card title="Clients" count={counts.clients} />
        <Card title="Contacts" count={counts.contacts} />
        <Card title="Subscribers" count={counts.subscribers} />
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>

</div>
    </AdminLayout>
  );
}

function Card({ title, count }) {
  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl text-blue-600 font-bold mt-2">{count}</p>
    </div>
  );
}
