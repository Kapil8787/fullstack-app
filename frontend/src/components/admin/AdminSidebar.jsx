import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-3">
        <NavLink to="/admin" className="block hover:text-blue-400">
          Dashboard
        </NavLink>

        <NavLink to="/admin/projects" className="block hover:text-blue-400">
          Projects
        </NavLink>

        <NavLink to="/admin/clients" className="block hover:text-blue-400">
          Clients
        </NavLink>

        <NavLink to="/admin/contacts" className="block hover:text-blue-400">
          Contacts
        </NavLink>

        <NavLink to="/admin/subscribers" className="block hover:text-blue-400">
          Subscribers
        </NavLink>
      </nav>
    </aside>
  );
}
