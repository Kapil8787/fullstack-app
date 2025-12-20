import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import API from "../../services/api";
import AddClientModal from "../../components/admin/AddClientModal";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    API.get("/clients").then((res) => setClients(res.data));
  }, []);

  const deleteClient = async (id) => {
    if (!window.confirm("Delete client?")) return;
    await API.delete(`/clients/${id}`);
    setClients(clients.filter((c) => c._id !== id));
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clients</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Client
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Designation</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((c) => (
            <tr key={c._id}>
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.designation}</td>
              <td className="border p-2">{c.description}</td>
              <td className="border p-2">
                <img
                  src={`http://localhost:5000/${c.image}`}
                  alt={c.name}
                  className="h-14 w-14 object-cover rounded"
                />
              </td>
              <td className="border p-2">
                <button
                  onClick={() => deleteClient(c._id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <AddClientModal
          onClose={() => setShowModal(false)}
          onSuccess={() =>
            API.get("/clients").then((res) => setClients(res.data))
          }
        />
      )}
    </AdminLayout>
  );
}
